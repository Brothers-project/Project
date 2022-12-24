import { LinkDropdownTypes, LinkTypes } from '../../../interfaces/header/interfaces';
import { ImageProps } from '../../../interfaces/image';


export interface HeaderPropsType {
    logoImage: ImageProps,
    links: LinkTypes[],
    className?: string,
}

export interface ImageNavBrandProps {
    logoImage: ImageProps;
    className?: string;
}

export interface NavLinkProps extends LinkTypes {
    isOverID: number;
}

export interface DropdownTypes {
    linkToSection: LinkDropdownTypes[];
}
