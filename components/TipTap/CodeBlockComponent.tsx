import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import React, { useEffect, useRef, useState } from 'react';
import styles from './tiptap.module.scss';

interface Props {
  node: {
    attrs: {
      language: any;
    };
  };
  updateAttributes: any;
  extension: any;
}

// {
//     node: {
//       attrs: { language: defaultLanguage },
//     },
//     updateAttributes,
//     extension,
//   }: Props
const CodeBlockComponent = (props: any) => {
  const [fileName, setFileName] = useState('');
  useEffect(() => {
    if(props.node.content.content[0]){
      console.log({
      
        content: props.node.content.content[0].text,
      });
    }
  }, []);

  const handleCopyToClipboard = () => {
    const clipboard = navigator.clipboard;
    
    const value = props.node.content.content[0].text;
    if (clipboard) {
      navigator.clipboard
        .writeText(value)
        .then((data) => {
          console.log({
            success: data,
          });
        })
        .catch((err) =>
          console.log({
            err,
          }),
        );
    }
  };
  return (
    <NodeViewWrapper className={styles.codeBlock}>
      {/* <select
        contentEditable={false}
        // defaultValue={defaultLanguage}
        onChange={(event) => updateAttributes({ language: event.target.value })}
      >
        <option value="null">auto</option>
        <option disabled>—</option>
        {extension.options.lowlight.listLanguages().map((lang: any, index: any) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select> */}
      <button
        onClick={() => {
          handleCopyToClipboard();
        }}
      >
        copy to clipboard
      </button>

      <pre>
        <div>{fileName}</div>
        <NodeViewContent as="code" />
      </pre>
    </NodeViewWrapper>
  );
};

export default CodeBlockComponent;
