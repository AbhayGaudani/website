import next_icon from "../assets/next-icon.png";
import back_icon from "../assets/back-icon.png";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";
import user4 from "../assets/user-4.png";
import { use, useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%`;
  };

  return (
    <div id="testimonial" className="my-20 mx-auto py-0 px-20 relative w-[85%]">
      <img
        src={next_icon}
        alt=""
        className="absolute top-[50%] right-0 translate-y-[-50%] p-[15px] w-[50px] rounded-[50%] cursor-pointer bg-[#212EA0]"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt=""
        className="absolute top-[50%] left-0 right-auto translate-y-[-50%] p-[15px] w-[50px] rounded-[50%] cursor-pointer bg-[#212EA0]"
        onClick={slideBackward}
      />
      {/* slider */}
      <div className=" overflow-hidden">
        <ul
          className="flex w-[200%] overflow-hidden transition-all duration-500"
          ref={slider}
        >
          <li className=" w-[50%] p-5 list-none">
            {/* slide */}
            <div className="p-10 rounded-[10px] text-[#676767] leading-[1.4] shadow-lg shadow-black/8">
              {/* user-info */}
              <div className="flex items-center mb-[20px] text-[15px]">
                <img
                  src={user1}
                  alt=""
                  className="rounded-[50%] w-[65px] mr-[10px] border-[4px] border-solid border-[#212EA0] "
                />
                <div>
                  <h3 className="text-[#212EA0]">William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p className="text-[14px]">
                Choosing to pursue my degree at Edusity was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly ec=xceeded my expectations.
              </p>
            </div>
          </li>
          <li className=" w-[50%] p-5 list-none">
            {/* slide */}
            <div className="p-10 rounded-[10px] text-[#676767] leading-[1.4] shadow-lg shadow-black/8">
              {/* user-info */}
              <div className="flex items-center mb-[20px] text-[15px]">
                <img
                  src={user2}
                  alt=""
                  className="rounded-[50%] w-[65px] mr-[10px] border-[4px] border-solid border-[#212EA0] "
                />
                <div>
                  <h3 className="text-[#212EA0]">William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p className="text-[14px]">
                Choosing to pursue my degree at Edusity was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly ec=xceeded my expectations.
              </p>
            </div>
          </li>
          <li className=" w-[50%] p-5 list-none">
            {/* slide */}
            <div className="p-10 rounded-[10px] text-[#676767] leading-[1.4] shadow-lg shadow-black/8">
              {/* user-info */}
              <div className="flex items-center mb-[20px] text-[15px]">
                <img
                  src={user3}
                  alt=""
                  className="rounded-[50%] w-[65px] mr-[10px] border-[4px] border-solid border-[#212EA0] "
                />
                <div>
                  <h3 className="text-[#212EA0]">William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p className="text-[14px]">
                Choosing to pursue my degree at Edusity was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly ec=xceeded my expectations.
              </p>
            </div>
          </li>
          <li className=" w-[50%] p-5 list-none">
            {/* slide */}
            <div className="p-10 rounded-[10px] text-[#676767] leading-[1.4] shadow-lg shadow-black/8">
              {/* user-info */}
              <div className="flex items-center mb-[20px] text-[15px]">
                <img
                  src={user4}
                  alt=""
                  className="rounded-[50%] w-[65px] mr-[10px] border-[4px] border-solid border-[#212EA0] "
                />
                <div>
                  <h3 className="text-[#212EA0]">William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p className="text-[14px]">
                Choosing to pursue my degree at Edusity was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly ec=xceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
