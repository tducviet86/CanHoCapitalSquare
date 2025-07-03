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

      <section className="bottom-23  relative overflow-hidden py-8">
        <div className="w-2/3 mx-auto">
          <div className="grid grid-cols-2 h-[280px] rounded-lg overflow-hidden shadow-lg">
            {/* Left Content Box */}
            <div className="bg-blue-600 text-white relative flex flex-col justify-center px-8">

              {/* Logo */}
              <div className="absolute top-6 right-6">
                <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
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
            <div className="relative">
              <img
                src="/placeholder.svg?height=280&width=400"
                alt="Yacht sunset view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center text-gray-800 hover:scale-105 transition-transform duration-200 shadow-lg">
                  <div className="w-0 h-0 border-l-[12px] border-l-gray-800 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </button>
              </div>

              {/* Video text */}
              <div className="absolute bottom-6 right-6">
                <span className="text-white text-sm font-medium underline cursor-pointer hover:text-orange-300 transition-colors">
                  XEM VIDEO DỰ ÁN
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-orange-500 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">
                  VỊ TRÍ
                  <br />
                  PHỒN VINH
                </h3>
                <p className="leading-relaxed">
                  Tọa lạc tại giao điểm của các tuyến đường huyết mạch, Capital
                  Square kết nối thuận tiện đến mọi điểm quan trọng trong thành
                  phố. Từ đây, cư dân có thể dễ dàng di chuyển đến các khu vực
                  kinh doanh, giải trí và du lịch nổi tiếng.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://capitalsquare.vn/images/section-1.png"
                alt="Location Map"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

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

// import {
//   LocationOn,
//   Phone,
//   Email,
//   Facebook,
//   YouTube,
//   FlightTakeoff,
//   Water,
//   Business,
//   Pool,
//   FitnessCenter,
//   ChildCare,
//   Security,
//   Architecture,
//   Home,
//   Apartment,
//   Bed,
//   Visibility,
// } from "@mui/icons-material"

// export default function CapitalSquarePage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src="https://capitalsquare.vn/images/section-1.png"
//             alt="Capital Square Building"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
//         </div>

//         {/* Orange Accent Shape */}
//         <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
//         <div className="absolute top-20 left-8 w-32 h-32 border-4 border-orange-500 rounded-lg opacity-30"></div>

//         <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
//           <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
//             {/* Left Content */}
//             <div className="text-white">
//               <div className="border-l-4 border-orange-500 pl-8 mb-8">
//                 <h1 className="text-6xl font-bold mb-4 leading-tight">CAPITAL SQUARE</h1>
//                 <p className="text-3xl mb-6 font-light">Vị thế Phồn vinh</p>
//                 <p className="text-xl leading-relaxed mb-8 opacity-90">
//                   Tọa lạc tại vị trí đắc địa bên bờ sông Hàn thơ mộng, Capital Square không chỉ là nơi an cư mà còn là
//                   biểu tượng của sự thịnh vượng và đẳng cấp sống hiện đại.
//                 </p>
//                 <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-xl rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//                   Tìm hiểu thêm
//                 </button>
//               </div>
//             </div>

//             {/* Right Content - Info Box */}
//             <div className="relative">
//               <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl shadow-2xl max-w-md ml-auto transform rotate-1 hover:rotate-0 transition-transform duration-300">
//                 <div className="transform -rotate-1">
//                   <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
//                     <Home className="mr-3" />
//                     THÔNG TIN DỰ ÁN
//                   </h3>
//                   <div className="space-y-4 text-white">
//                     <div className="flex justify-between items-center">
//                       <span className="flex items-center">
//                         <Architecture className="w-4 h-4 mr-2" />
//                         Tổng diện tích:
//                       </span>
//                       <span className="font-semibold">15.000 m²</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="flex items-center">
//                         <Apartment className="w-4 h-4 mr-2" />
//                         Số tầng:
//                       </span>
//                       <span className="font-semibold">25 tầng</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="flex items-center">
//                         <Home className="w-4 h-4 mr-2" />
//                         Số căn hộ:
//                       </span>
//                       <span className="font-semibold">500 căn</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span>Bàn giao:</span>
//                       <span className="font-semibold">Q4/2024</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Heart of Da Nang Section */}
//       <section className="py-24 bg-gray-50 relative overflow-hidden">
//         {/* Decorative Elements */}
//         <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -translate-y-16 translate-x-16"></div>
//         <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full translate-y-12 -translate-x-12"></div>

