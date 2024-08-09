

const RentalForm = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">DO YOU NEED TO RENT A CAR IN DA NANG?</h3>
      <div className="flex justify-between mb-4">
        <button className="w-1/2 bg-teal-500 text-white py-2 rounded-l-lg">Self-driving</button>
        <button className="w-1/2 bg-white border border-teal-500 text-teal-500 py-2 rounded-r-lg">With driver</button>
      </div>
      <select className="w-full mb-4 p-2 border border-gray-300 rounded">
        <option value="">Select number of seats</option>
        <option value="5">5 seats</option>
        <option value="7">7 seats </option>
        <option value="16">16 seats</option>
      </select>
      <input
        type="datetime-local"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <button className="w-full bg-teal-500 text-white py-2 rounded">
      Find a car
      </button>
    </div>
  );
};

export default RentalForm;
