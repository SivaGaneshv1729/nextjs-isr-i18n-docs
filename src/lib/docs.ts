import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const docsDirectory = path.join(process.cwd(), '_docs');

export async function getDocContent(version: string, lang: string, slug: string) {
  const fullPath = path.join(docsDirectory, version, lang, `${slug}.md`);
  
  // Fallback to English if localized file doesn't exist
  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (err) {
    if (lang !== 'en') {
        try {
             const fallbackPath = path.join(docsDirectory, version, 'en', `${slug}.md`);
             fileContents = fs.readFileSync(fallbackPath, 'utf8');
        } catch (e) {
             return null;
        }
    } else {
        return null;
    }
  }

  const matterResult = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    meta: matterResult.data,
  };
}

export function getAllDocs(version: string = 'v1', lang: string = 'en') {
    // Utility to list all docs for search indexing or static params
    const dir = path.join(docsDirectory, version, lang);
    if (!fs.existsSync(dir)) return [];
    
    const fileNames = fs.readdirSync(dir);
    return fileNames.map(fileName => {
        return {
            slug: fileName.replace(/\.md$/, ''),
        }
    })
}

export async function getSearchData(version: string, lang: string) {
    const docs = getAllDocs(version, lang);
    const searchData = [];
    
    for (const doc of docs) {
        const fullPath = path.join(docsDirectory, version, lang, `${doc.slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        
        searchData.push({
            slug: doc.slug,
            title: matterResult.data.title || doc.slug,
            content: matterResult.content
        });
    }
    return searchData;
}

