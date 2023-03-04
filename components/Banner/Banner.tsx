import Image from 'next/image';
import React from 'react';
import styles from '~/components/Banner/banner.module.scss';
import banner from '~/statics/images/banner.jpeg';
const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
