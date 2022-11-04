import Image from "next/image";
import HTML from "../public/html.png"
import CSS from "../public/css.png"
import JS from "../public/jscript.png"
import BS from "../public/bootstrap.png"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={HTML}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="object-fill w-full h-25 lg:h-96 md:h-70 sm:h-25"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={CSS}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="object-fill w-full h-25 lg:h-96 md:h-70 sm:h-25"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={JS}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="object-fill w-full h-25 lg:h-96 md:h-70 sm:h-25"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BS}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="object-fill w-full h-25 lg:h-96 md:h-70 sm:h-25"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}