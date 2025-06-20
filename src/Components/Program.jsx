import program_1 from "../assets/program-1.png";
import program_2 from "../assets/program-2.png";
import program_3 from "../assets/program-3.png";
import degree_1 from "../assets/program-icon-1.png";
import degree_3 from "../assets/program-icon-3.png";

const Program = () => {
  return (
    <div
      id="program"
      className="my-[80px] mx-auto w-[75%] flex items-center justify-between"
    >
      <div className="basis-[31%] relative">
        <img src={program_1} alt="" className="w-full rounded-[10px] block" />
        <div className="rounded-[10px] opacity-0 absolute top-0 left-0 bottom-0 right-0 bg-[#000F984D] flex items-center justify-center flex-col text-white cursor-pointer pt-[70%] hover:pt-[0] hover:opacity-[1] duration-[0.4s]">
          <img src={degree_1} alt="" className="w-[60px] mb-[10px]" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="basis-[31%] relative">
        <img src={program_2} alt="" className="w-full rounded-[10px] block" />
        <div className="rounded-[10px] opacity-0 absolute top-0 left-0 bottom-0 right-0 bg-[#000F984D] flex items-center justify-center flex-col text-white cursor-pointer pt-[70%] hover:pt-[0] hover:opacity-[1] duration-[0.4s]">
          <img src={degree_1} alt="" className="w-[60px] mb-[10px]" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="basis-[31%] relative">
        <img src={program_3} alt="" className="w-full rounded-[10px] block" />
        <div className="rounded-[10px] opacity-0 absolute top-0 left-0 bottom-0 right-0 bg-[#000F984D] flex items-center justify-center flex-col text-white cursor-pointer pt-[70%] hover:pt-[0] hover:opacity-[1] duration-[0.4s]">
          <img src={degree_3} alt="" className="w-[60px] mb-[10px]" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
