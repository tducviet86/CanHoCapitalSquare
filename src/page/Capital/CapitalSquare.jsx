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
      className="relative px-4 py-16 bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-6-bg.png')",
      }}
    >
      {/* Custom navigation buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-20 top-2/3 z-10 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-13 top-2/3 z-10 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* Carousel wrapper */}
      <div
        className="overflow-hidden w-full max-w-screen-xl mt-100 mb-5 ml-15 px-4 "
        ref={emblaRef}
      >
        <div className="flex gap-6">
          {slides.map((item) => (
           <div
           key={item.id}
           className="relative flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 max-w-full rounded-xl overflow-hidden group"
         >
           <img
             src={item.img}
             alt={item.title}
             className="w-full h-full object-cover rounded-[15px]  "
           />
           <div className="absolute bottom-10 left-0 right-0 p-4 ">
             <p className="text-white font-semibold ">
               {item.title}
             </p>
           </div>
         </div>
          ))}
        </div>
      </div>
    </section>
  );
}
