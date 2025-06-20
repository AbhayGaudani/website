import about_img from "../assets/about.png";
import play_icon from "../assets/play-icon.png";

const About = () => {
  return (
    <div
      id="about"
      className="my-[100px] mx-auto w-[75%] flex items-center justify-between"
    >
      {/* left-side */}
      <div className="basis-[40%] relative">
        <img src={about_img} alt="" className="w-full rounded-[10px] " />
        <img
          src={play_icon}
          alt=""
          className="absolute w-[60px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
      {/* right-side */}
      <div className="basis-[55%] my-[-50px]">
        <h3 className="text-4 text-[#212EA0] font-bold">ABOUT UNIVERSITY</h3>
        <h2 className="font-Ancizar text-[35px] text-[#000F38] my-2.5 mx-0 max-w-[400px] font-bold">
          Nurturing Tomorrow's Leaders Today
        </h2>
        <p className="text-[#676767] mb-[15px]">
          Embark on a tranformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculm is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p className="text-[#676767] mb-[15px]">
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classroom, schools's, and communities.
        </p>
        <p className="text-[#676767] mb-[15px]">
          Whether you aspire to become a teacher, adinistrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potensial in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
