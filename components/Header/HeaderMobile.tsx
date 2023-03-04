import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import styles from '~/components/Header/header-mobile.module.scss';
import logo from '~/statics/images/logo-3.png';
import { HeaderFeatures } from '~/utils/constant';
const HeaderMobile = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [featureActived, setfeatureActived] = useState(HeaderFeatures.HOME.name);

  useEffect(() => {
    setfeatureActived(router.pathname);
  }, []);
  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={styles.menuIcon}>
          <MenuOutlined
            onClick={() => {
              isMenuOpen ? closeMenu() : openMenu();
            }}
          />
          <div className={clsx(styles.menu, isMenuOpen && styles.open)}>
            <div className={clsx(styles.features)}>
              <Link
                href={HeaderFeatures.HOME.path}
                className={clsx(featureActived === HeaderFeatures.HOME.path && styles.actived)}
              >
                {HeaderFeatures.HOME.name}
              </Link>
              <Link
                href={HeaderFeatures.SERIES.path}
                className={clsx(featureActived === HeaderFeatures.SERIES.path && styles.actived)}
              >
                {HeaderFeatures.SERIES.name}
              </Link>
              <Link
                href={HeaderFeatures.CONTACT.path}
                className={clsx(featureActived === HeaderFeatures.CONTACT.path && styles.actived)}
              >
                {HeaderFeatures.CONTACT.name}
              </Link>
            </div>
            <div className={styles.search}>
              <input type="text" placeholder="Enter something..." />
              <SearchOutlined className={styles.searchIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
