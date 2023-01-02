import React from "react";
import cn from 'classnames';
import Link from "next/link";
import { DropdownTypes, NavLinkProps } from "../../type";
import styles from './dropdown.module.scss';

const NavLink = (props: NavLinkProps) => {
    const { id, href, title, className, isOverID } = props;

    const active = cn({
        [styles.active]: isOverID === id
    });

    return (
        <Link href={`#${href}`} className={className}>
            <span className={active}>{title}</span>
        </Link>
    )
}

const Dropdown: React.FC<DropdownTypes> = (props) => {
    const { linkToSection } = props;

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
        <ul className={styles.wrapper}>
            {
                linkToSection.map((link) => (
                    <li key={link.id}
                        className={styles.link}
                        onMouseOver={(e) => onLinkMouseOver(e, link.id)}
                        onMouseOut={onLinkMouseOut}
                    >
                        <NavLink isOverID={isOverID} {...link} />
                    </li>
                ))
            }
        </ul>
    )
}

export default Dropdown;
