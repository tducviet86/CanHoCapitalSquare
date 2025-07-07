"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

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

export default function CapitalSquareCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      className="relative py-16 bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-6-bg.png')",
      }}
    >
      {/* Navigation buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 sm:left-10 top-1/2 z-10 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 sm:p-3 rounded-full transition"
      >
        <ChevronLeft fontSize="large" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 sm:right-10 top-1/2 z-10 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 sm:p-3 rounded-full transition"
      >
        <ChevronRight fontSize="large" />
      </button>

      {/* Carousel */}
      <div
        className="overflow-hidden w-full max-w-7xl mx-auto px-4 sm:px-6"
        ref={emblaRef}
      >
        <div className="flex gap-4 sm:gap-6">
          {slides.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 rounded-xl overflow-hidden group"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 md:h-72 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-sm sm:text-base font-medium text-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
