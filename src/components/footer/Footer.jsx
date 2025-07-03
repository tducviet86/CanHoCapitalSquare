function Footer() {
    return (
      <footer className="bg-[#002E6D] text-white text-sm relative">
        {/* Main section */}
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-orange-500">
          {/* Logo + Address */}
          <div className="space-y-4">
            <img
              src="/logo.png" // Thay logo chính xác tại đây
              alt="Capital Square"
              className="h-6"
            />
            <div className="flex items-start gap-2">
              <span>📍</span>
              <p>Phường An Hải, Thành phố Đà Nẵng</p>
            </div>
            <div className="flex items-start gap-2">
              <span>✉️</span>
              <p>sales@capitalsquare.vn</p>
            </div>
          </div>
  
          {/* Column: Tài liệu */}
          <div>
            <h3 className="font-semibold mb-2">Tải tài liệu dự án</h3>
          </div>
  
          {/* Column: Thông tin */}
          <div>
            <h3 className="font-semibold mb-2 border-l-4 border-orange-500 pl-2">Tiến độ dự án</h3>
            <ul className="space-y-1">
              <li>Chính sách bán hàng</li>
              <li>Thông tin chủ đầu tư</li>
              <li>Thông tin về dự án</li>
            </ul>
          </div>
  
          {/* Column: Đối tác */}
          <div className="space-y-2">
            <div>
              <span className="text-gray-400">Contractor:</span>
              <img
                src="/coteccons.png" // Thay logo Coteccons tại đây
                alt="Coteccons"
                className="h-6 mt-1"
              />
            </div>
            <div>
              <span className="text-gray-400">Developer</span>
              <div className="mt-1">
                <img
                  src="/logo.png"
                  alt="Capital Square"
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </div>
  
        {/* Copyright + social */}
        <div className="bg-orange-500 text-white text-center py-3 text-xs">
          Copyright©2025. Capital Square. All rights reserved.
        </div>
  
      </footer>
    )
  }
  
  export default Footer;