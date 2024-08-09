
const CarCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg flex overflow-hidden">
      <img
        src="https://danangtravelcar.com.vn/wp-content/uploads/2020/08/thue-xe-16-cho-mercedes-sprinter-tu-lai-tai-da-nang-8-768x502.jpg"
        alt="Ford Explorer 2019"
        className="w-1/3 object-cover"
      />
      <div className="p-4 w-2/3">
        <h4 className="text-lg font-semibold mb-2">CAR 1</h4>
        <ul className="text-sm text-gray-600 mb-4">
          <li><span className="font-semibold">7 seats</span></li>
          <li><span className="font-semibold">Diesel/Dầu</span></li>
          <li><span className="font-semibold">auto number</span></li>
        </ul>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-red-600">1.900.000 VNĐ</span>
          <button className="bg-teal-500 text-white py-2 px-4 rounded">Rent</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
