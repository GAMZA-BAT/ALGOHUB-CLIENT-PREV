import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeHighlighter = ({ code, language }: { code: string; language: string }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={dracula}
      wrapLines={true}
      wrapLongLines={true}
      customStyle={CodeWrapper}
      PreTag="div"
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;

const CodeWrapper: React.CSSProperties = {
  margin: '0',
  padding: '20px',
  width: '50%',
  height: '100%',

  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',

  borderRadius: '20px',
  fontSize: '20px',

  overflowY: 'scroll',
};