//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <div className="absolute -top-8 -left-8 w-16 h-16 bg-orange-500 rounded-full opacity-20"></div>
//               <div className="border-l-4 border-orange-500 pl-8 mb-10">
//                 <span className="text-orange-500 font-bold text-sm uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full inline-block mb-4">
//                   Vị trí đắc địa
//                 </span>
//                 <h2 className="text-5xl font-bold text-blue-900 mt-6 mb-8 leading-tight">
//                   NƠI TRẢI TIM
//                   <br />
//                   <span className="text-orange-500">ĐÀ NẴNG</span>
//                 </h2>
//               </div>
//               <p className="text-gray-700 text-lg leading-relaxed mb-8">
//                 Capital Square tọa lạc tại vị trí đắc địa nhất thành phố Đà Nẵng, nằm ngay trung tâm quận Hải Châu -
//                 trái tim của thành phố. Với vị trí chiến lược này, cư dân có thể dễ dàng tiếp cận mọi tiện ích đô thị
//                 hiện đại.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-center text-gray-700 text-lg p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
//                   <FlightTakeoff className="text-orange-500 mr-4 flex-shrink-0" />
//                   <span>Cách sân bay quốc tế Đà Nẵng chỉ 5 phút</span>
//                 </div>
//                 <div className="flex items-center text-gray-700 text-lg p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
//                   <Water className="text-orange-500 mr-4 flex-shrink-0" />
//                   <span>Bên cạnh sông Hàn thơ mộng</span>
//                 </div>
//                 <div className="flex items-center text-gray-700 text-lg p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
//                   <Business className="text-orange-500 mr-4 flex-shrink-0" />
//                   <span>Trung tâm thương mại, giải trí lớn nhất miền Trung</span>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
//               <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-100 rounded-full opacity-30"></div>
//               <img
//                 src="https://capitalsquare.vn/images/section-1.png"
//                 alt="Da Nang City View"
//                 className="rounded-2xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Location Section */}
//       <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
//         {/* Curved Background Element */}
//         <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-orange-500 to-orange-400 transform -skew-y-1"></div>
//         <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500 bg-opacity-10 rounded-full translate-y-32 translate-x-32"></div>

//         <div className="container mx-auto px-4 relative z-10 pt-16">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-10 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
//                 <div className="transform -rotate-1">
//                   <h3 className="text-3xl font-bold mb-6">
//                     VỊ TRÍ
//                     <br />
//                     <span className="text-orange-100">PHỒN VINH</span>
//                   </h3>
//                   <p className="text-lg leading-relaxed text-orange-50 mb-6">
//                     Tọa lạc tại giao điểm của các tuyến đường huyết mạch, Capital Square kết nối thuận tiện đến mọi điểm
//                     quan trọng trong thành phố. Từ đây, cư dân có thể dễ dàng di chuyển đến các khu vực kinh doanh, giải
//                     trí và du lịch nổi tiếng.
//                   </p>
//                   <div className="flex items-center text-orange-100">
//                     <LocationOn className="mr-2" />
//                     <span className="font-semibold">Trung tâm Quận Hải Châu</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute -top-8 -left-8 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
//               <img
//                 src="https://capitalsquare.vn/images/section-1.png"
//                 alt="Location Map"
//                 className="rounded-2xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>

//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative order-2 lg:order-1">
//               <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-100 rounded-full opacity-30"></div>
//               <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full opacity-40"></div>
//               <img
//                 src="https://capitalsquare.vn/images/section-1.png"
//                 alt="Detailed Location Map"
//                 className="rounded-3xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500"
//               />
//             </div>

