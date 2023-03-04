import React, { useEffect, useRef, useState } from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import logo from '~/statics/images/logo-3.png';
import Link from 'next/link';
import { HeaderFeatures } from '~/utils/constant';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { SearchOutlined } from '@ant-design/icons';
const Header = () => {
  const router = useRouter();
  const [featureActived, setfeatureActived] = useState(HeaderFeatures.HOME.name);

  useEffect(() => {
    setfeatureActived(router.pathname);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <div className={styles.container}>
              {/* Logo and Features */}
              <div className={styles.logo}>
                <Image alt="logo" src={logo} />
                <div className={clsx(styles.features)}>
                  <Link
                    href={HeaderFeatures.HOME.path}
                    className={clsx(featureActived === HeaderFeatures.HOME.path && styles.actived)}
                  >
                    {HeaderFeatures.HOME.name}
                  </Link>
                  <Link
                    href={HeaderFeatures.SERIES.path}
                    className={clsx(
                      featureActived === HeaderFeatures.SERIES.path && styles.actived,
                    )}
                  >
                    {HeaderFeatures.SERIES.name}
                  </Link>
                  <Link
                    href={HeaderFeatures.CONTACT.path}
                    className={clsx(
                      featureActived === HeaderFeatures.CONTACT.path && styles.actived,
                    )}
                  >
                    {HeaderFeatures.CONTACT.name}
                  </Link>
                </div>
              </div>
              {/* Search */}
              <div className={styles.search}>
                <input type="text" placeholder="Enter something..." />
                <SearchOutlined className={styles.searchIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
