import { ImageProps as NextImagePropsType } from "next/legacy/image";

export interface ImagePropsType extends NextImagePropsType {
    src: any;
    alt: string;
    width?: number;
    height?: number;
    placeholder?: 'blur' | 'empty';
    className?: string;
    imageClassName?: string;
    objectFit?: 'contain' | 'cover' | 'fill';
}
