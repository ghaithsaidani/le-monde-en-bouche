import {useSwiper} from "swiper/react";
import {BiChevronLeft, BiChevronRight} from "react-icons/all.js";

export const SwiperNavButtons = () => {
    const swiper=useSwiper()
    return (
        <div className={"swiper-nav_btns"}>
            <button onClick={() => swiper.slidePrev()}><BiChevronLeft/></button>
            <button onClick={() => swiper.slideNext()}><BiChevronRight/></button>
        </div>
    )
}