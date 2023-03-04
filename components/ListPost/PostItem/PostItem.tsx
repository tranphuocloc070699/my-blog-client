import { StarOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';
import styles from '~/components/ListPost/PostItem/post-item.module.scss';
import nginx from '~/statics/images/nginx.png';
import authorAvatar from '~/statics/images/logo-3.png';
import { Tooltip } from 'antd';

interface Props {
  id: number;
  title: string;
  createdAt: Date;
}
const PostItem = ({ ...props }: Props) => {
  return (
    <div className={styles.container}>
      <Image className={styles.thumbnail} src={nginx} alt="nginx" />
      <Tooltip title={props.title}>
        <h3 className={styles.title}>{props.title}</h3>
      </Tooltip>
      <div className={styles.footer}>
        <div className={styles.author}>
          <Image className={styles.authorAvatar} src={authorAvatar} alt="avatar" />
          <div className={styles.authorInfo}>
            <h4>Administrator</h4>
            <h5>{props.createdAt.toLocaleDateString()}</h5>
          </div>
        </div>
        <div className={styles.favourite}>
          <StarOutlined />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
