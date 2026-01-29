"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function VersionSelector() {
  const router = useRouter();
  const pathname = usePathname();
  // Always v1 for now
  const currentVersion = "v1"; 

  return (
    <div className="relative">
      <div 
        data-testid="version-selector" 
        className="border border-border bg-muted/50 px-2 py-1 rounded text-xs font-mono text-muted-foreground"
      >
        {currentVersion}
      </div>
    </div>
  );
}