import React from "react";
import VideoCarousel from "../../component/videoCarousel/VideoCarousel";
import { videoCarouselData } from '../../../data/main/videoCarousel/videoCarousel'
import { showItems } from '../../../data/main/videoCarousel/videoCarousel'
import styles from './videoBanner.module.scss'

const VideoBanner = () => {

    return (
        <div className={styles.wrapper}>
            {/* <div style={{ background: '#00f', height: '400px' }}> */}
            <video
                // width={1200}
                height={400}
                autoPlay
                playsInline
                muted
                loop
            >
                <source src="./videoMain.mp4" type="video/mp4" />
                {/* <source
                    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv"
                    type="video/ogg"
                />
                <source
                    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm"
                    type="video/webm"
                /> */}
                Your browser doesn't support HTML5 video tag.
                {/* </div> */}
            </video>
            <div className={styles.videoCarouselContainer}>
                <VideoCarousel videoCarouselData={videoCarouselData} showItems={showItems} />
            </div>
        </div>
    )
}

export default VideoBanner;
