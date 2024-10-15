import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Trang chủ",
    link: "/#",
  },
  {
    title: "Giới thiệu",
    link: "/#about",
  },
  {
    title: "Liên hệ",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-200 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Thông tin công ty */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Thuê xe hơi
            </h1>
            <p className="text-sm">
              Chúng tôi cung cấp dịch vụ thuê xe uy tín và chất lượng. Với đội ngũ chuyên nghiệp và xe hiện đại, chúng tôi cam kết đem đến cho bạn trải nghiệm tốt nhất.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Đà Nẵng, Việt Nam</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+84 123456789</p>
            </div>
            {/* Mạng xã hội */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Liên kết */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-3">
                Liên kết quan trọng
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200"
                  >
                    <a href={link.link}>
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-3">
                Các liên kết khác
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200"
                  >
                    <a href={link.link}>
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-3">
                Địa chỉ
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200"
                  >
                    <a href={link.link}>
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
