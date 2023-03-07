import React from 'react';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import styles from './tiptap.module.scss'
const DescriberComponent = () => {
  return <NodeViewWrapper className={styles.describer}>
    <NodeViewContent as="p" />
  </NodeViewWrapper>;
};

export default DescriberComponent;
