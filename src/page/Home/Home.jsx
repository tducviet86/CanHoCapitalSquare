import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useState, useEffect } from "react";
import Gallery from "../Gallery/Gallery";
import CapitalSquareCarousel from "../Capital/CapitalSquare";
import RegisterForm from "../Register/RegisterForm";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CloseIcon from "@mui/icons-material/Close";
import { SiTiktok } from "react-icons/si";
import image4 from "../../assets/images/z6802729042235_f1be76cded97e3c952c57944c3a8118b.jpg";

import image5 from "../../assets/images/z6802729079034_26818e5f45451ad47d3d6f4c23423709.jpg";
import image6 from "../../assets/images/z6802729079035_871f8075ea495cbd8e475224f834ea3f.jpg";
import image7 from "../../assets/images/z6802729079185_837bd07524ca4ad2f10926cca1b9627a.jpg";
import image8 from "../../assets/images/z6802729079186_0a0b2f32791559c50d0d970edbe5aecf.jpg";
import image9 from "../../assets/images/z6802729079189_9e27448f1f8237b3b8383acf6a0581e2.jpg";
import image10 from "../../assets/images/z6802729079190_924670671425c5ab1700c1e6b9659578.jpg";
import imageC4 from "../../assets/images/c4.png";
import imageC6 from "../../assets/images/c6.png";
import backgroundFull from "../../assets/images/background-section-1.png";
import section1 from "../../assets/images/section-1-1.png";
import section2 from "../../assets/images/section-2-2.png";
import section3 from "../../assets/images/section-2-3.png";
import section4 from "../../assets/images/section-3-1.png";

