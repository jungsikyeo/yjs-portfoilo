import React, { useEffect } from "react";
import Prism from "prismjs";
import "../styles/prism.css";

Prism.languages.json = {
  property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
  string: {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    greedy: true,
  },
  number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
  punctuation: /[{}[\]);,]/,
  operator: /:/g,
  boolean: /\b(?:true|false)\b/i,
  null: /\bnull\b/i,
};

Prism.languages.jsonp = Prism.languages.json;

export const JsonViewer = (props) => {
  const jsonContent = props.currentTab?.content;
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="content-preview">
      <pre style={{ backgroundColor: "var(--contentsBackground)" }}>
        <code className={`language-json`}>
          <div
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                jsonContent,
                Prism.languages.json,
                "javascript"
              ),
            }}
          />
        </code>
      </pre>
    </div>
  );
};
