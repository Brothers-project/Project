import { ImageProps as NextImageProps } from "next/legacy/image";

export interface ImageProps extends NextImageProps {
    src: any;
    alt: string;
    width?: number;
    height?: number;
    placeholder?: 'blur' | 'empty';
    className?: string;
    imageClassName?: string;
    objectFit?: 'contain' | 'cover' | 'fill';
}
