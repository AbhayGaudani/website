import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 700 ? setNav(true) : setNav(false);
    });
  });
  return (
    <nav
      className={`flex pl-[10%] pr-[10%]  text-white top-0 left-0 w-full items-center justify-between py-[10px] px-0 fixed z-10 ${
        nav ? "dark-nav" : ""
      }`}
    >
      <img src={logo} alt="" className="w-[180px] cursor-pointer" />
      <ul className="font-Ancizar">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="inline-block my-[5px] mx-[20px] text-[16px] cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="program"
          smooth={true}
          duration={500}
          offset={-260}
          className="inline-block my-[5px] mx-[20px] text-[16px] cursor-pointer"
        >
          Program
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-150}
          className="inline-block my-[5px] mx-[20px] text-[16px] cursor-pointer"
        >
          About us
        </Link>
        <Link
          to="campus"
          smooth={true}
          duration={500}
          offset={-260}
          className="inline-block my-[5px] mx-[20px] text-[16px] cursor-pointer"
        >
          Campus
        </Link>
        <Link
          to="testimonial"
          smooth={true}
          duration={500}
          offset={-260}
          className="inline-block my-[5px] mx-[20px] text-[16px] cursor-pointer"
        >
          Testimonial
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="inline-block my-[5px] mx-[20px] text-[16px] cursor-pointer"
        >
          <button className="bg-white text-[#212121] py-[14px] px-[25px] text-[16px] rounded-[30px] cursor-pointer border-0 outline-0">
            Contact us
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
