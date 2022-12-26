import { FooterLinkTypes, FooterSocialLinkTypes } from "../../../interfaces/footer/interfaces";
import { LinkTypes } from "../../../interfaces/header/interfaces";
import { ImageProps } from "../../../interfaces/image";

export interface FooterPropsType {
    logoImage: ImageProps,
    links: LinkTypes[],
    className?: string,
}

export interface ImageNavBrandProps {
    logoImage: ImageProps;
    className?: string;
}

export interface FooterLinksType {
    footerLinks: FooterLinkTypes[];
}

export interface FooterSocialLinksType {
    footerSocialLinks: FooterSocialLinkTypes[];
}
