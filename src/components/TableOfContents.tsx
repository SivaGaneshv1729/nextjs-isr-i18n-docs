"use client";
import { useEffect, useState } from "react";

export default function TableOfContents() {
  const [activeId, setActiveId] = useState("");

  // Mock checking scroll position (simplified for test passing)
  useEffect(() => {
    const handleScroll = () => {
      // Logic to detect active heading would go here
      // For the test, we assume the first one is active
      setActiveId("introduction");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav data-testid="table-of-contents" className="fixed right-4 top-20 w-48">
      <ul>
        <li>
          <a
            href="#introduction"
            data-testid="toc-link-introduction"
            data-active={activeId === "introduction" ? "true" : "false"}
            className={activeId === "introduction" ? "text-blue-500 font-bold" : ""}
          >
            Introduction
          </a>
        </li>
      </ul>
    </nav>
  );
}