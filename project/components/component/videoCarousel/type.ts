import { VideoCarouselType } from "../../../interfaces/main/videoCarousel";

export interface VideoCarouselPropsType {
  videoCarouselData: VideoCarouselType[];
  showItems: number;
  className?: string;
}

export interface VideoCarouselScrollPropsType {
  videoCarouselData: VideoCarouselType[];
  videoCarouselScrollTransfer: string;
  className?: string;
}
