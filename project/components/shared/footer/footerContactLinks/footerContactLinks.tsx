import Link from "next/link";
import React from "react";
import { FooterLinkTypes } from "../../../../interfaces/footer/interfaces";
import ImageComponent from "../../../image/Image";
import { FooterLinksType } from "../type";
import styles from './footerLinks.module.scss';

const FooterLinks: React.FC<FooterLinkTypes> = (props) => {
    const { href, icon, title, className } = props;

    return (
        <Link href={href} className={className}>
            <div className={styles.contactLinkWrapper}>
                <ImageComponent
                    {...icon}
                    layout='fill'
                    objectFit='contain'
                    className={styles.icon}
                />
                <span>{title}</span>
            </div>
        </Link>
    )
}

const FooterContactLinks: React.FC<FooterLinksType> = (props) => {
    const { footerLinks } = props;

    return (
        <ul className={styles.footerContactLinkWrapper}>
            {footerLinks.map((footerLink) =>
                <li key={footerLink.id}>
                    <FooterLinks {...footerLink} />
                </li>
            )}
        </ul>
    )
}

export default FooterContactLinks;