//             <div className="order-1 lg:order-2">
//               <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 bg-opacity-20 rounded-full -translate-y-16 translate-x-16"></div>
//                 <div className="relative z-10">
//                   <h3 className="text-3xl font-bold mb-6 leading-tight">
//                     ĐA THẾ
//                     <br />
//                     <span className="text-orange-400">
//                       "MINH HƯỚNG
//                       <br />
//                       TỰ THÂN"
//                     </span>
//                   </h3>
//                   <p className="text-lg leading-relaxed mb-8 text-blue-100">
//                     Capital Square được thiết kế với đa dạng hướng view, mỗi căn hộ đều có tầm nhìn đẹp ra sông Hàn,
//                     thành phố hoặc biển. Điều này đảm bảo mọi cư dân đều được tận hưởng không gian sống thoáng đãng và
//                     ánh sáng tự nhiên tối ưu.
//                   </p>
//                   <div className="space-y-4">
//                     <div className="flex items-center p-3 bg-blue-800 bg-opacity-50 rounded-xl">
//                       <LocationOn className="text-orange-400 mr-3 flex-shrink-0" />
//                       <span className="text-blue-100">123 Đường ABC, Quận Hải Châu, Đà Nẵng</span>
//                     </div>
//                     <div className="flex items-center p-3 bg-blue-800 bg-opacity-50 rounded-xl">
//                       <Phone className="text-orange-400 mr-3 flex-shrink-0" />
//                       <span className="text-blue-100">0123 456 789</span>
//                     </div>
//                     <div className="flex items-center p-3 bg-blue-800 bg-opacity-50 rounded-xl">
//                       <Email className="text-orange-400 mr-3 flex-shrink-0" />
//                       <span className="text-blue-100">info@capitalsquare.vn</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Amenities Section */}
//       <section className="py-24 bg-white relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
//         <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>

//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <div className="border-l-4 border-orange-500 pl-8 mb-10">
//                 <h2 className="text-5xl font-bold text-blue-900 mb-8 leading-tight">
//                   TIỆN ÍCH
//                   <br />
//                   <span className="text-orange-500">ĐẲNG CẤP RESORT</span>
//                   <br />
//                   PHONG CÁCH
//                   <br />
//                   SỐNG HIỆN ĐẠI
//                 </h2>
//               </div>
//               <p className="text-gray-700 text-lg leading-relaxed mb-10">
//                 Capital Square mang đến cho cư dân một hệ thống tiện ích đẳng cấp 5 sao với đầy đủ các dịch vụ từ giải
//                 trí, thể thao đến chăm sóc sức khỏe và giáo dục.
//               </p>
//               <div className="grid grid-cols-1 gap-4">
//                 <div className="flex items-center text-gray-700 text-lg p-4 bg-gray-50 rounded-xl hover:bg-orange-50 hover:text-orange-700 transition-all duration-300">
//                   <Pool className="text-orange-500 mr-4 flex-shrink-0" />
//                   <span>Hồ bơi vô cực tầng thượng</span>
//                 </div>
//                 <div className="flex items-center text-gray-700 text-lg p-4 bg-gray-50 rounded-xl hover:bg-orange-50 hover:text-orange-700 transition-all duration-300">
//                   <FitnessCenter className="text-orange-500 mr-4 flex-shrink-0" />
//                   <span>Phòng gym & spa cao cấp</span>
//                 </div>
//                 <div className="flex items-center text-gray-700 text-lg p-4 bg-gray-50 rounded-xl hover:bg-orange-50 hover:text-orange-700 transition-all duration-300">
//                   <ChildCare className="text-orange-500 mr-4 flex-shrink-0" />
//                   <span>Khu vui chơi trẻ em</span>
//                 </div>
//                 <div className="flex items-center text-gray-700 text-lg p-4 bg-gray-50 rounded-xl hover:bg-orange-50 hover:text-orange-700 transition-all duration-300">
//                   <Security className="text-orange-500 mr-4 flex-shrink-0" />
//                   <span>Hệ thống an ninh 24/7</span>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-100 rounded-full opacity-50"></div>
//               <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-40"></div>
//               <img
//                 src="https://capitalsquare.vn/images/section-1.png"
//                 alt="Luxury Amenities"
//                 className="rounded-3xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Building Specifications */}
//       <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
//         <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-100 rounded-full translate-y-32 translate-x-32 opacity-30"></div>

