import { useState } from "react";
import { useNavigate } from "react-router-dom";
import car1 from "../../assets/car1.png";
import "flowbite";

const BookingPage = () => {
  const [rentalType, setRentalType] = useState("self-drive");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [isAgreed, setIsAgreed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Tính toán giá
  const calculatePrice = () => {
    const rentPerDay = rentalType === "self-drive" ? 500000 : 700000;
    let days =
      (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) + 1;

    if (days < 1) days = 1;
    let price = rentPerDay * days;
    const calculatedDeposit = price * 0.3;

    setTotalPrice(price);
    setDeposit(calculatedDeposit);
  };

  // Xử lý đặt xe
  const handleBooking = () => {
    // Kiểm tra điều kiện trước khi tính toán giá
    if (!isAgreed) {
      setErrorMessage("*Bạn cần phải đồng ý với điều khoản trước khi đặt xe.");
      return;
    }
    
    if (!startDate || !endDate) {
      setErrorMessage("*Vui lòng nhập cả ngày nhận và trả xe.");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      setErrorMessage("*Ngày trả xe phải sau ngày nhận xe.");
      return;
    }

    // Tính toán giá trước khi chuyển đến trang thanh toán
    calculatePrice(); 
    navigate("/payment", {
      state: {
        totalPrice,
        deposit,
        startDate,
        endDate,
        rentalType,
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 mt-10 space-y-12">
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        <div className="flex-1">
          <img
            src={car1}
            alt="Car"
            className="w-full h-auto rounded-xl shadow-lg transition-transform hover:scale-105 duration-300"
          />
        </div>

        <div className="bg-white p-8 rounded-xl shadow-xl flex-1 lg:max-w-sm border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Thuê</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Họ tên
              </label>
              <input
                type="text"
                placeholder="Nhập tên của bạn ở đây"
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Địa chỉ
              </label>
              <input
                type="text"
                placeholder="Nhập địa chỉ của bạn ở đây"
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Ngày nhận xe
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Ngày trả xe
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Loại hình thuê
              </label>
              <select
                value={rentalType}
                onChange={(e) => setRentalType(e.target.value)}
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="self-drive">Tự lái</option>
                <option value="with-driver">Có tài xế</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleBooking}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg shadow-md hover:from-yellow-600 hover:to-yellow-700 transition-colors duration-300 mt-4"
            >
              Đặt ngay
            </button>

            {errorMessage && <span className="text-red-600">{errorMessage}</span>}
            
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={() => setIsAgreed(!isAgreed)}
                className="mr-2"
              />
              <span>
                Tôi đã đọc và đồng ý với{" "}
                <a
                  href="/contract" 
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  các điều khoản
                </a>
              </span>
            </div>
            <span className="text-red-600">
              * Vui lòng đọc kĩ điều khoản trước khi thanh toán
            </span>
          </form>
        </div>
      </div>
      {/* Vehicle Overview */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Tổng quan xe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">Thân xe</p>
            <h3 className="text-lg font-semibold">BMW X3</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">Hãng xe</p>
            <h3 className="text-lg font-semibold">Nissan</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">Hộp số</p>
            <h3 className="text-lg font-semibold">Tự động</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">Loại động cơ</p>
            <h3 className="text-lg font-semibold">Xăng</h3>
          </div>
        </div>
      </div>
      {/* Price Details */}
      <div className="border-t border-gray-300 pt-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Chi tiết giá cả</h2>
        <ul className="space-y-3 text-lg">
          <li>Giá thuê/ngày: <span className="font-semibold">500,000 VND (Tự lái) - 700,000 VND (Có tài xế)</span></li>
          <li>Giá thuê/tháng: <span className="font-semibold">Giảm 30% cho thuê theo tháng</span></li>
          <li>Tiền đặt cọc: <span className="font-semibold">30% tổng giá thuê</span></li>
        </ul>
      </div>

      {/* Terms of Use */}
      <div className="border-t border-gray-300 pt-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Điều khoản sử dụng</h2>
        <p className="text-lg text-gray-600">
          Bằng việc tiếp tục đặt xe, bạn đồng ý với các điều khoản và điều kiện của chúng tôi.
        </p>
      </div>
    </div>
  );
};

export default BookingPage;
