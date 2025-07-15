"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/navigation";

import image1 from "../../assets/images/z6802729042179_929142c84952466d22d75ad18face200.jpg";
import image2 from "../../assets/images/z6802729042234_5c322430c01cf64481d643fa9d566191.jpg";
import image4 from "../../assets/images/z6802729042299_285ea804552a7e3b0e809f379077c5f2.jpg";
import image5 from "../../assets/images/z6802729079034_26818e5f45451ad47d3d6f4c23423709.jpg";
import image6 from "../../assets/images/z6802729079035_871f8075ea495cbd8e475224f834ea3f.jpg";
import image7 from "../../assets/images/z6802729079185_837bd07524ca4ad2f10926cca1b9627a.jpg";
import image8 from "../../assets/images/z6802729079186_0a0b2f32791559c50d0d970edbe5aecf.jpg";

const slides = [
  { id: 1, title: "01 DỰ ÁN DUY NHẤT SỞ HỮU 4 MẶT TIỀN", img: image1 },
  {
    id: 2,
    title: "02 SIÊU DỰ ÁN QUY MÔ LỚN NHẤT TRUNG TÂM ĐÀ NẴNG",
    img: image2,
  },
  { id: 3, title: "03 BIỂU TƯỢNG KIẾN TRÚC ĐỘC BẢN", img: image4 },
  { id: 4, title: "04 BẢN HÒA CA ÁNH SÁNG ĐỘC ĐÁO", img: image5 },
  { id: 5, title: "05 CÔNG VIÊN TRUNG TÂM ĐẲNG CẤP", img: image6 },
  { id: 6, title: "06 KHU SHOPHOUSE SẦM UẤT", img: image7 },
  { id: 7, title: "07 TIỆN ÍCH ALL-IN-ONE", img: image8 },
  { id: 8, title: "08 THIẾT KẾ HÀI HÒA PHONG THỦY", img: image8 },
];

export default function CapitalSquareCarousel() {
  return (
    <section id="highlights"
      className="relative py-16 bg-cover bg-center text-white overflow-hidden md"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-6-bg.png')",
      }}
    >
      {/* Navigation buttons */}
      <div className="absolute left-4 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 lg:top-[75%] lg:translate-y-0 z-10">
        <div className="swiper-button-prev !static  p-3 lg:p-4 rounded-full text-white">
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
        </div>
      </div>
      <div className="absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 lg:top-[75%] lg:translate-y-0 z-10">
        <div className="swiper-button-next !static  p-3 lg:p-4 rounded-full text-white">
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
        </div>
      </div>

      {/* Swiper Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:mt-100">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-xl overflow-hidden group transition-all duration-300 h-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full sm:h-64 md:h-72 object-cover rounded-xl transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 px-2 py-3 text-sm sm:text-base font-medium text-center">
                  {item.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
