import { useEditor, EditorContent, Editor, ReactNodeViewRenderer } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import styles from './tiptap.module.scss';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import codeBlock from '@tiptap/extension-code-block';
import Blockquote from '@tiptap/extension-blockquote';
import Heading from '@tiptap/extension-heading';
import Image from '@tiptap/extension-image';
// Option 1: Browser + server-side
import { generateHTML } from '@tiptap/html';
import React, { useCallback, useMemo, useState } from 'react';
import clsx from 'clsx';
import { BoldOutlined, ItalicOutlined, UnderlineOutlined } from '@ant-design/icons';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight';

import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import CodeBlockComponent from './CodeBlockComponent';
import DescriberComponent from './DescriberComponent';
import TableOfContents from './TOC';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);

const MenuBar = ({ editor }: any, { addImage }: any) => {
  if (!editor) {
    return null;
  }

  return (
    <div className={styles.menuBar}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={clsx(styles.button, editor.isActive('bold') && styles.isActived)}
      >
        <BoldOutlined />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={clsx(styles.button, editor.isActive('italic') && styles.isActived)}
      >
        <ItalicOutlined />
      </button>
      <button
        onClick={() => editor.commands().toggleUnderline().run()}
        className={clsx(styles.button, editor.isActive('italic') && styles.isActived)}
      >
        <UnderlineOutlined />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={clsx(styles.button, editor.isActive('strike') && styles.isActived)}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={clsx(styles.button, editor.isActive('code') && styles.isActived)}
      >
        code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>clear marks</button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>clear nodes</button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={clsx(styles.button, editor.isActive('paragraph') && styles.isActived)}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={clsx(styles.button, editor.isActive('paragraph') && styles.isActived)}
      >
        Describe code
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={clsx(
          styles.button,
          editor.isActive('heading', { level: 1 }) && styles.isActived,
        )}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? styles.isActived : ''}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? styles.isActived : ''}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? styles.isActived : ''}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? styles.isActived : ''}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? styles.isActived : ''}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? styles.isActived : ''}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? styles.isActived : ''}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? styles.isActived : ''}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? styles.isActived : ''}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>hard break</button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={editor.isActive('textStyle', { color: '#958DF1' }) ? styles.isActived : ''}
      >
        purple
      </button>
      <button
        onClick={() => {
          // editor
          //   .chain()
          //   .focus()
          //   .setImage({
          //     src: 'https://i.pinimg.com/474x/30/9a/70/309a70ec4c7f20cdc5bba96441d409ea.jpg',
          //   })
          //   .run();

          editor.commands.insertContent({
            type: 'image',
            attrs: {
              src: 'https://i.pinimg.com/474x/30/9a/70/309a70ec4c7f20cdc5bba96441d409ea.jpg',
              alt: 'Image',
              title: 'Image',
            },
          });
        }}
      >
        add image
      </button>
    </div>
  );
};

const TipTap = () => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] } as any),
      Image.configure({
        HTMLAttributes: {
          class: styles.tiptapImage,
        },
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),

      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlockComponent);
        },
      }).configure({ lowlight, defaultLanguage: 'javascript' }),
      Blockquote.configure({
        HTMLAttributes: {
          class: styles.describer,
        },
      }),
      TableOfContents,
    ],

    content: `
        <toc></toc>
        <p>Hdllo</p>
        
      `,
  });

  const [content, setContent] = useState('');

  const handleGetEditorContent = () => {
    const contentUpdated = generateHTML(editor!.getJSON(), [
      Document,
      Paragraph,
      Text,
      Bold,
      codeBlock,
      TableOfContents,
      Heading,
      Image,
    ]);
    console.log(editor?.getJSON());
    setContent(contentUpdated);
  };

  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-12 m-12 c-12">
          <MenuBar editor={editor as any} />
          <EditorContent editor={editor} className={styles.editorContent} />

          <button onClick={handleGetEditorContent}>get content</button>
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
      </div>
    </div>
  );
};

export default TipTap;
