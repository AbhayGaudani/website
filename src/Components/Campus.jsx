import { useState } from "react";
import gallery_1 from "../assets/gallery-1.png";
import gallery_2 from "../assets/gallery-2.png";
import gallery_3 from "../assets/gallery-3.png";
import gallery_4 from "../assets/gallery-4.png";
import white_arraw from "../assets/white-arrow.png";
import Modal from "../Components/Modal";

const Campus = () => {
  const [show, setShow] = useState(false);
  return (
    <div id="campus" className="my-[80px] mx-auto w-[75%] text-center">
      <div className="flex items-center justify-between mt-10">
        <img src={gallery_1} alt="" className="w-[23%] rounded-[10px]" />
        <img src={gallery_3} alt="" className="w-[23%] rounded-[10px]" />
        <img src={gallery_4} alt="" className="w-[23%] rounded-[10px]" />
        <img src={gallery_2} alt="" className="w-[23%] rounded-[10px]" />
      </div>
      <button
        onClick={() => setShow(true)}
        className="bg-[#212EA0] text-white py-[14px] px-[25px] text-[16px] rounded-[30px] cursor-pointer border-0 outline-0 top-[20px] relative items-center"
      >
        See more here{" "}
        <img
          src={white_arraw}
          alt=""
          className="w-[20px] h-[16px] mx-1 inline-flex"
        />
      </button>
      <Modal show={show} onClose={() => setShow(false)}></Modal>
    </div>
  );
};
export default Campus;
