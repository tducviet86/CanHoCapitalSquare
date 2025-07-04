
"use client";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "01 DỰ ÁN DUY NHẤT SỞ HỮU 4 MẶT TIỀN",
    img: "https://capitalsquare.vn/images/section-6-slider-1.png",
  },
  {
    id: 2,
    title: "02 SIÊU DỰ ÁN QUY MÔ LỚN NHẤT TRUNG TÂM ĐÀ NẴNG",
    img: "https://capitalsquare.vn/images/section-6-slider-2.png",
  },
  {
    id: 3,
    title: "03 BIỂU TƯỢNG KIẾN TRÚC ĐỘC BẢN",
    img: "https://capitalsquare.vn/images/section-6-slider-3.png",
  },
  {
    id: 4,
    title: "04 BẢN HÒA CA ÁNH SÁNG ĐỘC ĐÁO",
    img: "https://capitalsquare.vn/images/section-6-slider-4.png",
  },
  {
    id: 5,
    title: "05 CÔNG VIÊN TRUNG TÂM ĐẲNG CẤP",
    img: "https://capitalsquare.vn/images/section-6-slider-1.png",
  },
  {
    id: 6,
    title: "06 KHU SHOPHOUSE SẦM UẤT",
    img: "https://capitalsquare.vn/images/section-6-slider-4.png",
  },
  {
    id: 7,
    title: "07 TIỆN ÍCH ALL-IN-ONE",
    img: "https://capitalsquare.vn/images/section-6-slider-2.png",
  },
  {
    id: 8,
    title: "08 THIẾT KẾ HÀI HÒA PHONG THỦY",
    img: "https://capitalsquare.vn/images/section-6-slider-3.png",
  },
];

export default function CapitalSquareSection() {
  return (
    <section
      id="highlights"
      className="relative py-16 px-4 bg-cover bg-center text-white min-h-screen flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-6-bg.png')",
      }}
    >
      <div className="container mx-auto">
        <div className="relative mt-90 mb-15">
          <div
            id="custom-prev"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 bg-black/30 backdrop-blur-md text-white p-2 rounded-xl cursor-pointer hover:bg-black/40 transition-all duration-300"
          >
            <ChevronLeft fontSize="medium" />
          </div>

          <div
            id="custom-next"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 bg-black/30 backdrop-blur-md text-white p-2 rounded-xl cursor-pointer hover:bg-black/40 transition-all duration-300"
          >
            <ChevronRight fontSize="medium" />
                  </div>
                  {/* //loi~ */}
          <div className="max-w-screen-xl mx-auto overflow-hidden px-4">
            <Swiper
              modules={[Navigation]}
              loop
              navigation={{
                prevEl: "#custom-prev",
                nextEl: "#custom-next",
              }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="!overflow-visible"
            >
              {slides.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="rounded-2xl group transition-all duration-500 relative cursor-pointer">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[320px] object-cover transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-1 w-[270px] p-3">
                      <p className="text-base font-semibold text-[#fff]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: "#custom-prev",
                nextEl: "#custom-next",
              }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              loop={true}
              className="px-4 md:px-0"
            >
              {slides.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="rounded-2xl  group transition-all duration-500  relative cursor-pointer ">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[320px] object-cover transition-transform duration-500 "
                    />
                    <div className="absolute bottom-0 left-1 w-[270px]  p-3">
                      <p className="text-base font-semibold text-[#fff]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
        </div>
      </div>
    </section>
  );
}
