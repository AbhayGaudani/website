import dark_arrow from "../assets/dark-arrow.png";
const Home = () => {
  return (
    <div
      id="home"
      className=" w-full min-h-screen text-white bg-cover bg-center justify-center items-center flex"
      style={{ backgroundImage: "url('/src/assets/hero.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#08003A] to-[#08003A] opacity-70"></div>
      <div className="pl-[10%] pr-[10%] text-center z-3 max-w-[1000px] font-Ancizar justify-center">
        <h1 className="text-[60px] font-bold">
          We Ensure better eduction for a better world
        </h1>
        <p className="max-w-[700px] m-[10px auto 20px] leading-1.3">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="bg-white text-[#212121] py-[14px] px-[25px] text-[16px] rounded-[30px] cursor-pointer border-0 outline-0 top-[20px] relative items-center">
          Explore more
          <img
            src={dark_arrow}
            alt=""
            className="w-[20px] h-[16px] mx-1 inline-flex "
          />
        </button>
      </div>
    </div>
  );
};

export default Home;
