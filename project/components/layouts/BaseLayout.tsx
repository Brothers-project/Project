import React from "react";
import cn from 'classnames';
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
import { links } from "../../data/header/link";
import { imageLogoBlack, imageLogoWhite } from '../../data/header/image';
import styles from './baseLayoutStyles.module.scss'
import Background from "../component/background/Bacground";

export interface BaseLayoutPropsTypes {
  className?: string;
  children: any;
}

const BaseLayout: React.FC<BaseLayoutPropsTypes> = props => {
  const { className, children } = props;
  const rootClassNames = cn(styles.root, className, styles.wrapperClassnames)

  return (
    <>
    <Background background='white'>
      <Header logoImage={imageLogoBlack} links={links} className={cn(rootClassNames)} />
      </Background>
      <main>
      <Background background='white'>
        <div className={rootClassNames} >
          {children}
        </div>
        </Background>
      </main>
      <Background background="black">
      <Footer logoImage={imageLogoWhite} links={links} className={rootClassNames} />
      </Background>
    </>
  )
}

export default BaseLayout;
