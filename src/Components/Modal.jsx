import g1 from "../assets/gallery1.jpg";
import g2 from "../assets/gallery2.jpg";
import g3 from "../assets/gallery3.jpg";
import g4 from "../assets/gallery4.jpg";
import g5 from "../assets/gallery5.jpg";
import g6 from "../assets/gallery6.jpg";
import closeBtn from "../assets/closeButton.svg";

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="text-black mt-5 relative top-0 right-0 left-0 bottom-0">
      <div className="min-w-[500px] min-h-[630px] bg-white shadow-2xl inset-shadow-2xl border-gray-600 mt-[-53%] animate-[fadeInDown_0.5s] rounded-[10px]">
        <h1 className="text-2xl bottom-[-40px] relative text-[32px] text-[#000F38] mt-[5px] normal-case font-semibold">
          More Photos
        </h1>
        <img
          src={closeBtn}
          alt=""
          className=" relative right-[-96%] h-8 bottom-[-15px] cursor-pointer"
          onClick={onClose}
        />
        <div className=" grid grid-cols-3 pt-[30px] pl-[22px]">
          <img src={g1} alt="" className="w-[350px] h-[250px]" />
          <img src={g2} alt="" className="w-[350px] h-[250px]" />
          <img src={g3} alt="" className="w-[350px] h-[250px]" />
          <img src={g4} alt="" className="w-[350px] h-[250px] mt-[22px]" />
          <img src={g5} alt="" className="w-[350px] h-[250px] mt-[22px]" />
          <img src={g6} alt="" className="w-[350px] h-[250px] mt-[22px]" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
