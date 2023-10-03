import moment from "moment/moment";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div>
      <div className=" text-center mx-auto">
        <img className="mx-auto" src={logo} alt="" />
        <h2 className="mt-5 text-lg text-[#706F6F]">
          Journalism Without Fear or Favour
        </h2>
        <p className="text-xl mt-3 font-medium text-[#403F3F]">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Header;
