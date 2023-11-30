import subBanner from "../../assets/Banner/sub-banner.png";
import Marquee from "react-fast-marquee";

const SubBanner = () => {
  return (
    <div className="bg-[#A9D189] relative -z-0 overflow-hidden my-20">
      <div className="container mx-auto  h-[400px] md:h-[600px] ">
        <img
          className="absolute pt-10 left-1/2 -translate-x-1/2 z-20"
          src={subBanner}
          alt="Sub Banner"
        />
      </div>
      <p className="text-6xl md:text-9xl font-bold text-white absolute bottom-4 left-0 z-30 ">
        <Marquee>Take Best Course Online ~ </Marquee>
      </p>
      <p className="text-6xl md:text-9xl font-bold text-black/20 absolute top-20 left-0 z-10">
        <Marquee direction="right">Take Best Course Online ~ </Marquee>
      </p>
    </div>
  );
};

export default SubBanner;
