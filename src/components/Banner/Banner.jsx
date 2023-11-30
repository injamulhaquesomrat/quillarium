import { useLocation } from "react-router-dom";
import banner from "../../assets/banner.png";

const Banner = () => {
  const location = useLocation();
  return (
    <div className="relative pt-1">
      <img
        className="h-[300px] md:h-[450px] w-full object-cover rounded-bl-2xl lg:rounded-bl-5xl rounded-tr-2xl lg:rounded-tr-5xl"
        src={banner}
        alt="banner"
      />
      <h2 className=" absolute top-40 md:top-56 left-1/2 -translate-x-1/2 -translate-y-1/2 z-6 text-4xl text-white uppercase font-semibold">
        {location.pathname.replaceAll("/", " ")}
      </h2>
    </div>
  );
};

export default Banner;
