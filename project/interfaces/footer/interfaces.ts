import { ImagePropsType } from "../image";

export interface FooterLinkTypes {
    id: number,
    href: string;
    title: string;
    className?: string;
    icon: ImagePropsType;
}

export interface FooterSocialLinkTypes {
    id: number,
    href: string;
    className?: string;
    icon: ImagePropsType;
}