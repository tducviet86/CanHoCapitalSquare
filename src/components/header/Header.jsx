function Header() {
    return (
        <header className="sticky top-0 left-0 w-full z-50">
            {/* Top bar with contact info */}
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

            {/* Main nav bar */}
            <div className="bg-white shadow-md py-4">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Left menu */}
                    <nav className="flex space-x-6 text-blue-900 font-semibold text-sm uppercase">
                        <a href="#">Giới thiệu</a>
                        <a href="#">Vị trí</a>
                        <a href="#">Tiện ích</a>
                        <a href="#">Mặt bằng</a>
                    </nav>

                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img
                            src="/logo.png" // <-- bạn có thể đổi sang logo thật sự
                            alt="Capital Square Logo"
                            className="h-6"
                        />
                    </a>

                    {/* Right menu */}
                    <nav className="flex space-x-6 text-blue-900 font-semibold text-sm uppercase">
                        <a href="#">Thư viện hình ảnh</a>
                        <a href="#">Điểm nổi bật</a>
                        <a href="#">Liên hệ</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header