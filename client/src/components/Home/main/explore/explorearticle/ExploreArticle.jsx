import {CountryChip} from "./countrychip/CountryChip.jsx";
import {
    Egypt,
    India,
    Italy,
    Japan, Mexico,
    Morocco,
    Spain,
    Syria,
    Tunisia,
    Turkey, Usa, WorldMapDesktop, WorldMapPhone
} from "../../../../../assets/images/index.js";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {A11y, Navigation, Pagination} from "swiper";
import {SwiperNavButtons} from "./countrychip/swipernavbuttons/SwiperNavButtons.jsx";
import {useMediaQuery, useTheme} from "@mui/material";

export const ExploreArticle = () => {
    const countries = [
        {
            src: Tunisia,
            text: 'Tunisie'
        },
        {
            src: Italy,
            text: 'Italie'
        },
        {
            src: Syria,
            text: 'Syrie'
        },
        {
            src: Japan,
            text: 'Japan'
        },
        {
            src: Morocco,
            text: 'Maroc'
        },
        {
            src: Turkey,
            text: 'Turquie'
        },
        {
            src: India,
            text: 'Inde'
        },
        {
            src: Spain,
            text: 'Espagne'
        },
        {
            src: Egypt,
            text: 'Egypte'
        },
        {
            src: Mexico,
            text: 'Mexique'
        },
        {
            src: Usa,
            text: 'Usa'
        }
    ]

    const theme=useTheme()
    const smallMediaQuery=useMediaQuery(theme.breakpoints.up("sm"))
    return (
        <article>
            <Swiper
                slidesPerView={smallMediaQuery ? 10 : 2}
                centeredSlides={false}
                spaceBetween={5}
                grabCursor={true}
                modules={[Pagination,A11y]}
                className="mySwiper"
            >
                {countries.map(country => (
                    <SwiperSlide key={country.text}>
                        <CountryChip {...country} />
                    </SwiperSlide>
                ))}
                <SwiperNavButtons/>
            </Swiper>

            <img src={smallMediaQuery? WorldMapDesktop : WorldMapPhone} alt={"world map"} className={"world-map"}/>

        </article>
    )
}