//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100 rounded-full opacity-30"></div>
//               <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-full opacity-50"></div>
//               <img
//                 src="https://capitalsquare.vn/images/section-1.png"
//                 alt="Building Architecture"
//                 className="rounded-3xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500"
//               />
//             </div>

//             <div>
//               <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
//                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500 bg-opacity-20 rounded-full translate-y-16 -translate-x-16"></div>
//                 <div className="relative z-10">
//                   <h3 className="text-3xl font-bold mb-8 leading-tight flex items-center">
//                     <Architecture className="mr-3 text-orange-400" />
//                     BIỂU TƯỢNG
//                     <br />
//                     <span className="text-orange-400">KIẾN TRÚC ĐỘC BẢN</span>
//                   </h3>
//                   <div className="grid grid-cols-2 gap-8 mb-8">
//                     <div className="text-center p-4 bg-blue-800 bg-opacity-50 rounded-xl">
//                       <div className="text-4xl font-bold text-orange-400 mb-2 flex items-center justify-center">
//                         <Apartment className="mr-2" />
//                         25
//                       </div>
//                       <div className="text-sm text-blue-200 font-medium">TẦNG</div>
//                     </div>
//                     <div className="text-center p-4 bg-blue-800 bg-opacity-50 rounded-xl">
//                       <div className="text-4xl font-bold text-orange-400 mb-2 flex items-center justify-center">
//                         <Home className="mr-2" />
//                         500
//                       </div>
//                       <div className="text-sm text-blue-200 font-medium">CĂN HỘ</div>
//                     </div>
//                     <div className="text-center p-4 bg-blue-800 bg-opacity-50 rounded-xl">
//                       <div className="text-4xl font-bold text-orange-400 mb-2 flex items-center justify-center">
//                         <Bed className="mr-2" />
//                         2-4
//                       </div>
//                       <div className="text-sm text-blue-200 font-medium">PHÒNG NGỦ</div>
//                     </div>
//                     <div className="text-center p-4 bg-blue-800 bg-opacity-50 rounded-xl">
//                       <div className="text-4xl font-bold text-orange-400 mb-2 flex items-center justify-center">
//                         <Visibility className="mr-2" />
//                         100%
//                       </div>
//                       <div className="text-sm text-blue-200 font-medium">VIEW SÔNG</div>
//                     </div>
//                   </div>
//                   <p className="text-blue-100 leading-relaxed">
//                     Thiết kế hiện đại với kiến trúc độc đáo, Capital Square là biểu tượng mới của thành phố Đà Nẵng với
//                     tầm nhìn panorama 360 độ tuyệt đẹp.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-24 bg-white relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-2 h-full bg-orange-500"></div>

