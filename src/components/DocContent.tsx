"use client";
import { useState, useEffect } from "react";

export default function DocContent({ contentHtml, title, lang, dictionary }: { contentHtml: string, title: string, lang: string, dictionary: any }) {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Requirement: Copy button for code blocks.
  // Since we are rendering HTML string, we need to attach event listeners after render
  // or use a library. For simplicity in this task, we will just demonstrate the button with the mock block requirement
  // but also allow the rendered HTML to be shown.
  // REAL IMPLEMENTATION NOTE: Creating a component to hydrate code blocks would be better, 
  // but strictly following the requirement "All code blocks... must include a button",
  // we can use a useEffect to add buttons to <pre> tags in the rendered HTML.
  
  useEffect(() => {
    const preTags = document.querySelectorAll('pre');
    preTags.forEach(pre => {
        if (pre.parentNode && (pre.parentNode as HTMLElement).classList.contains('relative')) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'relative group';
        wrapper.setAttribute('data-testid', 'code-block');
        
        pre.parentNode?.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        const button = document.createElement('button');
        button.innerText = dictionary.copy_code;
        button.className = 'absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity';
        button.setAttribute('data-testid', 'copy-code-button');
        button.onclick = () => {
             navigator.clipboard.writeText(pre.innerText);
             button.innerText = dictionary.copied;
             setTimeout(() => button.innerText = dictionary.copy_code, 2000);
        };
        wrapper.appendChild(button);
    });
  }, [contentHtml, dictionary]);


  return (
    <div className="p-6">
      <div data-testid="doc-content">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        
        {/* Render Markdown Content */}
        <div 
            className="prose dark:prose-invert max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: contentHtml }} 
        />
        
        {/* Feedback Widget Requirement */}
        <div className="border-t pt-4 mt-8">
          <h3 className="text-lg font-bold">{dictionary.feedback}</h3>
          {!submitted ? (
            <div className="flex gap-2 mt-2">
              <input
                data-testid="feedback-input"
                className="border p-2 rounded text-black"
                placeholder={dictionary.feedback + "..."}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <button
                data-testid="feedback-submit"
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => setSubmitted(true)}
              >
                {dictionary.submit}
              </button>
            </div>
          ) : (
            <div data-testid="feedback-success-message" className="text-green-600 font-bold mt-2">
              {dictionary.feedback_success}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
