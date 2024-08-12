const RentalForm = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-dark rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4 ">DO YOU NEED TO RENT A CAR IN DA NANG?</h3>
      <select className="w-full mb-4 p-2 border border-gray-300 dark:border-gray-700 rounded">
        <option value="">Select location</option>
        <option value="airport">Da Nang Airport</option>
        <option value="city_center">Da Nang City Center</option>
        <option value="beach">Da Nang Beach Area</option>
      </select>
      <input
        type="datetime-local"
        className="w-full mb-4 p-2 border border-gray-300 dark:border-gray-700 rounded"
      />
      <button data-aos="fade-up"
                data-aos-delay="1500"
                className="w-full rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black" >
        Find a car
      </button>
    </div>
  );
};

export default RentalForm;
