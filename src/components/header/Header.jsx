function Header() {
    return (
        <header className="sticky top-0 left-0 w-full z-50">
            <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 flex justify-between items-center">
                <div className="flex space-x-6 items-center">
                    <div className="flex items-center space-x-1">
                        <span className="text-orange-500">📞</span>
                        <span>0948 961 188</span>
                    </div>
                    <div>0986 532 308</div>
                    <div>0935 585 699</div>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="text-orange-500">✉️</span>
                    <span>sales@capitalsquare.vn</span>
                </div>
            </div>

            <div className="bg-white shadow-md py-5">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <nav className="flex space-x-6 text-blue-900 font-semibold text-base uppercase">
                        <a href="#introduce">Giới thiệu</a>
                        <a href="#location">Vị trí</a>
                        <a href="#utilities">Tiện ích</a>
                        <a href="#ground">Mặt bằng</a>
                    </nav>

                    <a href="/" className="flex items-center">
                        <img
                            src="https://capitalsquare.vn/images/logo.png" 
                            alt="Capital Square Logo"
                            className="h-6"
                        />
                    </a>

                    <nav className="flex space-x-6 text-blue-900 font-semibold text-sm uppercase">
                        <a href="#library-image">Thư viện hình ảnh</a>
                        <a href="#highlights">Điểm nổi bật</a>
                        <a href="#contact">Liên hệ</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header