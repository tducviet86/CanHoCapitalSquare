import { useState, useEffect } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Khóa cuộn khi mở menu mobile
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className="relative md:sticky md:top-0 w-full z-50 bg-white">
      {/* Top bar */}
      <div className="w-full bg-gray-100 text-sm text-gray-800 px-4 py-2">
        <div className="flex items-center justify-between whitespace-nowrap overflow-x-auto no-scrollbar text-xs sm:text-sm">
          {/* Số điện thoại */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <div className="flex items-center space-x-1">
              <span className="text-orange-500">📞</span>
              <span>0948 961 188 • 0986 532 308 • 0935 585 699</span>
            </div>
          </div>

          {/* Email */}
          <div className="hidden sm:flex items-center space-x-1 flex-shrink-0">
            <span className="text-orange-500">✉️</span>
            <span>sales@capitalsquare.vn</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-2 md:py-3 relative flex items-center justify-between">
          {/* Mobile Hamburger button */}
          <button
            className="md:hidden text-blue-900 text-2xl z-30"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          {/* Nav trái (desktop) */}
          <nav className="hidden md:flex space-x-6 text-blue-900 font-semibold text-base uppercase">
            <a href="#introduce">Giới thiệu</a>
            <a href="#location">Vị trí</a>
            <a href="#utilities">Tiện ích</a>
            <a href="#ground">Mặt bằng</a>
          </nav>
          {/* Logo giữa */}
          <a
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2 flex justify-center z-10"
          >
            <img
              src="https://capitalsquare.vn/images/logo.png"
              alt="Capital Square Logo"
              className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto max-w-[120px] sm:max-w-[140px] "
            />
          </a>
          {/* Nav phải (desktop) */}
          <nav className="hidden md:flex space-x-6 text-blue-900 font-semibold text-sm uppercase">
            <a href="#library-image">Thư viện hình ảnh</a>
            <a href="#highlights">Điểm nổi bật</a>
            <a href="#contact">Liên hệ</a>
          </nav>
        </div>

        {/* Mobile menu (slide down) */}
        <div
          className={`md:hidden bg-white px-6 pt-2  space-y-4 transition-all duration-300 overflow-hidden ${
            menuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col space-y-2 text-blue-900 font-semibold text-base uppercase">
            {["Giới thiệu", "Vị trí", "Tiện ích", "Mặt bằng"].map((text, i) => (
              <a
                key={i}
                href={`#${["introduce", "location", "utilities", "ground"][i]}`}
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1"
              >
                {text}
              </a>
            ))}
          </nav>
          <nav className="flex flex-col space-y-2 text-blue-900 font-semibold text-sm uppercase pt-4 border-t border-gray-200">
            {["Thư viện hình ảnh", "Điểm nổi bật", "Liên hệ"].map((text, i) => (
              <a
                key={i}
                href={`#${["library-image", "highlights", "contact"][i]}`}
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1"
              >
                {text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
