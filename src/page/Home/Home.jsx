import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  YouTube,
} from "@mui/icons-material";

export default function CapitalSquarePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0">
          <img
            src="https://capitalsquare.vn/images/section-1.png"
            alt="Capital Square Building"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-[5%] left-[20%] z-10 text-white">
          <div>
            <h1 className="text-[64px] font-extrabold ml-[-3%]  text-[#F47920] font-['Roboto-SemiBold']">
              CAPITAL SQUARE
            </h1>
            <p className="text-[64px] mt-[10px] leading-[1.1] ml-[220px]">
              Vị thế Phồn vinh
            </p>
          </div>
        </div>
      </section>

      <section className="bottom-30  relative overflow-hidden pt-8 pb-2">
        <div className="w-[77%] mx-auto">
          <div
            className="grid grid-cols-2 h-[300px]  overflow-hidden shadow-lg"
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              className=" text-white relative flex flex-col justify-center px-8 rounded-tl-2xl rounded-bl-xl"
              style={{
                backgroundImage: `url("https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-1-1.png")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute top-6 right-6">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img
                    src="https://capitalsquare.vn/images/section-1-logo.png"
                    alt="logo"
                  />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-sm uppercase font-medium text-white tracking-wider mb-2">
                  VỊ TRÍ "KIM CƯƠNG"
                </h3>
                <h2 className="text-2xl font-bold text-orange-500 mb-4 leading-tight">
                  TÂM MẠCH
                  <br />
                  CỦA ĐÀ NẴNG
                </h2>
                <p className="text-white text-sm leading-relaxed">
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

            {/* Right Image Box */}
            <div className="relative rounded-tr-[80px]">
              <iframe
                className="absolute inset-0 w-full h-full z-10 rounded-tr-[80px]"
                src="https://www.youtube.com/embed/cytDlTrgkVY?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>

              <div className="absolute inset-0 bg-black bg-opacity-10 rounded-tr-[80px]" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 flex items-center justify-center text-gray-800 hover:scale-105 transition-transform duration-200 shadow-lg">
                  <div className="w-0 h-0 border-l-[12px] border-l-gray-800 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </button>
              </div>

              {/* Video text */}
              <div className="absolute bottom-6 right-6 rounded-tr-[80px]">
                <span className="text-white text-sm font-medium underline cursor-pointer hover:text-orange-300 transition-colors z-15">
                  XEM VIDEO DỰ ÁN
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <div>
        {/* Section 1 */}
        <section className="pb-20 bg-white relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Cột trái - tiêu đề + mô tả */}
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
                  <div className="flex">
                    <div className="w-[24%] text-orange-500 font-bold">
                      Vị trí
                    </div>
                    <div className="w-[76%] text-[16px] text-[#212529] font-medium">
                      Đường Trần Hưng Đạo & Ngô Quyền, Phường An Hải Bắc, Quận
                      Sơn Trà, TP Đà Nẵng
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-[24%] text-orange-500 font-bold">
                      Diện tích khu đất
                    </div>
                    <div className="w-[76%] text-[16px] text-[#212529] font-medium">
                      6,14ha
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-[24%] text-orange-500 font-bold">
                      Quy mô
                    </div>
                    <div className="w-[76%] text-[16px] text-[#212529] font-medium">
                      14 tòa Căn hộ cao cấp và 1 tòa Thương mại dịch vụ
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-[24%] text-orange-500 font-bold">
                      Loại hình căn hộ
                    </div>
                    <div className="w-[76%] text-[16px] text-[#212529] font-medium">
                      1PN - 2PN - 3PN - Dual Key
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-[24%] text-orange-500 font-bold">
                      Hình thức sở hữu
                    </div>
                    <div className="w-[76%] text-[16px] text-[#212529] font-medium">
                      Sổ đỏ sở hữu lâu dài
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative w-[85%] h-[850px] -mt-10 -mb-135 z-20">
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-2-1.png')",
              backgroundSize: "100%",
              height: "90%",
              width: "130%",
              clipPath: "inset(0 25% 0 0)",
            }}
          />

          <div className="relative min-h-screen flex items-center justify-center px-4 py-12 z-30">
            <div className="container mx-auto max-w-xl">
              <div className=" justify-center items-center">
                {/* Left Column - Orange text card */}
                <div className="flex justify-center lg:justify-start ml-4">
                  <div className="bg-[#F47920] text-white p-8 rounded-tr-[20%] w-[400px] h-[450px] shadow-2xl ">
                    <h2 className="text-[#2B5192] text-[40px]  font-bold mb-8 font-['Roboto-SemiBold'] uppercase leading-tight tracking-wide">
                      VỊ THẾ
                      <br />
                      PHỒN VINH
                    </h2>

                    <p className="text-[#fff] leading-relaxed text-base lg:text-lg font-light">
                      Dòng sông Hàn từ lâu đã là nơi không chỉ neo thuyền mà còn
                      neo gửi ký ức của cả một thành phố. Dòng sông ấy nay tiếp
                      tục là mạch nối giữa truyền thống và hiện đại, giữa cộng
                      đồng địa phương và giới tinh hoa toàn cầu, giữa thiên
                      nhiên và đời sống đô thị. Capital Square chính là điểm
                      giao thoa ấy, nơi những tòa tháp vươn cao, tiện nghi hành
                      trình.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-20 text-white z-40 ">
            <div className="text-white text-base text-bold uppercase pl-[40%] w-[800px] my-[80px] mx-[50px] leading-[1.5]">
              Capital Square
              <br />
              Là mạch nối quá khứ - hiện tại và tương lai, giữa thiên nhiên con
              người và công nghệ.
            </div>
          </div>
        </div>

        <section className="relative min-h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover h-[1000px] bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-2-2.png')",
              // hieght:"200%",
              backgroundPosition: "center 33%",
            }}
          />
        </section>
      </div>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://capitalsquare.vn/images/section-1.png"
                alt="Detailed Location Map"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">
                  ĐA THẾ
                  <br />
                  "MINH HƯỚNG
                  <br />
                  TỰ THÂN"
                </h3>
                <p className="leading-relaxed mb-6">
                  Capital Square được thiết kế với đa dạng hướng view, mỗi căn
                  hộ đều có tầm nhìn đẹp ra sông Hàn, thành phố hoặc biển. Điều
                  này đảm bảo mọi cư dân đều được tận hưởng không gian sống
                  thoáng đãng và ánh sáng tự nhiên tối ưu.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Địa chỉ:</strong> 123 Đường ABC, Quận Hải Châu, Đà
                    Nẵng
                  </p>
                  <p>
                    <strong>Hotline:</strong> 0123 456 789
                  </p>
                  <p>
                    <strong>Email:</strong> info@capitalsquare.vn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="border-l-4 border-orange-500 pl-6 mb-8">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">
                  TIỆN ÍCH
                  <br />
                  ĐẲNG CẤP RESORT
                  <br />
                  PHONG CÁCH
                  <br />
                  SỐNG HIỆN ĐẠI
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Capital Square mang đến cho cư dân một hệ thống tiện ích đẳng
                cấp 5 sao với đầy đủ các dịch vụ từ giải trí, thể thao đến chăm
                sóc sức khỏe và giáo dục.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Hồ bơi vô cực tầng thượng
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Phòng gym & spa cao cấp
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Khu vui chơi trẻ em
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Hệ thống an ninh 24/7
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://capitalsquare.vn/images/section-1.png"
                alt="Luxury Amenities"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Building Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://capitalsquare.vn/images/section-1.png"
                alt="Building Architecture"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <div className="bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">
                  BIỂU TƯỢNG
                  <br />
                  KIẾN TRÚC ĐỘC BẢN
                </h3>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">
                      25
                    </div>
                    <div className="text-sm">TẦNG</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">
                      500
                    </div>
                    <div className="text-sm">CĂN HỘ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">
                      2-4
                    </div>
                    <div className="text-sm">PHÒNG NGỦ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">
                      100%
                    </div>
                    <div className="text-sm">VIEW SÔNG</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">
                  Thiết kế hiện đại với kiến trúc độc đáo, Capital Square là
                  biểu tượng mới của thành phố Đà Nẵng với tầm nhìn panorama 360
                  độ tuyệt đẹp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            GALLERY
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src="https://capitalsquare.vn/images/section-1.png"
                  alt={`Gallery img ${item}`}
                  width={400}
                  height={300}
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-500 p-4 rounded-lg mb-6">
              <span className="text-2xl font-bold">8</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              LỢI ĐIỂM
              <br />
              CHỈ CÓ TẠI
              <br />
              <span className="text-orange-500">CAPITAL SQUARE</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Vị trí đắc địa",
              "Thiết kế hiện đại",
              "Tiện ích đẳng cấp",
              "An ninh 24/7",
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <img
                    src="https://capitalsquare.vn/images/section-1.png"
                    alt={advantage}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4 w-full"
                  />
                  <h3 className="font-bold text-lg">{advantage}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              ĐĂNG KÝ NHẬN THÔNG TIN
            </h2>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">
                      Liên hệ với chúng tôi
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <LocationOn className="w-5 h-5 text-orange-500 mr-3" />
                        <span className="text-gray-700">
                          123 Đường ABC, Quận Hải Châu, Đà Nẵng
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-orange-500 mr-3" />
                        <span className="text-gray-700">0123 456 789</span>
                      </div>
                      <div className="flex items-center">
                        <Email className="w-5 h-5 text-orange-500 mr-3" />
                        <span className="text-gray-700">
                          info@capitalsquare.vn
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-4 mt-6">
                      <Facebook className="w-6 h-6 text-blue-600 cursor-pointer hover:text-blue-800 transition-colors" />
                      <YouTube className="w-6 h-6 text-red-600 cursor-pointer hover:text-red-800 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Họ và tên *"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      <input
                        type="tel"
                        placeholder="Số điện thoại *"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      <textarea
                        placeholder="Nội dung tin nhắn"
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200"
                      >
                        Gửi thông tin
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
