"use client";
import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { useRouter } from "next/navigation";

export default function Search({ lang, dictionary, searchData }: { lang: string, dictionary: any, searchData?: any[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const router = useRouter();

  // Initialize Fuse.js
  const fuse = new Fuse(searchData || [], {
    keys: ['title', 'content'],
    threshold: 0.3,
  });

  useEffect(() => {
    if (query) {
       const res = fuse.search(query);
       setResults(res.map(r => r.item));
    } else {
       setResults([]);
    }
  }, [query, searchData]);

  const handleSelect = (slug: string) => {
      // Assuming everything is v1 for simplicity in search 
      // or we should store version in searchData
      router.push(`/${lang}/docs/v1/${slug}`);
      setQuery("");
  };

  return (
    <div className="relative">
      <input
        data-testid="search-input"
        type="text"
        placeholder={dictionary?.search || "Search..."}
        className="border p-2 rounded w-full text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <div className="absolute top-full w-full bg-white dark:bg-gray-800 border mt-1 p-2 max-h-60 overflow-y-auto z-50">
          {results.length > 0 ? (
            <ul data-testid="search-results">
              {results.map((r, i) => (
                  <li 
                    key={i} 
                    className="p-1 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleSelect(r.slug)}
                  >
                        <div className="font-bold">{r.title}</div>
                  </li>
              ))}
            </ul>
          ) : (
            <div data-testid="search-no-results">{dictionary?.search_no_results || "No results"}</div>
          )}
        </div>
      )}
    </div>
  );
}