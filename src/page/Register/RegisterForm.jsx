import { useState } from "react";
import { ArrowRightAlt } from "@mui/icons-material";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    options: [],
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const checkboxOptions = [
    "Penthouse",
    "Căn hộ 1PN",
    "Căn hộ 2PN",
    "Căn hộ 2PN + 1",
    "Căn hộ 3PN",
    "Nhu cầu khác",
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formAction =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeo3SyNxL2JcoKYnVtdOajIfLfbFszW2C0YJRg5F1rW5Nk7rg/formResponse";

    const formData = new FormData();
    formData.append("entry.1730460443", form.name);
    formData.append("entry.255004664", form.phone);
    formData.append("entry.764417699", form.email);

    form.options.forEach((option) => {
      formData.append("entry.880524670", option); // Gửi từng checkbox
    });

    fetch(formAction, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        alert("🎉 Gửi thông tin thành công!");
        setForm({ name: "", phone: "", email: "", options: [] });
      })
      .catch(() => {
        alert("❌ Có lỗi xảy ra.");
      });
  };

  return (
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 uppercase mb-10">
          Để lại thông tin tư vấn
        </h2>

        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Họ tên */}
            <div>
              <label className="text-sm font-semibold text-red-500">Tên:</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Nguyễn Văn A"
                className="w-full border-0 border-b border-orange-300 bg-transparent focus:outline-none focus:border-orange-500 text-sm py-1 placeholder-gray-500"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Số điện thoại */}
            <div>
              <label className="text-sm font-semibold text-red-500">
                Số điện thoại:
              </label>
              <input
                name="phone"
                type="text"
                value={form.phone}
                onChange={handleChange}
                placeholder="0123 888 xxx"
                className="w-full border-0 border-b border-orange-300 bg-transparent focus:outline-none focus:border-orange-500 text-sm py-1 placeholder-gray-500"
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-red-500">
                Email:
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="abc123@gmail.com"
                className="w-full border-0 border-b border-orange-300 bg-transparent focus:outline-none focus:border-orange-500 text-sm py-1 placeholder-gray-500"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Gợi ý */}
          <p className="text-sm text-gray-500 mt-4">
            Lựa chọn sản phẩm mà bạn đang quan tâm:
          </p>

          {/* Checkboxes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-800">
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

          {/* Nút gửi */}
          <div className="mt-8 text-right">
            <button
              type="submit"
              disabled={submitting}
              className={`inline-flex items-center gap-2 px-6 py-2 border border-orange-500 text-orange-500 rounded-full text-sm hover:bg-orange-50 transition ${
                submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ArrowRightAlt />
              {submitting ? "Đang gửi..." : "Đăng ký"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
