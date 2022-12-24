import React from "react";
import cn from 'classnames';
import Link from 'next/link';
import { footerLinks, footerSocialLinks } from '../../../data/footer/link'
import ImageComponent from '../../image/Image';
import {
    FooterPropsType, ImageNavBrandProps,
} from './type';
import styles from './footer.module.scss';
import { LinkTypes } from "../../../interfaces/header/interfaces";
import FooterContactLinks from "./footerContactLinks/footerContactLinks";
import FooterSocialLinks from "./footerContactLinks/footerSocialLinks";

const ImageNavBrand = (props: ImageNavBrandProps) => {
    const { logoImage } = props;

    return (
        <Link href="/">
            <ImageComponent
                {...logoImage}
                layout='fill'
                objectFit='contain'
                className={styles.logo}
            />
        </Link>
    )
};

const NavLink = (props: LinkTypes) => {
    const { href, title } = props;

    return (
        <div>
            {
                <Link href={href}>
                    <span className={styles.linkTitle}>{title}</span>
                </Link>
            }
        </div>
    )
};


const Footer: React.FC<FooterPropsType> = ({ logoImage, links, className }) => {

    return (
        <div className={cn(styles.wrapper, className)}>
            <ImageNavBrand logoImage={logoImage} />
            <ul className={styles.containerLinks}>
                {
                    links.map((link) =>
                        <li
                            key={link.id}
                            className={styles.link}
                        >
                            <NavLink {...link} />
                        </li>
                    )
                }
            </ul>
            <div className={styles.contacts}>
                <FooterContactLinks footerLinks={footerLinks} />
                <FooterSocialLinks footerSocialLinks={footerSocialLinks} />
            </div>
        </div>
    )
}

export default Footer;
