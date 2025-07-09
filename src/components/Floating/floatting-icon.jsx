import { useEffect } from "react";

export default function FloatingContactWidget() {
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
    <div className="fixed bottom-4 right-2 z-40 flex flex-col items-center gap-3">
      {/* Nút đăng ký tư vấn (nằm dưới) */}
      <div>
        <a
          href="#contact"
          className="rounded-full border-2 border-orange-500 bg-white px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm font-medium text-blue-600 shadow-lg transition-all duration-300 hover:bg-orange-50 hover:shadow-xl"
        >
          Đăng ký nhận tư vấn
        </a>
      </div>
    </div>
  );
}
