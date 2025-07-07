import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";

export default function CapitalSquarePage() {
    const [showModal, setShowModal] = useState(false);
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
                <div className="absolute top-[5%] left-[5%] md:left-[10%] lg:left-[20%] z-10 text-white px-4 md:px-0">
                    <div>
                        <h1 className="text-[24px] md:text-[40px] lg:text-[64px] font-extrabold ml-0 md:ml-[-2%] lg:ml-[-3%] text-[#F47920] font-['Roboto-SemiBold'] leading-tight">
                            CAPITAL SQUARE
                        </h1>
                        <p className="text-[24px] md:text-[40px] lg:text-[64px] mt-[10px] leading-[1.1] ml-0 md:ml-[100px] lg:ml-[220px]">
                            Vị thế Phồn vinh
                        </p>
                    </div>
                </div>
            </section>

            <section className="bottom-30 relative overflow-hidden pt-8 pb-2">
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
                                backgroundImage: `url("https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-1-1.png")`,
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
                                src="https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-1-1.png"
                                alt="Video Thumbnail"
                                className="absolute inset-0 w-full h-full object-cover z-0 rounded-bl-2xl md:rounded-bl-none rounded-br-2xl md:rounded-tr-[80px]"
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-bl-2xl md:rounded-bl-none rounded-br-2xl md:rounded-tr-[80px]" />

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

            <div id="introduce" className="mb-20">
                <section className="pb-20 bg-white relative z-10">
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
                                    CAPITAL SQUARE là mạch nối giữa quá khứ - hiện tại và tương lai,
                                    giữa thiên nhiên, con người và công nghệ, Capital Square không
                                    chỉ kiến tạo không gian sống – mà đang định hình lại trung tâm,
                                    kiến thiết một biểu tượng đô thị mới cho một thành phố khát vọng
                                    vươn mình ra toàn cầu..
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[#2B5192] text-4xl mb-2">Giới thiệu</h3>
                                <p className="text-base w-full leading-[1.5] pr-[4%] text-justify font-medium">
                                    Capital Square được tạo nên từ những mỹ cảm sâu sắc nhất về một
                                    cuộc sống thượng lưu đích thực, để trở thành một công trình
                                    tuyệt mỹ, kiêu hãnh vươn mình, chạm khắc nên một biểu tượng đẹp
                                    nơi trung tâm thành phố Đà Nẵng.
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="relative w-full h-[850px] -mt-10 -mb-135 z-20">
                    <div
                        className="absolute inset-0 bg-no-repeat bg-center bg-contain"
                        style={{
                            backgroundImage:
                                "url('https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-2-1.png')",
                            backgroundSize: "100%",
                            // width: "130%",
                            // height: "90%",
                            // transform: "translateX(-15%)",
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
                                            Dòng sông Hàn từ lâu đã là nơi không chỉ neo thuyền mà
                                            còn neo gửi ký ức của cả một thành phố. Dòng sông ấy nay
                                            tiếp tục là mạch nối giữa truyền thống và hiện đại, giữa
                                            cộng đồng địa phương và giới tinh hoa toàn cầu, giữa
                                            thiên nhiên và đời sống đô thị. Capital Square chính là
                                            điểm giao thoa ấy, nơi những tòa tháp vươn cao, tiện
                                            nghi hành trình.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-20 text-white z-40 ">
                        <div className="text-white text-base text-bold uppercase pl-[50%] w-full max-w-[800px] my-[80px] md:mx-[50px] leading-[1.5]">
                            Capital Square
                            <br />
                            Là mạch nối quá khứ - hiện tại và tương lai, giữa thiên nhiên con người
                            và công nghệ.
                        </div>
                    </div>
                </div>

                <section className="relative min-h-screen overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover h-[1000px] bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                "url('https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-2-2.png')",
                            backgroundPosition: "center 33%",
                        }}
                    />
                </section>

                <div id="location" className="w-full flex justify-end">
                    <section className=" relative -mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch w-[85%] z-20 rounded-tr-[20%]">
                        <div className=" h-full">
                            <img
                                src="https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-2-3.png"
                                alt="Bản đồ minh đường tụ thủy"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="w-full flex justify-end">
                            <div className="bg-[#e8e8e8] p-8 lg:pt-12 lg:pr-40 lg:pb-12 lg:pl-[100px] flex flex-col justify-center rounded-tr-[20%] text-right">
                                <h2 className="text-[#2B5192] text-[40px] lg:text-3xl font-bold uppercase mb-4 font-['Roboto-ExtraLight']">
                                    Địa Thế
                                </h2>
                                <h3 className="text-[#F47920] text-[40px] lg:text-2xl font-bold uppercase mb-6 font-['Roboto-Medium']">
                                    "Minh đường tụ thủy"
                                </h3>
                                <p className="text-base leading-relaxed text-[#212529] mb-6  font-medium">
                                    Sở hữu vị trí độc tôn bên dòng sông Hàn, với thế tựa núi – hướng
                                    thủy đắc địa, Capital Square có hội tụ những năng lượng mạnh mẽ
                                    đến từ vượng khí đất trời và dòng sinh khí thịnh vượng của sông
                                    Hàn.
                                    <br />
                                    Tọa lạc ở giao điểm phồn vinh bậc nhất của thành phố – trái tim
                                    hành chính – kinh tế - văn hóa của Thành phố Đà Nẵng (đường Trần
                                    Phú – Nguyễn Công Trứ – Ngô Quyền), Capital Square xứng tầm kiến
                                    tạo nên một điểm đến hội tụ mọi thế mạnh nhất về vượng khí, năng
                                    lượng sinh tài lộc và hình thái.
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

            <div id="utilities" className="relative w-full h-[1000px] overflow-hidden">
                <div className="flex flex-col md:flex-row h-[100vh]">
                    <div className="w-full md:w-[56%] h-[1000px] relative">
                        <div
                            className="object-cover h-[1000px]"
                            style={{
                                backgroundImage:
                                    "url('https://capitalsquare.vn/wp-content/themes/capitalsquare/dist/images/section-3-1.png')",
                                height: "1000px",
                            }}
                        />
                        {/* Orange accent line */}
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600"></div>
                        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-0.5 h-32 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600"></div>

                        {/* Text Content */}
                        <div className="absolute left-0 md:left-70 top-70 -translate-y-1/2 text-white z-10 px-4">
                            <h2 className="text-4xl font-bold mb-2 tracking-wider">TIỆN ÍCH</h2>
                            <h3 className="text-2xl font-bold text-orange-400 mb-6 leading-tight">
                                TUYẾN NGÔN
                                <br />
                                PHONG CÁCH
                                <br />
                                SỐNG ĐẲNG CẤP
                            </h3>
                            <p className="text-sm leading-relaxed max-w-xs opacity-90">
                                Những tiện ích đẳng cấp giao thoa hòa
                                <br />
                                hợp với thiên nhiên tạo nên sự thoải mái,
                                <br />
                                Capital Square được thiết kế để tạo nên một
                                <br />
                                không gian sống lý tưởng, nơi cư dân có thể
                                <br />
                                tận hưởng cuộc sống với những tiện nghi
                                <br />
                                thoải mái nghỉ ngơi mang phong cách thời
                                <br />
                                thượng, đẳng cấp và hiện đại trong một
                                <br />
                                không gian sống xanh.
                            </p>
                        </div>
                    </div>

                    <div className="w-1/2 h-[1000px] bg-[#e8e8e8]"></div>
                </div>

                <div className="md:absolute left-[70%] top-95 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[650px] z-20">
                    <img
                        src="https://capitalsquare.vn/images/section-3-1-slider-1.png"
                        alt="Luxury yacht at marina"
                        fill
                        className="object-cover rounded-tr-[20%] mt-20 w-full h-full"
                        priority
                    />
                </div>
            </div>
            <div id="ground" className="w-full flex justify-end">
                <section className=" relative md:-mt-[200px] grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch w-full md:w-[85%] z-20 md:rounded-tr-[20%]">
                    <div className=" h-[100%] ">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2000 }}
                            loop
                        >
                            <SwiperSlide>
                                <img
                                    src="https://capitalsquare.vn/images/section-3-slider-1.png"
                                    alt="Bản đồ minh đường tụ thủy"
                                    className="object-cover w-full h-full md:rounded-tl-[20%]"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://capitalsquare.vn/images/section-3-slider-1.png"
                                    alt="Bản đồ minh đường tụ thủy"
                                    className="object-cover w-full h-full md:rounded-tl-[20%]"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://capitalsquare.vn/images/section-3-slider-1.png"
                                    alt="Bản đồ minh đường tụ thủy"
                                    className="object-cover w-full h-full md:rounded-tl-[20%]"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="w-full flex justify-end">
                        <div className=" p-6 bg-[#2B5192] lg:pt-12 lg:pr-40  lg:pl-[80px] flex flex-col justify-center md:rounded-tr-[20%] text-right ">
                            <h2 className="text-[#fff] text-[56px]   uppercase mb-4 font-['Roboto-Light']">
                                BIỂU TƯỢNG <br />
                                KIẾN TRÚC
                                <br />
                                ĐỘC BẢN
                            </h2>

                            <p className="max-w-md mx-auto text-[19.2px] md:text-xl font-bold font-['Roboto'] leading-relaxed mb-6 text-[#fff] ">
                                Capital Square như những cánh buồm căng gió vươn mình trên dòng sông
                                Hàn, hòa quyện giữa nét cong mềm mại của dòng nước và ánh nắng rực
                                rỡ trên mặt kính sống động.
                            </p>

                            {/* Dòng tiêu đề nổi bật cam */}
                            <div className="text-[#F47920] text-[50px] font-bold leading-snug uppercase tracking-wide space-y-1">
                                THÔNG SỐ <br />
                                CÁC CĂN <br />
                                & MẶT BẰNG <br />
                                ĐIỂN HÌNH <br />
                                THUỘC DỰ ÁN <br />
                            </div>

                            {/* Button */}
                            <div className="mt-8 text-center justify-end">
                                <button className="bg-white text-center text-[#174a8b] border-1 border-red-500 rounded-full  px-6 py-2 text-sm font-medium hover:bg-[#f37021] hover:text-white transition">
                                    TÌM HIỂU THÊM
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* <Gallery />
            <CapitalSquareSection />
            <RegisterForm />
            <FloatingContactWidget /> */}
        </main>
    );
}