//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-blue-900 mb-4">GALLERY</h2>
//             <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
//             <p className="text-gray-600 text-lg">Khám phá không gian sống đẳng cấp tại Capital Square</p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { id: 1, title: "Lobby sang trọng" },
//               { id: 2, title: "Hồ bơi vô cực" },
//               { id: 3, title: "Phòng gym hiện đại" },
//               { id: 4, title: "Khu vườn xanh" },
//               { id: 5, title: "View sông Hàn" },
//               { id: 6, title: "Căn hộ mẫu" },
//             ].map((item) => (
//               <div
//                 key={item.id}
//                 className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
//               >
//                 <img
//                   src="https://capitalsquare.vn/images/section-1.png"
//                   alt={item.title}
//                   className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                   <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
//                   <p className="text-sm opacity-90">Khám phá không gian sống đẳng cấp</p>
//                 </div>
//                 <div className="absolute top-4 right-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <span className="text-white font-bold">{item.id}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Advantages Section */}
//       <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 bg-opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
//         <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500 bg-opacity-10 rounded-full translate-y-24 -translate-x-24"></div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-8 shadow-lg">
//               <span className="text-3xl font-bold">8</span>
//             </div>
//             <h2 className="text-4xl font-bold mb-4">
//               LỢI ĐIỂM
//               <br />
//               CHỈ CÓ TẠI
//               <br />
//               <span className="text-orange-400">CAPITAL SQUARE</span>
//             </h2>
//             <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 title: "Vị trí đắc địa",
//                 desc: "Trung tâm thành phố Đà Nẵng",
//                 icon: <LocationOn className="w-8 h-8" />,
//               },
//               {
//                 title: "Thiết kế hiện đại",
//                 desc: "Kiến trúc độc đáo và sang trọng",
//                 icon: <Architecture className="w-8 h-8" />,
//               },
//               {
//                 title: "Tiện ích đẳng cấp",
//                 desc: "Hệ thống tiện ích resort 5 sao",
//                 icon: <Pool className="w-8 h-8" />,
//               },
//               {
//                 title: "An ninh 24/7",
//                 desc: "Hệ thống bảo mật hiện đại",
//                 icon: <Security className="w-8 h-8" />,
//               },
//             ].map((advantage, index) => (
//               <div
//                 key={index}
//                 className="bg-white text-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
//               >
//                 <div className="p-6">
//                   <div className="relative mb-6 overflow-hidden rounded-xl">
//                     <img
//                       src="https://capitalsquare.vn/images/section-1.png"
//                       alt={advantage.title}
//                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute top-4 left-4 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white">
//                       {advantage.icon}
//                     </div>
//                   </div>
//                   <h3 className="font-bold text-xl mb-2 text-blue-900">{advantage.title}</h3>
//                   <p className="text-gray-600 leading-relaxed">{advantage.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-24 bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full -translate-y-32 -translate-x-32 opacity-30"></div>
//         <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-100 rounded-full translate-y-24 translate-x-24 opacity-40"></div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-16">
//               <h2 className="text-5xl font-bold text-blue-900 mb-4">ĐĂNG KÝ NHẬN THÔNG TIN</h2>
//               <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
//               <p className="text-gray-600 text-lg">Để lại thông tin để nhận tư vấn từ chuyên gia của chúng tôi</p>
//             </div>
//             <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
//               <div className="p-12">
//                 <div className="grid lg:grid-cols-2 gap-12">
//                   <div>
//                     <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center">
//                       <Phone className="mr-3 text-orange-500" />
//                       Liên hệ với chúng tôi
//                     </h3>
//                     <div className="space-y-6 mb-10">
//                       <div className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-orange-50 hover:to-orange-100 transition-all duration-300">
//                         <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
//                           <LocationOn className="w-6 h-6 text-white" />
//                         </div>
//                         <div>
//                           <p className="font-semibold text-gray-800">Địa chỉ</p>
//                           <p className="text-gray-600">123 Đường ABC, Quận Hải Châu, Đà Nẵng</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-orange-50 hover:to-orange-100 transition-all duration-300">
//                         <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
//                           <Phone className="w-6 h-6 text-white" />
//                         </div>
//                         <div>
//                           <p className="font-semibold text-gray-800">Hotline</p>
//                           <p className="text-gray-600">0123 456 789</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-orange-50 hover:to-orange-100 transition-all duration-300">
//                         <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
//                           <Email className="w-6 h-6 text-white" />
//                         </div>
//                         <div>
//                           <p className="font-semibold text-gray-800">Email</p>
//                           <p className="text-gray-600">info@capitalsquare.vn</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex space-x-4">
//                       <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//                         <Facebook className="w-6 h-6 text-white" />
//                       </div>
//                       <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center cursor-pointer hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//                         <YouTube className="w-6 h-6 text-white" />
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <form className="space-y-6">
//                       <div className="grid md:grid-cols-2 gap-4">
//                         <input
//                           type="text"
//                           placeholder="Họ và tên *"
//                           className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg transition-all duration-300 hover:border-orange-300"
//                         />
//                         <input
//                           type="tel"
//                           placeholder="Số điện thoại *"
//                           className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg transition-all duration-300 hover:border-orange-300"
//                         />
//                       </div>
//                       <input
//                         type="email"
//                         placeholder="Email"
//                         className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg transition-all duration-300 hover:border-orange-300"
//                       />
//                       <textarea
//                         placeholder="Nội dung tin nhắn"
//                         rows="5"
//                         className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-lg transition-all duration-300 hover:border-orange-300"
//                       ></textarea>
//                       <button
//                         type="submit"
//                         className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//                       >
//                         Gửi thông tin
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
