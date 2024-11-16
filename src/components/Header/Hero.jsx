import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import slide1 from "../../assets/image/slide1.jpg";
import slide2 from "../../assets/image/slide2.jpg";
import slide3 from "../../assets/image/slide3.jpg";
import slide4 from "../../assets/image/slide4.png";
import { useEffect } from "react";
import Button from "../Button";

export default function Hero({ bgImg, setBgImg }) {
  const sliderImg = [slide1, slide2, slide3, slide4];
  const swiper = useSwiper();

  return (
    <>
      <section className="w-4/5 mx-auto">
        <div className="flex justify-between">
          <div>
            <h1>asdaf</h1>
            <p>adsf</p>
            <button>Booking -</button>
          </div>
          <div className="w-3/5 h-[500px]">
            <Swiper
              onSwiper={(Swiper) => console.log(Swiper)}
              onSlideChange={(e) => console.log("slide change", e)}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper h-full"
            >
              {sliderImg?.map((item, i) => (
                <SwiperSlide>
                  {({ isActive }) => {
                    // isActive && setBgImg([item, i]);

                    return (
                      <div className="h-full">
                        <img className="h-full rounded-2xl" src={item} alt="" />
                      </div>
                    );
                  }}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
