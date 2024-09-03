import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeSnippet({ children }) {
  let text = '';

  // Flatten children and convert it to a single string
  const flattenChildren = (children) => {
    React.Children.forEach(children, (child) => {
      if (typeof child === 'string') {
        text += child;
      } else if (React.isValidElement(child)) {
        flattenChildren(child.props.children);
      }
    });
  };

  flattenChildren(children);
  return (
    <SyntaxHighlighter language="javascript" style={materialDark}>
      {text}
    </SyntaxHighlighter>
  );
}

export default CodeSnippet;
