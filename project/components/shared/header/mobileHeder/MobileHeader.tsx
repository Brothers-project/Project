
import React from 'react';
import ReactDom from 'react-dom';
import cn from 'classnames';
import Link from 'next/link';
import ActiveLink from '../../activeLink/ActiveLink';
import {
    imageChevronActive,
    imageChevronMobile,
    imageHamburgMenuBlack,
    imageCloseMobileWhite,
    imageLogoBlack,
    imageLogoWhite
} from '../../../../data/header/image';
import { linkToSection } from '../../../../data/header/link';
import ImageComponent from '../../../image/Image';
import {
    HeaderPropsType,
    ImageNavBrandProps,
    NavLinkProps
} from '../type';
import styles from './mobileHeader.module.scss';
import Background from '../../../component/background/Background';
import Dropdown from './dropdown/Dropdown';

const ImageNavBrand = (props: ImageNavBrandProps) => {
    const { logoImage } = props;

    return (
        <div className={styles.logoWrapper}>
            <Link href="/">
                <ImageComponent
                    {...logoImage}
                    layout='fill'
                    objectFit='contain'
                    className={styles.wrapperBrandImageComponent}
                />
            </Link>
        </div>
    )
};

const NavLinkCollapse = (props: NavLinkProps) => {
    const { isOverID, title, href, id } = props;
    const showDropdownMenu = isOverID === id;
    const imageChevronShow = showDropdownMenu ? imageChevronActive : imageChevronMobile

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

const MobileHeader: React.FC<HeaderPropsType> = ({ links, className }) => {
    const [isOverID, setIsOverID] = React.useState(99999);
    const [mounted, setMounted] = React.useState(false);

    const onLinkMouseOver = (e: React.MouseEvent<HTMLLIElement>, id: number) => {
        e.preventDefault();
        setIsOverID(id)
    }

    const onLinkMouseOut = (e: React.MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        setIsOverID(99999)
    }

    React.useEffect(() => {
        setMounted(false);
    }, [])

    const onCloseMenu = () => {
        setMounted(false);
    }

    const onOpenMenu = () => {
        setMounted(true);
    }

    const modal = mounted
        ? ReactDom.createPortal(
            <Background background={'black'} className={styles.mobileHeaderBackground}>
                <nav className={cn(styles.wrapper, className)}>
                    <div className={styles.LogoAndCloseWrapper}>
                        <ImageNavBrand logoImage={imageLogoWhite} />
                        <button
                            type='button'
                            className={styles.closeButton}
                            onClick={onCloseMenu}
                        >
                            <ImageComponent {...imageCloseMobileWhite}
                                layout='fill'
                                objectFit='contain'
                                className={styles.wrapperCloseImageMobile}
                            />
                        </button>
                    </div>
                    <ul className={styles.containerLinks} id="mobile">
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
            </Background>,
            document.body
        )
        :
        <div className={cn(styles.LogoAndCloseWrapper, className)}>
            <ImageNavBrand logoImage={imageLogoBlack} />
            <button
                type='button'
                className={styles.closeButton}
                onClick={onOpenMenu}
            >
                <ImageComponent {...imageHamburgMenuBlack}
                    layout='fill'
                    objectFit='contain'
                    className={styles.wrapperCloseImageMobile}
                />
            </button>
        </div>;

    return (
        <>
            {modal}
        </>
    )
}

export default MobileHeader;
