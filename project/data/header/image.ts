import logo from '../../public/images/header/kevo.svg';
import chevronBlack from '../../public/images/header/chevron-black.svg';
import chevronBlue from '../../public/images/header/chevron-blue.svg';
import { ImageProps } from '../../interfaces/image';

export const imageLogo: ImageProps = {
    src: logo,
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
