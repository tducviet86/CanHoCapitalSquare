import Image from "next/image"
import { LocationOn, Phone, Email, Facebook, YouTube } from "@mui/icons-material"

export default function CapitalSquarePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Capital Square Building"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="border-l-4 border-orange-500 pl-6 mb-8">
              <h1 className="text-5xl font-bold mb-4">CAPITAL SQUARE</h1>
              <p className="text-2xl mb-6">Vị thế Phồn vinh</p>
              <p className="text-lg leading-relaxed mb-8">
                Tọa lạc tại vị trí đắc địa bên bờ sông Hàn thơ mộng, Capital Square không chỉ là nơi an cư mà còn là
                biểu tượng của sự thịnh vượng và đẳng cấp sống hiện đại.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-md font-medium transition-colors duration-200">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Heart of Da Nang Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="border-l-4 border-orange-500 pl-6 mb-8">
                <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">Vị trí</span>
                <h2 className="text-4xl font-bold text-blue-900 mt-2 mb-6">
                  NƠI TRẢI TIM
                  <br />
                  ĐÀ NẴNG
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Capital Square tọa lạc tại vị trí đắc địa nhất thành phố Đà Nẵng, nằm ngay trung tâm quận Hải Châu -
                trái tim của thành phố. Với vị trí chiến lược này, cư dân có thể dễ dàng tiếp cận mọi tiện ích đô thị
                hiện đại.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Cách sân bay quốc tế Đà Nẵng chỉ 5 phút
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Bên cạnh sông Hàn thơ mộng
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Trung tâm thương mại, giải trí lớn nhất miền Trung
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Da Nang City View"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
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
                  Tọa lạc tại giao điểm của các tuyến đường huyết mạch, Capital Square kết nối thuận tiện đến mọi điểm
                  quan trọng trong thành phố. Từ đây, cư dân có thể dễ dàng di chuyển đến các khu vực kinh doanh, giải
                  trí và du lịch nổi tiếng.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
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
              <Image
                src="/placeholder.svg?height=500&width=600"
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
                  Capital Square được thiết kế với đa dạng hướng view, mỗi căn hộ đều có tầm nhìn đẹp ra sông Hàn, thành
                  phố hoặc biển. Điều này đảm bảo mọi cư dân đều được tận hưởng không gian sống thoáng đãng và ánh sáng
                  tự nhiên tối ưu.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Địa chỉ:</strong> 123 Đường ABC, Quận Hải Châu, Đà Nẵng
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
                Capital Square mang đến cho cư dân một hệ thống tiện ích đẳng cấp 5 sao với đầy đủ các dịch vụ từ giải
                trí, thể thao đến chăm sóc sức khỏe và giáo dục.
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
              <Image
                src="/placeholder.svg?height=500&width=600"
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
              <Image
                src="/placeholder.svg?height=500&width=600"
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
                    <div className="text-3xl font-bold text-orange-500 mb-2">25</div>
                    <div className="text-sm">TẦNG</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">500</div>
                    <div className="text-sm">CĂN HỘ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">2-4</div>
                    <div className="text-sm">PHÒNG NGỦ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                    <div className="text-sm">VIEW SÔNG</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">
                  Thiết kế hiện đại với kiến trúc độc đáo, Capital Square là biểu tượng mới của thành phố Đà Nẵng với
                  tầm nhìn panorama 360 độ tuyệt đẹp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">GALLERY</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=400`}
                  alt={`Gallery Image ${item}`}
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
            {["Vị trí đắc địa", "Thiết kế hiện đại", "Tiện ích đẳng cấp", "An ninh 24/7"].map((advantage, index) => (
              <div key={index} className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
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
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">ĐĂNG KÝ NHẬN THÔNG TIN</h2>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Liên hệ với chúng tôi</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <LocationOn className="w-5 h-5 text-orange-500 mr-3" />
                        <span className="text-gray-700">123 Đường ABC, Quận Hải Châu, Đà Nẵng</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-orange-500 mr-3" />
                        <span className="text-gray-700">0123 456 789</span>
                      </div>
                      <div className="flex items-center">
                        <Email className="w-5 h-5 text-orange-500 mr-3" />
                        <span className="text-gray-700">info@capitalsquare.vn</span>
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
  )
}
