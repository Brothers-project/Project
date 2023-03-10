
import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import ActiveLink from '../../activeLink/ActiveLink';
import { imageChevron, imageChevronActive } from '../../../../data/header/image';
import { linkToSection } from '../../../../data/header/link';
import ImageComponent from '../../../image/Image';
import Dropdown from './dropdown/Dropdown';
import {
    HeaderPropsType,
    ImageNavBrandProps,
    NavLinkProps
} from '../type';
import styles from './desktopHeader.module.scss';
import Background from '../../../component/background/Background';

const ImageNavBrand = (props: ImageNavBrandProps) => {
    const { logoImage } = props;

    return (
        <Link href="/">
            <ImageComponent
                {...logoImage}
                layout='fill'
                objectFit='contain'
                className={styles.wrapperBrandImageComponent}
            />
        </Link>
    )
};

const NavLinkCollapse = (props: NavLinkProps) => {
    const { isOverID, title, href, id } = props;
    const showDropdownMenu = isOverID === id;
    const imageChevronShow = showDropdownMenu ? imageChevronActive : imageChevron

    return (
        <div className={styles.navLinkCollapseWrapper}>
            <ActiveLink href={href}>
                <div className={styles.linkCollapseWrapper}>
                    <span className={styles.collapseTitle}>{title}</span>
                    <ImageComponent
                        {...imageChevronShow}
                        layout='fill'
                        objectFit='contain'
                        className={styles.wrapperChevronImageComponent}
                    />
                </div>
            </ActiveLink>
            {
                showDropdownMenu && <Dropdown linkToSection={linkToSection} />
            }
        </div>
    )
};

const NavLink = (props: NavLinkProps) => {
    const { href, title, collapse = false } = props;

    return (
        <div>
            {
                collapse
                    ? <NavLinkCollapse {...props} />
                    : <ActiveLink href={href}>
                        <span>{title}</span>
                    </ActiveLink>
            }
        </div>
    )
};

const DesktopHeader: React.FC<HeaderPropsType> = ({ logoImage, links, className }) => {
    const [isOverID, setIsOverID] = React.useState(99999);

    const onLinkMouseOver = (e: React.MouseEvent<HTMLLIElement>, id: number) => {
        e.preventDefault();
        setIsOverID(id)
    }

    const onLinkMouseOut = (e: React.MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        setIsOverID(99999)
    }

    return (
        <Background background='white'>
            <nav className={cn(styles.wrapper, className)}>
                <ImageNavBrand logoImage={logoImage} />
                <ul className={styles.containerLinks}>
                    {
                        links.map((link) =>
                            <li
                                key={link.id}
                                className={styles.link}
                                onMouseOver={(e) => onLinkMouseOver(e, link.id)}
                                onMouseOut={onLinkMouseOut}
                            >
                                <NavLink isOverID={isOverID} {...link} />
                            </li>
                        )
                    }
                </ul>
            </nav>
        </Background>
    );
}

export default DesktopHeader;
