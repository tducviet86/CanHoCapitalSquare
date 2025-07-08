import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";

export default function FloatingContactWidget() {
  return (
    <div className="fixed bottom-4 right-2 z-50 flex flex-col items-center gap-3">
      {/* Phone */}
      <div className="group">
        <button className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-blue-600 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <PhoneIcon
            sx={{ fontSize: { xs: 20, md: 26 } }}
            className="text-orange-400"
          />
        </button>
      </div>

      {/* Facebook */}
      <div className="group">
        <button className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-blue-600 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <FacebookIcon
            sx={{ fontSize: { xs: 20, md: 26 } }}
            className="text-white"
          />
        </button>
      </div>

      {/* YouTube */}
      <div className="group">
        <button className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-orange-500 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <YouTubeIcon
            sx={{ fontSize: { xs: 20, md: 26 } }}
            className="text-white"
          />
        </button>
      </div>

      {/* LinkedIn */}
      <div className="group">
        <button className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-orange-500 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <LinkedInIcon
            sx={{ fontSize: { xs: 20, md: 26 } }}
            className="text-white"
          />
        </button>
      </div>

      {/* Download */}
      <div className="group">
        <button className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <DownloadIcon
            sx={{ fontSize: { xs: 20, md: 26 } }}
            className="text-orange-500"
          />
        </button>
      </div>

      {/* CTA Button */}
      <div className="mt-2">
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
