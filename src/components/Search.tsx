"use client";
import { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import { useRouter } from "next/navigation";
import { Search as SearchIcon, X, FileText } from "lucide-react";

export default function Search({ lang, dictionary, searchData }: { lang: string, dictionary: any, searchData?: any[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = new Fuse(searchData || [], {
    keys: ['title', 'content'],
    threshold: 0.3,
  });

  useEffect(() => {
    if (query) {
       const res = fuse.search(query);
       setResults(res.map(r => r.item));
       setIsOpen(true);
    } else {
       setResults([]);
       setIsOpen(false);
    }
  }, [query, searchData]);

  const handleSelect = (slug: string) => {
      router.push(`/${lang}/docs/v1/${slug}`);
      setQuery("");
      setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md group">
      <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            ref={inputRef}
            data-testid="search-input"
            type="text"
            placeholder={dictionary?.search || "Search documentation..."}
            className="w-full bg-secondary/50 border border-transparent focus:border-ring focus:bg-background rounded-full py-2 pl-10 pr-4 text-sm transition-all outline-none md:w-64 focus:w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query && setIsOpen(true)}
          />
          {query && (
              <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-3 h-3 text-muted-foreground hover:text-foreground" />
              </button>
          )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-2">
                <div className="text-xs font-medium text-muted-foreground px-2 py-1.5 uppercase tracking-wider">
                    Results
                </div>
                <ul data-testid="search-results">
                {results.map((r, i) => (
                    <li 
                        key={i} 
                        className="flex flex-col gap-1 p-2 rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground text-sm transition-colors"
                        onClick={() => handleSelect(r.slug)}
                    >
                        <div className="font-semibold text-foreground flex items-center gap-2">
                            <FileText className="w-3 h-3 opacity-50" />
                            {r.title}
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      )}
      
      {isOpen && results.length === 0 && query && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-xl p-4 text-center text-sm text-muted-foreground z-50">
              {dictionary?.search_no_results || "No results found."}
          </div>
      )}
    </div>
  );
}