import { AppstoreOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
import styles from '~/components/Section/section.module.scss';

interface Props {
  name: string;

  link?: {
    path: string;
    textHolder: string;
  };
}
const Section = ({ name, link }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <div className={styles.container}>
              <h2>
                <AppstoreOutlined />
                {name}
              </h2>
              {link && (
                <Link href={link.path}>
                  {link.textHolder}
                  <ArrowRightOutlined />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
