import React from "react";
import Link from "next/link";
import { LinkTypes } from "../../../../interfaces/header/interfaces";
import { DropdownTypes } from "../type";
import styles from './dropdown.module.scss';

const NavLink = (props: LinkTypes) => {
    const { href, title, className } = props;

    return (
        <Link href={`#${href}`} className={className}>
            <span>{title}</span>
        </Link>
    )
}

const Dropdown: React.FC<DropdownTypes> = (props) => {
const { linkToSection } = props;

    return (
        <ul className={styles.wrapper}>
            {
                linkToSection.map((link) => (
                <li key={link.id} className={styles.link}>
                     <NavLink {...link} />
                </li>
                ))
            }
        </ul>
    )
}

export default Dropdown;
