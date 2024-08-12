import car2 from "../../assets/car2.png";
import car from "../../assets/car.png";
import car1 from "../../assets/car1.png";
import car5 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: car1,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car,
    aosDelay: "1000",
  },{
    name: "BMW UX",
    price: 100,
    image: car1,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car5,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car6,
    aosDelay: "1000",
  }
];

const CarList = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {carList.map((data, index) => (
          <div
            key={index}
            className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
          >
            <div className="w-full h-[120px]">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-primary font-semibold">{data.name}</h1>
              <div className="flex justify-between items-center text-xl font-semibold">
                <p>${data.price}/Day</p>
                <button className="border border-yellow-400 text-black py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300">
                  Book now
                </button>
                <button className="border border-yellow-400 text-black py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300">
                  Details
                </button>
              </div>
            </div>
            <p className="text-xl font-semibold absolute top-0 left-3">12Km</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
