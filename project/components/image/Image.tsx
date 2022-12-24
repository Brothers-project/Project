import React from "react";
import cn from 'classnames';
import NextImage from "next/legacy/image";
import { ImageProps } from '../../interfaces/image';
import styles from './image.module.scss'


const ImageComponent: React.FC<ImageProps> = (props) => {
    const { className, imageClassName, objectFit, ...rest } = props;

    const wrapperClassNames = cn(styles.wrapper, className);

    const imageClassNames = cn(
        {
            [styles.fitContain]: objectFit === 'contain',
            [styles.fitCover]: objectFit === 'cover',
            [styles.fitFill]: objectFit === 'fill',
        },
        imageClassName
    )

    return (
        <div className={wrapperClassNames}>
            <NextImage
                layout="fill"
                sizes="(max-width: 1280px) 150vw, 100vw"
                className={imageClassNames}
                {...rest}
            />
        </div>
    )
}

export default ImageComponent;
