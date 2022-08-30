import React from 'react';
import styles from './layout.module.css';

type Children = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ children }: Children) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
