import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-50">
      {/* Top bar */}
      <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2
                      flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 items-center w-full md:w-auto">
          <div className="flex items-center space-x-1">
            <span className="text-orange-500">📞</span>
            <span>0948 961 188</span>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 mt-2 md:mt-0">
            <div>0986 532 308</div>
            <div>0935 585 699</div>
          </div>
        </div>
        <div className="flex items-center space-x-1 mt-2 md:mt-0">
          <span className="text-orange-500">✉️</span>
          <span>sales@capitalsquare.vn</span>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Hamburger button chỉ hiển thị trên <md */}
          <button
            className="md:hidden text-blue-900 text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Nav chính – ẩn trên mobile, hiện từ md trở lên */}
          <nav className="hidden md:flex space-x-6 text-blue-900 font-semibold text-base uppercase">
            <a href="#introduce">Giới thiệu</a>
            <a href="#location">Vị trí</a>
            <a href="#utilities">Tiện ích</a>
            <a href="#ground">Mặt bằng</a>
          </nav>

          {/* Logo luôn hiện */}
          <a href="/" className="flex-shrink-0">
            <img
              src="https://capitalsquare.vn/images/logo.png"
              alt="Capital Square Logo"
              className="h-8"
            />
          </a>

          {/* Nav phụ – ẩn trên mobile, hiện từ md trở lên */}
          <nav className="hidden md:flex space-x-6 text-blue-900 font-semibold text-sm uppercase">
            <a href="#library-image">Thư viện hình ảnh</a>
            <a href="#highlights">Điểm nổi bật</a>
            <a href="#contact">Liên hệ</a>
          </nav>
        </div>

        {/* Mobile menu – chỉ hiện khi nhấn nút */}
        {menuOpen && (
          <div className="md:hidden bg-white px-6 pb-4 space-y-4">
            <nav className="flex flex-col space-y-2 text-blue-900 font-semibold text-base uppercase">
              <a
                href="#introduce"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1"
              >
                Giới thiệu
              </a>
              <a
                href="#location"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1"
              >
                Vị trí
              </a>
              <a
                href="#utilities"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1"
              >
                Tiện ích
              </a>
              <a
                href="#ground"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1"
              >
                Mặt bằng
              </a>
            </nav>
            <nav className="flex flex-col space-y-2 text-blue-900 font-semibold text-sm uppercase pt-4 border-t border-gray-200">
              <a
                href="#library-image"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1"
              >
                Thư viện hình ảnh
              </a>
              <a
                href="#highlights"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1"
              >
                Điểm nổi bật
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1"
              >
                Liên hệ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
