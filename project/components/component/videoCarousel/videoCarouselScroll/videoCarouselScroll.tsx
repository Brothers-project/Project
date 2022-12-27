import React from "react";
import { VideoCarouselType } from "../../../../interfaces/main/videoCarousel";
import cn from 'classnames';
import ImageComponent from "../../../image/Image";
import { VideoCarouselScrollPropsType } from "../type";
import styles from './videoCarouselScroll.module.scss';

export const VideoCarouselData: React.FC<VideoCarouselType> = (props) => {
    const { id, image, title, className = '' } = props;
    return (
        <div className={styles.videoCarouselItem}>
            <ImageComponent
                {...image}
                layout='fill'
                objectFit='contain'
                className={styles.image}
            />
            <span className={styles.videoCarouselItemText}>{title}</span>

        </div>
    )
}

const VideoCarouselScroll: React.FC<VideoCarouselScrollPropsType> = (props) => {
    const { videoCarouselData, videoCarouselScrollTransfer, className } = props;


    return (
        <>
            <ul className={cn(styles.videoCarouselItemWrapper)} style={{  transform: `translate(${videoCarouselScrollTransfer})` }}>
                {
                    videoCarouselData.map(el => (
                        <li key={el.id} className={styles.videoCarouselItemContainer}>
                            <VideoCarouselData {...el} />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default VideoCarouselScroll;
