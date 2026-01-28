"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the interface for navigation items
interface NavItem {
  slug: string;
  label: string;
}

export default function Sidebar({ lang, navItems }: { lang: string; navItems: NavItem[] }) {
  const pathname = usePathname();
  // Extract version from URL or default to v1
  const version = pathname.split("/")[3] || "v1"; 

  return (
    <aside data-testid="sidebar" className="w-64 h-screen bg-gray-50 dark:bg-gray-900 p-4 border-r overflow-y-auto sticky top-0">
      <nav className="flex flex-col gap-2">
        {navItems.map((link) => (
          <Link
            key={link.slug}
            href={`/${lang}/docs/${version}/${link.slug}`}
            data-testid={`sidebar-nav-link-${link.slug}`}
            className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 ${pathname.includes(link.slug) ? 'bg-gray-200 dark:bg-gray-800 font-bold' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}