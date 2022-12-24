import React from "react";
import cn from 'classnames';
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
import { links } from "../../data/header/link";
import { imageLogo } from '../../data/header/image';
import styles from './baseLayoutStyles.module.scss'

export interface BaseLayoutPropsTypes {
  className?: string;
  children: any;
}

const BaseLayout: React.FC<BaseLayoutPropsTypes> = props => {
  const { className, children } = props;
  const rootClassNames = cn(styles.root, className)

  return (
    <>
      <Header logoImage={imageLogo} links={links} className={rootClassNames} />
      <main>
        <div className={rootClassNames} >
          {children}
        </div>
      </main>
      <Footer className={rootClassNames} />
    </>
  )
}

export default BaseLayout;
