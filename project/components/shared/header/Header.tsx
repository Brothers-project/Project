
import React from 'react';
import cn from 'classnames';
import {
    HeaderPropsType,
} from './type';
import DesktopHeader from './desktopHeader/DesktopHeader';
import styles from './header.module.scss';
import MobileHeader from './mobileHeder/MobileHeader';

const Header: React.FC<HeaderPropsType> = ({ logoImage, links, className }) => {

    return (
        <>
            <DesktopHeader logoImage={logoImage} links={links} className={cn(className, styles.header, styles.desktopHeader)} />
            <MobileHeader logoImage={logoImage} links={links} className={cn(className, styles.header, styles.mobileHeader)} />
        </>
    );
}

export default Header;
