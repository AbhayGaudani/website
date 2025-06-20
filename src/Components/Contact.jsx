import msg_icon from "../assets/msg-icon.png";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";
import white_arrow from "../assets/white-arrow.png";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    axios
      .post("http://localhost:3001/data", { name, number, message })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div
      id="contact"
      className="my-[50px] mx-auto w-[75%] items-center flex justify-between"
    >
      <div className="basis-[48%] text-[#676767] mt-[-100px]">
        <h3 className=" font-bold text-[000F38] text-[25px] flex items-center mb-5">
          Send us a message{" "}
          <img src={msg_icon} alt="" className="w-[35px] ml-2.5" />
        </h3>
        <p className="max-w-[450px] list-[0.3]">
          Feel free to reach out through contact form or find or find our
          contact information below. Your frrdback, questions, and suggestions
          are important to us we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li className="flex items-center my-[20px] mx-0">
            <img src={mail_icon} alt="" className="w-[25px] mr-2.5" />{" "}
            Contact@AbhayG.com
          </li>
          <li className="flex items-center my-[20px] mx-0">
            <img src={phone_icon} alt="" className="w-[25px] mr-2.5" />
            +1 123-456-789
          </li>
          <li className="flex items-center my-[20px] mx-0">
            <img src={location_icon} alt="" className="w-[25px] mr-2.5" /> 77
            Massachusetts Ave, Cambridge
            <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      {/* contact-col */}
      <div className="w-[50%]">
        <form onSubmit={handleSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
            className="block w-full bg-[#EBECFE] p-[15px] border-0 outline-0 mb-[15px] mt-[5px] resize-none"
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
            onChange={(e) => setNumber(e.target.value)}
            className="block w-full bg-[#EBECFE] p-[15px] border-0 outline-0 mb-[15px] mt-[5px] resize-none"
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full bg-[#EBECFE] p-[15px] border-0 outline-0 mb-[15px] mt-[5px] resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#212EA0] text-white py-[14px] px-[25px] text-[16px] rounded-[30px] cursor-pointer border-0 outline-0 top-[20px] relative items-center"
          >
            Submit now{" "}
            <img
              src={white_arrow}
              alt=""
              className="w-[20px] h-[16px] mx-1 inline-flex"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
