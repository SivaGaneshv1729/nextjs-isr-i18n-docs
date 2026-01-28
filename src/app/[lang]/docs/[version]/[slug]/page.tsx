import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import VersionSelector from "@/components/VersionSelector";
import ThemeToggle from "@/components/ThemeToggle";
import Search from "@/components/Search";
import TableOfContents from "@/components/TableOfContents";
import DocContent from "@/components/DocContent";
import { getDocContent, getAllDocs } from "@/lib/docs";
import { getDictionary } from "@/i18n/get-dictionary";

// ISR Requirement: Revalidate every 60 seconds
export const revalidate = 60; 

// Generate Static Params for build time
export async function generateStaticParams() {
  const languages = ['en', 'es', 'fr', 'de'];
  const versions = ['v1']; // Currently only created v1 content
  
  const params = [];
  for (const lang of languages) {
    for (const version of versions) {
       // Get all docs for this version/lang to generate slugs
       const docs = getAllDocs(version, lang);
       for (const doc of docs) {
         params.push({ lang, version, slug: doc.slug });
       }
    }
  }
  return params;
}

export default async function DocPage({ params }: { params: Promise<{ lang: string; version: string; slug: string }> }) {
  const { lang, version, slug } = await params;

  const doc = await getDocContent(version, lang, slug);
  const dictionary = await getDictionary(lang);

  if (!doc) {
    return notFound();
  }

  // Get all docs for sidebar navigation
  // In a real app, you might group these by category
  const allDocs = getAllDocs(version, lang).map(d => ({ slug: d.slug, label: d.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }));

  return (
    <div className="flex min-h-screen">
      <Sidebar lang={lang} navItems={allDocs} />
      
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8 border-b pb-4">
          <div className="w-1/3"><Search lang={lang} dictionary={dictionary} /></div>
          <div className="flex gap-4 items-center">
             <LanguageSwitcher />
             <VersionSelector />
             <ThemeToggle />
          </div>
        </header>

        <div className="flex">
          <div className="flex-1">
             {/* ID for TOC linking */}
             <div id={slug}> 
               <DocContent 
                 contentHtml={doc.contentHtml} 
                 title={doc.meta.title} 
                 lang={lang} 
                 dictionary={dictionary} 
               />
             </div>
          </div>
          <div className="w-48 hidden lg:block">
            <TableOfContents />
          </div>
        </div>
      </main>
    </div>
  );
}
