import { useState, useEffect } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import dvIcon from "../../../src/assets/images/dv.png";
import logoIcon from "../../../src/assets/images/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className="relative lg:sticky lg:top-0 w-full z-50 bg-white">
      {/* Top bar */}
      <div className="w-full bg-gray-100 text-sm text-gray-800 px-4 py-2">
        <div className="flex items-center justify-between whitespace-  overflow-x-auto no-scrollbar text-xs sm:text-sm">
          <div className="flex items-center space-x-4 flex-shrink-0">
            <div className="flex items-center space-x-1">
              <span className="text-orange-500 text-base sm:text-lg md:text-base lg:text-base"> <LocalPhoneIcon/> 0911 296 979 </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-1 flex-shrink-0">
            <span className="text-orange-500 text-base ">✉️ canhocapitalsquare102@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-2 lg:py-3 relative flex items-center justify-between">
          <button
            className="lg:hidden text-blue-900 text-2xl z-30"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Left nav for Desktop only */}
          <nav className="hidden lg:flex space-x-6 text-blue-900 font-semibold text-base uppercase font-['Roboto']">
            <a href="#introduce" className="hover:!text-[#F47920]">
              Giới thiệu
            </a>
            <a href="#location" className="hover:!text-[#F47920]">
              Vị trí
            </a>
            <a href="#utilities" className="hover:!text-[#F47920]">
              Tiện ích
            </a>
            <a href="#ground" className="hover:!text-[#F47920]">
              Mặt bằng
            </a>
          </nav>

          
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4 z-10">
            <a href="/">
              <img
                src={logoIcon}
                alt="Capital Square Logo"
                className="h-6 sm:h-10 md:h-12 lg:h-8 w-auto max-w-[150px] sm:max-w-[180px]"
              />
            </a>
            <a href="/">
              <img
                src={dvIcon}
                alt="DV Icon"
                className="h-8 sm:h-10 md:h-12 lg:h-12 w-auto max-w-[60px] sm:max-w-[70px]"
              />
            </a>
          </div>

          {/* Right nav for Desktop only */}
          <nav className="hidden lg:flex space-x-6 text-blue-900 font-semibold text-sm uppercase font-['Roboto']">
            <a href="#library-image" className="hover:!text-[#F47920]">
              Thư viện hình ảnh
            </a>
            <a href="#highlights" className="hover:!text-[#F47920]">
              Điểm nổi bật
            </a>
            <a href="#contact" className="hover:!text-[#F47920]">
              Liên hệ
            </a>
          </nav>
        </div>

        {/* Mobile & Tablet dropdown menu */}
        <div
          className={`lg:hidden bg-white px-6 pt-2 space-y-4 transition-all duration-300 overflow-hidden ${
            menuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col space-y-2 text-blue-900 font-semibold text-base uppercase font-['Roboto'">
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
          <nav className="flex flex-col space-y-2 text-blue-900 font-semibold text-base uppercase pt-4 border-t border-gray-200 font-['Roboto'">
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
