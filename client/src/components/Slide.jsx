export default function Slide() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <main className="relative w-full h-screen">
        <img
          src="https://gauto-react.themescare.com/static/media/slider-2.4cd97469474175a97a63.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h1 className="text-slate-500 font-bold text-3xl lg:text-6xl">
            Find your <span className="text-slate-500">perfect car </span>
            <br />
            for you easily
          </h1>
          <button className="custom-button mt-4">RESERVE NOW!</button>
        </div>
      </main>
    </div>
  );
}
{
  /* <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
       
<h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
  Find your <span className="text-slate-500">perfect car </span>
  <br />
  for you easily
</h1>
<button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mt-4">
  RESERVE NOW!
</button>

</div> */
}
