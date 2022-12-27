import { FooterLinkTypes, FooterSocialLinkTypes } from "../../../interfaces/footer/interfaces";
import { LinkTypes } from "../../../interfaces/header/interfaces";
import { ImagePropsType } from "../../../interfaces/image";

export interface FooterPropsType {
    logoImage: ImagePropsType,
    links: LinkTypes[],
    className?: string,
}

export interface ImageNavBrandProps {
    logoImage: ImagePropsType;
    className?: string;
}

export interface FooterLinksType {
    footerLinks: FooterLinkTypes[];
}

export interface FooterSocialLinksType {
    footerSocialLinks: FooterSocialLinkTypes[];
}
