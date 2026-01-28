"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function VersionSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const currentVersion = pathname.includes("/v2") ? "v2" : pathname.includes("/v3") ? "v3" : "v1";

  const changeVersion = (ver: string) => {
    // Regex to replace /v1/, /v2/, etc. in the URL
    const newPath = pathname.replace(/\/v\d+/, `/${ver}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        data-testid="version-selector" 
        onClick={() => setIsOpen(!isOpen)}
        className="border p-1 rounded"
      >
        {currentVersion}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 bg-white dark:bg-black border mt-1 p-2 flex flex-col">
          {['v1', 'v2', 'v3'].map((v) => (
            <button
              key={v}
              data-testid={`version-option-${v}`}
              onClick={() => changeVersion(v)}
              className="text-left hover:bg-gray-100 dark:hover:bg-gray-800 p-1"
            >
              {v}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}