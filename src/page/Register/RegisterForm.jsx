"use client";

import { useState, useEffect } from "react";
import { ArrowRightAlt } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    options: [],
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkboxOptions = [
    "Penthouse",
    "Căn hộ 1PN",
    "Căn hộ 2PN",
    "Căn hộ 2PN + 1",
    "Căn hộ 3PN",
    "Nhu cầu khác",
  ];

  // Detect mobile/tablet
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 1024);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (option) => {
    const updatedOptions = form.options.includes(option)
      ? form.options.filter((o) => o !== option)
      : [...form.options, option];
    setForm({ ...form, options: updatedOptions });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Vui lòng nhập tên.";
    if (!form.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại.";
    if (!form.email.trim()) {
      newErrors.email = "Vui lòng nhập email.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email không hợp lệ.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const formAction =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf_JIH0okbwkpqHH14bSXv6SUPXPBKBKRBTlmIpL2qBvmi_4A/formResponse";

    const formData = new FormData();
    formData.append("entry.1082978465", form.name);
    formData.append("entry.1415555996", form.phone);
    formData.append("entry.2139884960", form.email);
    form.options.forEach((option) =>
      formData.append("entry.1424342332", option)
    );

    try {
      await fetch(formAction, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      if (isMobile) {
        setShowModal(true);
      } else {
        toast.success("🎉 Gửi thông tin thành công!", {
          position: "top-right", // ✅ dùng chuỗi
          autoClose: 3000,
          theme: "colored",
        });
      }

      setForm({ name: "", phone: "", email: "", options: [] });
    } catch (error) {
      toast.error("❌ Có lỗi xảy ra. Vui lòng thử lại.", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      },error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-16 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 uppercase mb-10">
          Để lại thông tin tư vấn
        </h2>

        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["name", "phone", "email"].map((field) => (
              <div key={field}>
                <label className="text-sm font-semibold text-red-500 capitalize">
                  {field === "name"
                    ? "Tên:"
                    : field === "phone"
                    ? "Số điện thoại:"
                    : "Email:"}
                </label>
                <input
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={
                    field === "name"
                      ? "Nguyễn Văn A"
                      : field === "phone"
                      ? "0123 456 xxx"
                      : "abc123@gmail.com"
                  }
                  className="w-full border-0 border-b border-orange-300 bg-transparent focus:outline-none focus:border-orange-500 text-sm py-2 placeholder-gray-500"
                />
                {errors[field] && (
                  <p className="text-xs text-red-500 mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Gợi ý */}
          <p className="text-sm text-gray-500 mt-4">
            Lựa chọn sản phẩm mà bạn đang quan tâm:
          </p>

          {/* Checkbox */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-800">
            {checkboxOptions.map((label, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={form.options.includes(label)}
                  onChange={() => handleCheckboxChange(label)}
                  className="accent-orange-500"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>

          {/* Hotline & Submit */}
          <div className="flex justify-between">
            <div className="mt-8">
              <a
                href="tel:0911296979"
                className="inline-flex items-center gap-1 sm:gap-2 px-4 py-2 sm:px-6 border border-orange-500 text-orange-500 rounded-full text-xs sm:text-sm hover:bg-orange-50 transition"
              >
                <span className="truncate max-w-[150px] text-orange-500  sm:max-w-none">
                  Hotline: (+84)911 296 979
                </span>
              </a>
            </div>
            <div className="mt-8 text-right">
              <button
                type="submit"
                disabled={submitting}
                className={`inline-flex items-center gap-2 px-6 py-2 border border-orange-500 text-orange-500 rounded-full text-sm hover:bg-orange-50 transition ${
                  submitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {submitting ? "Đang gửi..." : "Đăng ký"}
                <ArrowRightAlt />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Toast for desktop */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        className="!z-[9999] !top-4 !right-4"
      />

      {/* Modal for mobile/tablet */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold text-green-600 mb-2">
              🎉 Gửi thành công!
            </h3>
            <p className="text-sm text-gray-700">
              Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ trong thời gian sớm
              nhất.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
