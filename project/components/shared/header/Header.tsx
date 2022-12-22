
import React from 'react';
import Link from 'next/link';
import ActiveLink from '../activeLink/ActiveLink';
import { LinkTypes } from '../../../interfaces/header/interfaces';
import styles from './headerStyles.module.scss';


export interface HeaderPropsType {
    brand: string,
    links: LinkTypes[],
    className?: string,
}

const BsNavBrand = (props: { brand: string; }) => {
    const { brand } = props;

    return (
        <Link href="/">
            <a className="navbar-brand port-navbar-brand">{brand}</a>
        </Link>
    )
};

const BsNavLink = (props: LinkTypes) => {
    const {href, title, className = ''} = props;

    return (
        <ActiveLink activeClassName="active" href={href}>
            <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
        </ActiveLink>
    )
};

const Header: React.FC<HeaderPropsType> = ({ brand, links, className }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className={styles.wrapper}>
            <BsNavBrand brand={brand} />
            <ul className={styles.container}>
                {
                    links.map((link) =>
                        <li key={link.id}>
                            <BsNavLink {...link} />
                        </li>

                    )
                }
            </ul>
        </nav>
    );
}

export default Header;
