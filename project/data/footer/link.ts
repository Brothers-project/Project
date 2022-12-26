import { FooterLinkTypes, FooterSocialLinkTypes } from '../../interfaces/footer/interfaces';
import { imageEmail, imageFacebook, imageInst, imageInstagram, imagePhone, imageTwitter } from './image';

export const footerLinks: FooterLinkTypes[] = [
    {
        id: 1,
        href: "mailto:hege@example.com",
        title: "hege@example.com",
        className: "",
        icon: imageEmail,
    },
    {
        id: 2,
        href: "tel:123-456-7890",
        title: "123-456-7890",
        className: "",
        icon: imagePhone,
    },
];

export const footerSocialLinks: FooterSocialLinkTypes[] = [
    {
        id: 1,
        href: "https://www.youtube.com/c/jamesqquick",
        className: "",
        icon: imageInstagram,
    },
    {
        id: 2,
        href: "www.facebook.com/learnbuildteach/",
        className: "",
        icon: imageFacebook,
    },
    {
        id: 3,
        href: "https://www.twitter.com/jamesqquick",
        className: "",
        icon: imageTwitter,
    },
    {
        id: 4,
        href: "https://www.instagram.com/learnbuildteach",
        className: "",
        icon: imageInst,
    },
];
