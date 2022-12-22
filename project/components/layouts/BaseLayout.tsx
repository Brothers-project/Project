import React from "react";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
import { brand, links } from "../../data/header/link";

export interface BaseLayoutPropsTypes {
  className?: string;
  navClass?: string;
  children: any;
}

const BaseLayout: React.FC<BaseLayoutPropsTypes> = props => {
  const { className, navClass = "with-bg", children } = props;
  return (
    <div>
      <Header brand={brand} links={links} className={navClass} />
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
      <Footer className={navClass} />
    </div>
  )
}

export default BaseLayout;
