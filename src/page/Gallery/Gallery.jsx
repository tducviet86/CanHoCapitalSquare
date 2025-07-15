"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../assets/images/z6802729042179_929142c84952466d22d75ad18face200.jpg";
import image2 from "../../assets/images/z6802729042234_5c322430c01cf64481d643fa9d566191.jpg";
import image4 from "../../assets/images/z6802729042299_285ea804552a7e3b0e809f379077c5f2.jpg";
import image5 from "../../assets/images/z6802729079034_26818e5f45451ad47d3d6f4c23423709.jpg";
import image6 from "../../assets/images/z6802729079035_871f8075ea495cbd8e475224f834ea3f.jpg";
import image7 from "../../assets/images/z6802729079185_837bd07524ca4ad2f10926cca1b9627a.jpg";
import image8 from "../../assets/images/z6802729079186_0a0b2f32791559c50d0d970edbe5aecf.jpg";
export default function Gallery() {
  const [activeTab, setActiveTab] = useState("images");
  const [videoPlaying, setVideoPlaying] = useState(false);

  const images = [
    image1,
    image2,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  const youtubeId = "cytDlTrgkVY";
  const youtubeThumbnail = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
  const fallbackThumbnail = "/fallback-thumbnail.jpg";

  return (
    <div id="library-image" className="bg-white p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2B5192] tracking-wide">
            GALLERY
          </h1>

          {/* Navigation Tabs */}
          <div className="flex flex-col sm:flex-row border-b border-gray-200 w-full sm:w-auto">
            <button
              onClick={() => {
                setActiveTab("images");
                setVideoPlaying(false);
              }}
              className={`px-4 sm:px-6 py-2 text-base sm:text-xl border-b-2 transition ${
                activeTab === "images"
                  ? "text-[#2B5192] font-bold border-[#2B5192]"
                  : "text-[#2B5192] border-transparent hover:border-[#2B5192] hover:font-semibold"
              }`}
            >
              XEM HÌNH ẢNH DỰ ÁN
            </button>

            <button
              onClick={() => {
                setActiveTab("video");
                setVideoPlaying(false);
              }}
              className={`px-4 sm:px-6 py-2 text-base sm:text-xl border-b-2 transition ${
                activeTab === "video"
                  ? "text-[#2B5192] font-bold border-[#2B5192]"
                  : "text-[#2B5192] border-transparent hover:border-[#2B5192] hover:font-semibold"
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
              className="aspect-video md:aspect-auto md:h-[500px] rounded-lg"
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
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg aspect-video md:aspect-auto md:h-[500px] flex justify-center items-center">
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
                <div className="absolute inset-0  flex items-center justify-center group-hover:bg-opacity-50 transition">
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
