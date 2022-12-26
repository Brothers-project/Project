import Link from "next/link";
import React from "react";
import { FooterLinkTypes, FooterSocialLinkTypes } from "../../../../interfaces/footer/interfaces";
import ImageComponent from "../../../image/Image";
import { FooterLinksType, FooterSocialLinksType } from "../type";
import styles from './footerLinks.module.scss';

const FooterLinks: React.FC<FooterSocialLinkTypes> = (props) => {
    const { href, icon, className } = props;

    return (
        <Link href={href} className={className}>
                <ImageComponent
                    {...icon}
                    layout='fill'
                    objectFit='contain'
                    className={styles.icon}
                />
        </Link>
    )
}

const FooterSocialLinks: React.FC<FooterSocialLinksType> = (props) => {
    const { footerSocialLinks } = props;

    return (
        <ul className={styles.footerSocialLinks}>
            {footerSocialLinks.map((footerLink) =>
                <li key={footerLink.id}>
                    <FooterLinks {...footerLink} />
                </li>
            )}
        </ul>
    )
}

export default FooterSocialLinks;
