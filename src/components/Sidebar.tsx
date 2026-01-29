"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, FileText, Home } from "lucide-react";

interface NavItem {
  slug: string;
  label: string;
}

export default function Sidebar({ lang, navItems }: { lang: string; navItems: NavItem[] }) {
  const pathname = usePathname();
  const version = pathname.split("/")[3] || "v1"; 

  // Helper to determine active state
  const isActive = (slug: string) => pathname.includes(slug);

  return (
    <aside data-testid="sidebar" className="w-64 h-screen border-r border-border bg-background/50 backdrop-blur-xl sticky top-0 flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2 font-bold text-xl">
           <BookOpen className="w-6 h-6 text-primary" />
           <span>Docs</span>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
            Overview
        </span>
        {navItems.map((link) => (
          <Link
            key={link.slug}
            href={`/${lang}/docs/${version}/${link.slug}`}
            data-testid={`sidebar-nav-link-${link.slug}`}
            className={`
                flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200
                ${isActive(link.slug) 
                    ? 'bg-primary/10 text-primary font-medium' 
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }
            `}
          >
            {link.slug === 'introduction' ? <Home className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            {link.label}
          </Link>
        ))}
      </nav>
      
      <div className="p-4 border-t border-border text-xs text-muted-foreground text-center">
        v{version} Documentation
      </div>
    </aside>
  );
}