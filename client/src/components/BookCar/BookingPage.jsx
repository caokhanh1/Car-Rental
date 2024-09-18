import car1 from "../../assets/car1.png";
import car5 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";
const BookingPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 mt-10">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex-1">
          <img src={car1} alt="Car" className="w-full h-auto rounded-lg mb-4" />
          
        </div>

        {/* Booking Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 lg:max-w-sm mt-8 lg:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Book Now</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Write Your Name Here"
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="email"
                placeholder="Write Your Address Here"
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Pick-up Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Returning Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
         
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea
                placeholder="Write Your Message Here"
                className="w-full border border-gray-300 p-2 rounded-lg"
              ></textarea>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-lg">
              Book
            </button>
          </form>
        </div>
      </div>

      {/* Vehicle Overview */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Vehicle Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Body</p>
            <h3 className="text-lg font-semibold">BMW X3</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Make</p>
            <h3 className="text-lg font-semibold">Nissan</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Transmission</p>
            <h3 className="text-lg font-semibold">Automatic</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Fuel Type</p>
            <h3 className="text-lg font-semibold">Diesel</h3>
          </div>
          {/* Add more vehicle details as needed */}
        </div>
      </div>

      {/* Price Details */}
      <div className="mt-10 border-t border-gray-300">
        <h2 className="text-2xl font-semibold mb-4 mt-10">Price Details</h2>
        <ul className="space-y-2">
          <li>Rent/Day: $300 (Negotiable)</li>
          <li>Rent/Month: $3000 (Negotiable)</li>
          <li>Service Charge: $50 (Service providing)</li>
          <li>Extra Service: As per Service Taken</li>
          <li>Security Deposit: $3000</li>
        </ul>
      </div>
      <div className="mt-10 border-t border-gray-300">
        <h2 className="text-2xl font-semibold italic mb-4 mt-10">
          Terms of Use
        </h2>
        <p className="text-gray-700">
          Quy định khác: - Sử dụng xe đúng mục đích. - Không sử dụng xe thuê vào
          mục đích phi pháp, trái pháp luật. - Không sử dụng xe thuê để cầm cố,
          thế chấp. - Không hút thuốc, nhả kẹo cao su, xả rác trong xe. - Không
          chở hàng quốc cấm dễ cháy nổ. - Không chở hoa quả, thực phẩm nặng mùi
          trong xe. - Khi trả xe, nếu xe bẩn hoặc có mùi trong xe, khách hàng
          vui lòng vệ sinh xe sạch sẽ hoặc gửi phụ thu phí vệ sinh xe. - Xe được
          giới hạn di chuyển ở mức 400km cho 24h, và lần lượt là 250km, 300km,
          350 km cho gói 4h, 8h, 12h. Trân trọng cảm ơn, chúc quý khách hàng có
          những chuyến đi tuyệt vời !
        </p>
      </div>
    </div>
  );
};

export default BookingPage;
