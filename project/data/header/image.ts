import logoBlack from '../../public/images/header/kevo_black.svg';
import logoWhite from '../../public/images/header/kevo_white.svg';
import chevronBlack from '../../public/images/header/chevron-black.svg';
import chevronBlue from '../../public/images/header/chevron-blue.svg';
import phone from '../../public/images/footer/PH.svg';
import facebook from '../../public/images/footer/FACE.svg';
import { ImagePropsType } from '../../interfaces/image';

export const imageLogoBlack: ImagePropsType = {
    src: logoBlack,
    alt: "Picture of logo",
}

export const imageLogoWhite: ImagePropsType = {
    src: logoWhite,
    alt: "Picture of logo",
}

export const imageChevron: ImagePropsType = {
    src: chevronBlack,
    alt: "Picture of Chevron",
}

export const imageChevronActive: ImagePropsType = {
    src: chevronBlue,
    alt: "Picture of Chevron",
}

export const imagePhone: ImagePropsType = {
    src: phone,
    alt: "icon of Phone",
}

export const imageFacebook: ImagePropsType = {
    src: facebook,
    alt: "icon of Facebook",
}
