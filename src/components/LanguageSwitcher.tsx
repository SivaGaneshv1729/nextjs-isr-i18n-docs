"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: string) => {
    // Replace the first segment (e.g., /en/...) with the new lang
    const segments = pathname.split("/");
    segments[1] = lang; 
    router.push(segments.join("/"));
  };

  return (
    <div data-testid="language-switcher" className="flex gap-2">
      {['en', 'es', 'fr', 'de', 'ja'].map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className="uppercase font-bold hover:text-blue-500"
        >
          {lang}
        </button>
      ))}
    </div>
  );
}