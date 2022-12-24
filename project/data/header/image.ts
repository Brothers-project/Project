import logoBlack from '../../public/images/header/kevo_black.svg';
import logoWhite from '../../public/images/header/kevo_white.svg';
import chevronBlack from '../../public/images/header/chevron-black.svg';
import chevronBlue from '../../public/images/header/chevron-blue.svg';
import phone from '../../public/images/footer/PH.svg';
import facebook from '../../public/images/footer/FACE.svg';
import { ImageProps } from '../../interfaces/image';

export const imageLogoBlack: ImageProps = {
    src: logoBlack,
    alt: "Picture of logo",
}

export const imageLogoWhite: ImageProps = {
    src: logoWhite,
    alt: "Picture of logo",
}

export const imageChevron: ImageProps = {
    src: chevronBlack,
    alt: "Picture of Chevron",
}

export const imageChevronActive: ImageProps = {
    src: chevronBlue,
    alt: "Picture of Chevron",
}

export const imagePhone: ImageProps = {
    src: phone,
    alt: "icon of Phone",
}

export const imageFacebook: ImageProps = {
    src: facebook,
    alt: "icon of Facebook",
}
