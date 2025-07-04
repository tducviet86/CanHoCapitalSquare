"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("images");
  const [videoPlaying, setVideoPlaying] = useState(false);

  const images = [
    "https://capitalsquare.vn/images/section-4-slider-1.png",
    "https://capitalsquare.vn/images/section-4-slider-1.png",
    "https://capitalsquare.vn/images/section-4-slider-1.png",
    "https://capitalsquare.vn/images/section-4-slider-1.png",
  ];

  const youtubeId = "cytDlTrgkVY";
  const youtubeThumbnail = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
  const fallbackThumbnail = "/fallback-thumbnail.jpg"; // thêm ảnh tĩnh dự phòng vào public nếu muốn

  return (
    <div id="library-image" className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-[#2B5192] tracking-wide">
            GALLERY
          </h1>

          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => {
                setActiveTab("images");
                setVideoPlaying(false);
              }}
              className={`px-6 py-3 text-xl  border-b-2 ${
                activeTab === "images"
                  ? "text-[#2B5192] font-bold border-[#2B5192]"
                  : "text-[#2B5192] border-transparent hover:border-[#2B5192] hover:font-bold"
              }`}
            >
              XEM HÌNH ẢNH DỰ ÁN
            </button>

            <button
              onClick={() => {
                setActiveTab("video");
                setVideoPlaying(false);
              }}
              className={`ml-6 px-6 py-3 text-xl  border-b-2 ${
                activeTab === "video"
                  ? "text-[#2B5192] font-bold border-[#2B5192]"
                  : "text-[#2B5192] border-transparent hover:border-[#2B5192] hover:font-bold"
              }`}
            >
              XEM VIDEO DỰ ÁN
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        {activeTab === "images" && (
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
              className="h-[500px]"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Video Preview */}
        {activeTab === "video" && (
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg h-[500px] flex justify-center items-center">
            {videoPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setVideoPlaying(true)}
              >
                <img
                  src={youtubeThumbnail}
                  alt="Video Preview"
                  onError={(e) => {
                    e.currentTarget.src = fallbackThumbnail;
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="42" cy="42" r="42" fill="rgba(0,0,0,0.6)" />
                    <polygon fill="white" points="33,26 60,42 33,58" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
