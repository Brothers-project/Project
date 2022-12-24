import { ImageProps } from "../image";

export interface FooterLinkTypes {
    id: number,
    href: string;
    title: string;
    className?: string;
    icon: ImageProps;
}

export interface FooterSocialLinkTypes {
    id: number,
    href: string;
    className?: string;
    icon: ImageProps;
}