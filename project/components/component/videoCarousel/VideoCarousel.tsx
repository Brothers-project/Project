import React from "react";
import { VideoCarouselPropsType } from "./type";
import cn from 'classnames';
import { imageChevron } from '../../../data/header/image';
import VideoCarouselScroll from "./videoCarouselScroll/videoCarouselScroll";
import styles from './videoCarousel.module.scss'
import ImageComponent from "../../image/Image";

const ButtonLeftScroll = () => {
    return (
        <div className={styles.buttonLeftScrollWrapper}>
            <ImageComponent
                {...imageChevron}
                layout='fill'
                objectFit='contain'
                className={styles.buttonLeftScrollChevron}
            />
        </div>

    )
}

const ButtonRightScroll = () => {
    return (
        <div className={styles.buttonRightScrollWrapper}>
            <ImageComponent
                {...imageChevron}
                layout='fill'
                objectFit='contain'
                className={styles.buttonRightScrollChevron}
            />
        </div>

    )
}

const VideoCarousel: React.FC<VideoCarouselPropsType> = (props) => {
    const { videoCarouselData, showItems, className } = props;
    const [scroll, setScroll] = React.useState(0);
    const [index, setIndex] = React.useState(showItems)
    const [scrollItems, setScrollItems] = React.useState(0)

    
    const onRightScroll = () => {
        const leftItems = videoCarouselData.length - index;
        if (leftItems > showItems) {
            setIndex(() => index + showItems)
            setScrollItems(showItems)
            return
        } else if (!leftItems) {
            setScrollItems(0)
            return
        } 
        console.log('leftItems', leftItems)
        setScrollItems(leftItems)
        setIndex(() => index + leftItems)
    }
 
    const onLeftScroll = () => {
        const rightItems = index - showItems;
        if (rightItems > showItems) {
            setIndex(() => index - showItems)
            setScrollItems(-showItems)
            return
        } else if (!rightItems) {
            setScrollItems(0)
            return
        } 

        setScrollItems(-rightItems)
        setIndex(() => index - rightItems)    
    }

    React.useEffect(() => {
        setScroll(scroll + (-(101.5/showItems) * scrollItems))
    }, [index])

    const isVisibleLeftChevron = index - showItems;
    const isVisibleRightChevron = index !== videoCarouselData.length;
    return (
        <div className={styles.videoCarouselWrapper}>
            <button type='button' className={cn(styles.buttonLeftScroll, isVisibleLeftChevron ? styles.visible : styles.invisible)} onClick={onLeftScroll}>
                <ButtonLeftScroll />
            </button>
            <div className={styles.videoCarouselScroll}>
                <VideoCarouselScroll videoCarouselData={videoCarouselData} videoCarouselScrollTransfer={`${scroll}%`} />
            </div>
            <button type='button' className={cn(styles.buttonRightScroll, isVisibleRightChevron ? styles.visible : styles.invisible)} onClick={onRightScroll}>
                <ButtonRightScroll />
            </button>
        </div>
    )
}

export default VideoCarousel;
