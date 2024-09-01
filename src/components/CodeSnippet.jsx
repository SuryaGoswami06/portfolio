import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeSnippet({children}) {
  const codeString = Array.isArray(children) ? children.join('') : children;
  return (
    <SyntaxHighlighter language='javascript' style={docco}>
     {codeString}
  </SyntaxHighlighter>
  )
}

export default CodeSnippet;