import CarPng from "../assets/car1.png";
const About = () => {
  return (
    <div>
      <div className="sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div data-aos="slide-right" data-aos-duration="1500">
              <img
                src={CarPng}
                alt="Xe hơi"
                className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
              />
            </div>
            <div>
              <div className="space-y-5 sm:p-16 pb-6">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-serif"
                >
                  Về chúng tôi
                </h1>
                <p data-aos="fade-up" className="leading-8 tracking-wide">
                  Chúng tôi cung cấp dịch vụ cho thuê xe tốt nhất, đáp ứng nhu cầu đa dạng của khách hàng. Với đội ngũ tài xế giàu kinh nghiệm và hệ thống xe hiện đại, bạn sẽ có những chuyến đi thoải mái và an toàn.
                </p>
                <p data-aos="fade-up">
                  Tận hưởng sự tiện lợi và linh hoạt khi thuê xe với các gói thuê theo ngày, tuần hoặc tháng. Đặt xe dễ dàng chỉ trong vài phút.
                </p>
                <button
                  data-aos="fade-up"
                  data-aos-delay="1500"
                  className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
                >
                  Bắt đầu ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
