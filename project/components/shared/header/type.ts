import { LinkDropdownTypes, LinkTypes } from '../../../interfaces/header/interfaces';
import { ImagePropsType } from '../../../interfaces/image';


export interface HeaderPropsType {
    logoImage: ImagePropsType,
    links: LinkTypes[],
    className?: string,
}

export interface ImageNavBrandProps {
    logoImage: ImagePropsType;
    className?: string;
}

export interface NavLinkProps extends LinkTypes {
    isOverID: number;
}

export interface DropdownTypes {
    linkToSection: LinkDropdownTypes[];
}
