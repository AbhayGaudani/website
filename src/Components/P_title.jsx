const P_title = ({ subtitle, title }) => {
  return (
    <div className="text-center text-[#212EA0] text-[15px] font-bold mt-[70px] mb-[30px] left-0 right-0 uppercase">
      <p>{subtitle}</p>
      <h2 className="text-[32px] text-[#000F38] mt-[5px] normal-case">
        {title}
      </h2>
    </div>
  );
};

export default P_title;
