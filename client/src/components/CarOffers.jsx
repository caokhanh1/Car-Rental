import { FiSettings, FiCalendar } from "react-icons/fi";
import "./CustomButton.css";

const carOffers = [
  {
    name: "Toyota Alphard",
    price: "$50.00",
    image:
      "http://gauto-react.themescare.com/static/media/offer-toyota.4b2435e447a7832d9f4a.png",
    model: "2017",
    type: "Automatic",
    mileage: "20kmpl",
  },
  {
    name: "Nissan 370Z",
    price: "$75.00",
    image:
      "http://gauto-react.themescare.com/static/media/nissan-offer.6eddc86310b7cac538ae.png",
    model: "2017",
    type: "Automatic",
    mileage: "20kmpl",
  },
  {
    name: "Audi Q3",
    price: "$45.00",
    image:
      "http://gauto-react.themescare.com/static/media/audi-offer.759d5ba7e086ea80e414.png",
    model: "2017",
    type: "Automatic",
    mileage: "20kmpl",
    },
    {
        name: "Toyota Alphard",
        price: "$50.00",
        image:
          "http://gauto-react.themescare.com/static/media/offer-toyota.4b2435e447a7832d9f4a.png",
        model: "2017",
        type: "Automatic",
        mileage: "20kmpl",
      },
      {
        name: "Nissan 370Z",
        price: "$75.00",
        image:
          "http://gauto-react.themescare.com/static/media/nissan-offer.6eddc86310b7cac538ae.png",
        model: "2017",
        type: "Automatic",
        mileage: "20kmpl",
      },
      {
        name: "Audi Q3",
        price: "$45.00",
        image:
          "http://gauto-react.themescare.com/static/media/audi-offer.759d5ba7e086ea80e414.png",
        model: "2017",
        type: "Automatic",
        mileage: "20kmpl",
      },
];

function CarOffers() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
          <div>
            <span className="text-slate-500">Come With</span>
          </div>
          <div>
            <span className="">Hot Offers</span>
          </div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carOffers.map((car, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-center text-gray-800">
                  {car.name}
                </h3>
                <p className="text-center text-xl font-bold text-gray-800 mt-2">
                  {car.price} <span className="text-red-500">/ Day</span>
                </p>
                <div className="flex justify-center mt-2 space-x-2 text-gray-500">
                  <span className="flex items-center text-sm">
                    <FiCalendar className="mr-1" />
                    Model: {car.model}
                  </span>
                  <span className="flex items-center text-sm">
                    <FiSettings className="mr-1" />
                    {car.type}
                  </span>
                  <span className="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 3.172a4 4 0 015.656 0l.586.586.586-.586a4 4 0 015.656 0 4 4 0 010 5.656l-.586.586-5.656 5.656a2 2 0 01-2.828 0L3.172 8.828a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {car.mileage}
                  </span>
                </div>
                <div className="flex justify-around mt-4">
                  <button className="relative inline-flex items-center px-6 py-2 bg-black text-white font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 transition ease-in-out duration-150 custom-button ">
                    Rent Car
                  </button>
                  <button className="relative inline-flex items-center px-6 py-2 bg-red-500 text-white font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition ease-in-out duration-150 custom-button">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarOffers;