export default function CapitalSquarePage() {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://chat.taggoai.com/v2.js";
    script.async = true;
    script.setAttribute("data-taggo-botid", "686dc4ae5ac0038427e24d49");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[600px] md:h-screen">
        <div className="absolute inset-0">
          <img
            src={backgroundFull}
            alt="Capital Square Building"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-[5%] left-[5%] md:left-[10%] lg:left-[20%] z-10 text-white px-4 md:px-0">
          <div>
            <h1 className="text-[36px] md:text-[40px] lg:text-[64px] font-extrabold ml-0 md:ml-[-2%] lg:ml-[-3%] text-[#F47920] font-['Roboto-SemiBold'] leading-tight">
              CAPITAL SQUARE
            </h1>
            <p className="text-[36px] md:text-[40px] lg:text-[64px] mt-[10px] leading-[1.1] ml-0 md:ml-[100px] lg:ml-[220px] font-['Roboto-SemiBold']">
              VỊ THẾ PHỒN VINH
            </p>
          </div>
        </div>
      </section>

      <section className="bottom-30 sm:bottom-10 md:bottom-35 relative overflow-hidden pt-8 pb-2">
        <div className="w-[95%] md:w-[85%] lg:w-[77%] mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[300px] overflow-hidden shadow-lg"
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              className="text-white relative flex flex-col justify-center px-4 md:px-8 py-8 md:py-0 rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none rounded-bl-xl md:rounded-bl-xl min-h-[250px] md:min-h-0"
              style={{
                backgroundImage: `url(${section1})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute top-4 md:top-6 right-4 md:right-6">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <img
                    src="https://capitalsquare.vn/images/section-1-logo.png"
                    alt="logo"
                  />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xs md:text-sm uppercase font-medium text-white tracking-wider mb-2">
                  VỊ TRÍ "KIM CƯƠNG"
                </h3>
                <h2 className="text-xl md:text-2xl font-bold text-orange-500 mb-4 leading-tight">
                  TÂM MẠCH
                  <br />
                  CỦA ĐÀ NẴNG
                </h2>
                <p className="text-white text-xs md:text-sm leading-relaxed text-left md:text-right">
                  VƯƠN MÌNH KHẲNG ĐỊNH VỊ THẾ GIỮA TRUNG TÂM THÀNH PHỐ
                  <br />
                  ĐÁNG SỐNG ĐÀ NẴNG
                  <br />
                  HIỆN DIỆN NHƯ MỘT MỐC SON MỚI TRONG HÀNH TRÌNH PHÁT
                  <br />
                  TRIỂN CỦA THÀNH PHỐ
                </p>
              </div>
            </div>

            <div className="relative rounded-bl-2xl md:rounded-bl-none rounded-br-2xl md:rounded-tr-[80px] overflow-hidden h-[250px] md:h-[300px]">
              <img
                src="https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-1-2.png"
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover z-0 rounded-bl-2xl md:rounded-bl-none rounded-br-2xl md:rounded-tr-[80px]"
              />

              <div className="absolute inset-0  rounded-bl-2xl md:rounded-bl-none rounded-br-2xl md:rounded-tr-[80px]" />

              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button
                  onClick={() => setShowModal(true)}
                  className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-gray-800 hover:scale-105 transition-transform duration-200 shadow-lg bg-white rounded-full"
                >
                  <div className="w-0 h-0 border-l-[12px] md:border-l-[16px] border-l-gray-800 border-t-[8px] md:border-t-[10px] border-t-transparent border-b-[8px] md:border-b-[10px] border-b-transparent ml-1"></div>
                </button>
              </div>

              <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 z-10">
                <span
                  onClick={() => setShowModal(true)}
                  className="text-white text-xs md:text-sm font-medium underline cursor-pointer hover:text-orange-300 transition-colors"
                >
                  XEM VIDEO DỰ ÁN
                </span>
              </div>

              {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                  <div
                    className="absolute inset-0 backdrop-blur-none"
                    onClick={() => setShowModal(false)}
                  />

                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full aspect-video z-50">
                    <iframe
                      src="https://www.youtube.com/embed/cytDlTrgkVY?autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>

                    <button
                      onClick={() => setShowModal(false)}
                      className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-3xl shadow-md hover:bg-red-600 transition"
                    >
                      <span className="text-3xl"> &times;</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div id="introduce" className="mb-20 sm:mb-10 ">
        <section className="pb-20 sm:pb-10 md:pb-10  bg-white relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-[#F47920] text-4xl pl-[10%] uppercase leading-[1.5] font-light">
                  Vị thế
                  <br />
                  Phồn vinh
                </h4>
                <h2 className="text-[3rem] w-[60%] pl-[10%] uppercase font-bold text-[#2B5192] leading-snug">
                  Nơi trái tim
                  <br />
                  Đà Nẵng
                </h2>
                <p className="text-[#2B5192] text-base w-[95%] px-[10%] mt-[35px] leading-[1.5] text-justify">
                  CAPITAL SQUARE là mạch nối giữa quá khứ - hiện tại và tương
                  lai, giữa thiên nhiên, con người và công nghệ, Capital Square
                  không chỉ kiến tạo không gian sống – mà đang định hình lại
                  trung tâm, kiến thiết một biểu tượng đô thị mới cho một thành
                  phố khát vọng vươn mình ra toàn cầu..
                </p>
              </div>

              <div>
                <h3 className="text-[#2B5192] text-4xl mb-2">Giới thiệu</h3>
                <p className="text-base w-full leading-[1.5] pr-[4%] text-justify font-medium">
                  Capital Square được tạo nên từ những mỹ cảm sâu sắc nhất về
                  một cuộc sống thượng lưu đích thực, để trở thành một công
                  trình tuyệt mỹ, kiêu hãnh vươn mình, chạm khắc nên một biểu
                  tượng đẹp nơi trung tâm thành phố Đà Nẵng.
                </p>

                <div className="space-y-3 mt-10">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-[24%] text-orange-500 font-bold">
                      Vị trí
                    </div>
                    <div className="w-[76%] text-[16px] text-[#212529] font-medium">
                      Đường Trần Hưng Đạo & Ngô Quyền, Phường An Hải Bắc, Quận
                      Sơn Trà, TP Đà Nẵng
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-[24%] text-orange-500 font-bold">
                      Diện tích khu đất
                    </div>
                    <div className="w-[76%] text-[16px] text-[#212529] font-medium">
                      6,14ha
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-[24%] text-orange-500 font-bold">
                      Quy mô
                    </div>
                    <div className="w-[76%] text-[16px] text-[#212529] font-medium">
                      14 tòa Căn hộ cao cấp và 1 tòa Thương mại dịch vụ
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-[24%] text-orange-500 font-bold">
                      Loại hình căn hộ
                    </div>
                    <div className="w-[76%] text-[16px] text-[#212529] font-medium">
                      1PN - 2PN - 3PN - Dual Key
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-[24%] text-orange-500 font-bold">
                      Hình thức sở hữu
                    </div>
                    <div className="w-[76%] text-[16px] text-[#212529] font-medium">
                      Sổ đỏ sở hữu lâu dài
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-[24%] text-orange-500 font-bold">
                      Tầng cao
                    </div>
                    <div className="w-[76%] text-[16px] text-[#212529] font-medium">
                      24-28 tầng
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-[24%] text-orange-500 font-bold">
                      Chiều cao căn hộ
                    </div>
                    <div className="w-[76%] text-[16px] text-[#212529] font-medium">
                      3,5m
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative w-full h-[650px] lg:h-[850px]  md:-mb-135 -mb-[135px] z-20">
          {/* Ảnh nền */}
          <div
            className="absolute inset-0 bg-no-repeat bg-center  transition-all duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${image9})`,
              backgroundSize: "cover",
              clipPath: "inset(0 25% 0 0)",
            }}
          />

          {/* Xóa clip-path trên mobile & tablet */}
          <style>{`
    @media (max-width: 1023px) {
      div[style*="clip-path"] {
        clip-path: none !important;
      }
    }
  `}</style>

          {/* Nội dung chính */}
          <div className="relative h-full flex flex-col items-center justify-center px-4 py-8 sm:py-12 z-30">
            <div className="container mx-auto w-full">
              <div className="flex justify-center lg:justify-start">
                <div className="bg-[#F47920] text-white lg:ml-60 lg:mb-10 p-6 sm:p-10 rounded-[40px] lg:rounded-tr-[20%] shadow-2xl w-full sm:w-[80%] md:w-[70%] lg:max-w-[450px]">
                  <h2 className="text-[#2B5192] text-4xl sm:text-5xl font-bold mb-6 uppercase leading-tight tracking-wide font-['Roboto-SemiBold']">
                    VỊ THẾ
                    <br />
                    PHỒN VINH
                  </h2>
                  <p className="text-white leading-relaxed text-base sm:text-lg lg:text-xl font-light font-['Roboto-SemiBold']">
                    Dòng sông Hàn từ lâu đã là nơi không chỉ neo thuyền mà còn
                    neo gửi ký ức của cả một thành phố. Dòng sông ấy nay tiếp
                    tục là mạch nối giữa truyền thống và hiện đại, giữa cộng
                    đồng địa phương và giới tinh hoa toàn cầu, giữa thiên nhiên
                    và đời sống đô thị. Capital Square chính là điểm giao thoa
                    ấy, nơi những tòa tháp vươn cao, tiện nghi hành trình.
                  </p>
                </div>
              </div>
            </div>

            {/* Chữ phụ - luôn hiển thị, style khác nhau theo breakpoint */}
            {/* <div className=" mt-8 px-4 w-full">
              <p className="hidden lg:block text-white uppercase text-base  sm:text-xl lg:text-xl font-extrabold  lg:text-left lg:absolute lg:bottom-60 lg:pl-[35%] lg:max-w-[800px] leading-relaxed">
                Capital Square
                <br />
                Là mạch nối quá khứ - hiện tại và tương lai, giữa thiên nhiên
                con người và công nghệ.
              </p>
            </div> */}
          </div>
        </div>

        <section className="relative overflow-hidden pt-[30.25%] lg:h-[800px]">
          <div
            className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${section2})`,
              backgroundPosition: "center 33%",
            }}
          />
        </section>

        <div id="location" className="w-full flex justify-end">
          <section className="relative lg:-mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch w-full lg:w-[85%] z-20 lg:rounded-tr-[20%]">
            <div className="h-[300px] sm:h-[400px] md:h-[350px] lg:h-full">
              <img
                src={section3}
                alt="Bản đồ minh đường tụ thủy"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="w-full flex justify-end">
              <div className="lg:bg-[#e8e8e8] p-8 lg:pt-12 lg:pr-40 lg:pb-12 lg:pl-[100px] flex flex-col justify-center rounded-tr-[20%] text-right">
                <h2 className="text-[#2B5192] text-[40px] lg:text-3xl font-bold uppercase mb-4 font-['Roboto-ExtraLight']">
                  Địa Thế
                </h2>
                <h3 className="text-[#F47920] text-[40px] lg:text-2xl font-bold uppercase mb-6 font-['Roboto-Medium']">
                  "Minh đường tụ thủy"
                </h3>
                <p className="text-base leading-relaxed text-[#212529] mb-6  font-medium">
                  Sở hữu vị trí độc tôn bên dòng sông Hàn, với thế tựa núi –
                  hướng thủy đắc địa, Capital Square có hội tụ những năng lượng
                  mạnh mẽ đến từ vượng khí đất trời và dòng sinh khí thịnh vượng
                  của sông Hàn.
                  <br />
                  Tọa lạc ở giao điểm phồn vinh bậc nhất của thành phố – trái
                  tim hành chính – kinh tế - văn hóa của Thành phố Đà Nẵng
                  (đường Trần Phú – Nguyễn Công Trứ – Ngô Quyền), Capital Square
                  xứng tầm kiến tạo nên một điểm đến hội tụ mọi thế mạnh nhất về
                  vượng khí, năng lượng sinh tài lộc và hình thái.
                </p>

                <div className="grid grid-cols-2 gap-8 text-right max-w-4xl ml-auto">
                  <div className="space-y-8">
                    <div>
                      <div className="text-[#f37021] text-2xl font-bold mb-2 border-b-2 border-[#f37021] inline-block pb-1">
                        0 PHÚT
                      </div>
                      <div className="text-gray-800 font-medium">
                        SÔNG HÀN
                        <br />
                        VINCOM PLAZA ĐÀ NẴNG
                      </div>
                    </div>

                    <div>
                      <div className="text-[#f37021] text-2xl font-bold mb-2 border-b-2 border-[#f37021] inline-block pb-1">
                        15 PHÚT
                      </div>
                      <div className="text-gray-800 font-medium mt-2">
                        SÂN BAY QUỐC TẾ ĐÀ NẴNG
                        <br />
                        NÚI NGŨ HÀNH SƠN
                        <br />
                        BÁN ĐẢO SƠN TRÀ
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[#f37021] text-2xl font-bold mb-2 border-b-2 border-[#f37021] inline-block pb-1">
                      05 PHÚT
                    </div>
                    <div className="text-gray-800 font-medium leading-relaxed text-right">
                      CẦU RỒNG
                      <br />
                      CHỢ CỒN
                      <br />
                      BẢO TÀNG ĐÀ NẴNG
                      <br />
                      BỆNH VIỆN ĐÀ NẴNG
                      <br />
                      TRUNG TÂM ĐÀ NẴNG
                      <br />
                      BÃI BIỂN MỸ KHÊ
                      <br />
                      CÔNG VIÊN APEC
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div
        id="utilities"
        className="relative w-full h-[500px] sm:h-[600px] md:h-[1000px] md:overflow-hidden"
      >
        <div className="flex flex-col md:flex-row min-h-screen">
          <div className="w-full md:w-[56%] relative h-[500px] sm:h-[600px] md:h-[1000px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${section4})`,
              }}
            />

            {/* Orange line - full height */}
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600"></div>
            <div className="absolute left-8 top-1/2 -translate-y-1/2 w-0.5 h-32 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600"></div>

            {/* Text content */}
            <div className="absolute left-15 sm:left-[70px] lg:left-[70px] md:left-[40px] top-1/2 -translate-y-1/2 text-white z-10 md:z-30 px-4 sm:px-6">
              <h2 className="text-4xl sm:text-[56px] font-bold mb-4 tracking-wider">
                TIỆN ÍCH
              </h2>
              <h3 className="text-3xl sm:text-3xl font-bold text-[#F47920] mb-4 leading-tight">
                TUYÊN NGÔN
                <br />
                PHONG CÁCH
                <br />
                SỐNG ĐẲNG CẤP
              </h3>
              <p className="text-sm font-bold leading-relaxed max-w-[70%] opacity-90">
                Những tiện ích đẳng cấp giao thoa hòa hợp với thiên nhiên tạo
                nên sự thoải mái, Capital Square được thiết kế để tạo nên một
                không gian sống lý tưởng, nơi cư dân có thể tận hưởng cuộc sống
                với những tiện nghi thoải mái nghỉ ngơi mang phong cách thời
                thượng, đẳng cấp và hiện đại trong một không gian sống xanh.
              </p>
            </div>
          </div>

          <div className="hidden md:block w-full md:w-[44%] h-[1000px] bg-[#e8e8e8]"></div>
        </div>

        <div className="hidden md:block w-full h-[400px] md:w-[800px] md:h-[650px] mt-8 md:mt-10 md:absolute md:left-[70%] md:top-95 md:-translate-x-1/2 md:-translate-y-1/2 z-20">
          {/* <img
            src={image10}
            alt="Luxury yacht at marina"
            className="object-cover rounded-tr-[20%] w-full h-full"
          /> */}
          <div className=" h-[400px] lg:h-[600px] md:h-[600px] sm:h-[400px] ">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }}
              loop
              className="h-full rounded-tr-[20%]"
            >
              <SwiperSlide>
                <img
                  src={image9}
                  alt="Bản đồ minh đường tụ thủy"
                  className="object-cover w-full h-full  md:rounded-tr-[20%] "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={image8}
                  alt="Bản đồ minh đường tụ thủy"
                  className="object-cover w-full h-full md:rounded-tr-[20%]"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={image7}
                  alt="Bản đồ minh đường tụ thủy"
                  className="object-cover w-full h-full md:rounded-tr-[20%]"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={image6}
                  alt="Bản đồ minh đường tụ thủy"
                  className="object-cover w-full h-full md:rounded-tr-[20%]"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={image5}
                  alt="Bản đồ minh đường tụ thủy"
                  className="object-cover w-full h-full md:rounded-tr-[20%]"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div id="ground" className="w-full flex justify-end">
        <section className="relative md:-mt-[200px] grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch w-full md:w-[85%] z-20 md:rounded-tr-[20%]">
          <div className="block md:hidden w-full h-[350px] mt-4 mb-2  mx-auto relative z-30 shadow-lg">
            <img
              src={image10}
              alt="Luxury yacht at marina"
              className="object-cover rounded-tr-[10%] w-[98%] h-full"
            />
          </div>
          <div className="h-[400px] md:h-[500px] lg:h-[1000px] my-1">
            <div className="h-full ">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                loop
                className="h-full rounded-tl-[20%]"
              >
                <SwiperSlide>
                  <img
                    src={imageC4}
                    alt="Sơ đồ C4 Capital Square"
                    className="object-cover w-full h-full md:rounded-tl-[20%]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={imageC6}
                    alt="Sơ đồ C6 Capital Square"
                    className="object-cover w-full h-full md:rounded-tl-[20%]"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="w-full mt-5 lg:mt-0 lg:flex lg:justify-center">
            <div className="px-4 md:px-6 md:pr-4 bg-[#2B5192] lg:pt-12 lg:pr-40 lg:pl-[80px] flex flex-col justify-center text-right items-end">
              <h2 className="text-[#fff] text-[28px] md:text-[44px] lg:text-[56px] uppercase mb-4 font-['Roboto-Light'] leading-snug md:leading-snug lg:leading-normal">
                BIỂU TƯỢNG <br />
                KIẾN TRÚC <br />
                ĐỘC BẢN
              </h2>

              <p className="text-sm md:text-base lg:text-xl font-bold font-['Roboto'] leading-relaxed mb-6 text-[#fff] max-w-sm md:max-w-lg text-right">
                Capital Square như những cánh buồm căng gió vươn mình trên dòng
                sông Hàn, hòa quyện giữa nét cong mềm mại của dòng nước và ánh
                nắng rực rỡ trên mặt kính sống động.
              </p>

              <p className="text-sm md:text-base lg:text-xl font-bold font-['Roboto'] leading-relaxed mb-6 text-[#fff] max-w-sm md:max-w-md text-right">
                Capital Square như những cánh buồm căng gió vươn mình trên dòng
                sông Hàn, hòa quyện giữa nét cong mềm mại của dòng nước và ánh
                nắng rực rỡ trên mặt kính sống động.
              </p>

              <div className="text-[#F47920] text-[20px] md:text-[32px] lg:text-[50px] font-bold leading-snug uppercase tracking-wide space-y-1 text-right">
                THÔNG SỐ <br />
                CÁC CĂN <br />
                & MẶT BẰNG <br />
                ĐIỂN HÌNH <br />
                THUỘC DỰ ÁN <br />
              </div>

              <div className="mt-8 w-full flex justify-center">
                <button
                  className="bg-white text-[#174a8b] rounded-full px-6 py-2 text-sm font-medium  border-red-500 border-2 hover:bg-[#f37021] hover:text-white transition cursor-pointer"
                  onClick={() => setIsOpen(true)}
                >
                  TÌM HIỂU THÊM
                </button>
              </div>
              {isOpen && (
                <div
                  className="fixed inset-0 z-50 grid px-4 bg-black/50 pt-0 sm:pt-8 md:pt-16 lg:pt-[80px] place-items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <div
                    className="relative bg-white rounded-xl overflow-hidden w-full max-w-4xl max-h-[90vh] shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-3 right-3 z-10 p-2 bg-white border-2 border-red-500 pointer- text-red-500 rounded-full cursor-pointer"
                      title="Đóng"
                    >
                      <CloseIcon />
                    </button>

                    {/* Image content */}
                    <img
                      src={image4}
                      alt="Chi tiết"
                      className="w-full h-auto max-h-[90vh] object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      <Gallery />
      <CapitalSquareCarousel />
      <RegisterForm />
      <a
        href="tel:0911296979"
        className="fixed bottom-35 right-2 z-50 flex items-center px-4 py-2 gap-2 animate-soft-shake transition-all"
      >
        <span className="text-orange-500 font-bold text-xl">0911 29 69 79</span>
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-orange-400 text-orange-500 animate-pulse-ring">
          <LocalPhoneIcon />
        </div>
      </a>
      <a
        href="https://www.tiktok.com/@capital.square.danang?_t=ZS-8y2MxDeOfy6&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-47 right-2 z-50 flex items-center px-4 py-2 gap-2 transition-all"
      >
        <div className="overflow-hidden max-w-0 group-hover:max-w-[150px] transition-all duration-500 ease-in-out">
          <span className="text-orange-500 font-bold text-xl whitespace-nowrap block ">
            Capital Square
          </span>
        </div>
        {/* Logo giữ nguyên vị trí */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-orange-500  shadow-lg animate-pulse-ring">
          <SiTiktok className="w-5 h-5 text-orange-500" />
        </div>

        {/* Chữ chạy ra khi hover */}
      </a>
    </main>
  );
}
