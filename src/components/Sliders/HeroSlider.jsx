import "keen-slider/keen-slider.min.css";
import PropTypes from "prop-types";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import "./HeroSlider.css";
import banner1 from "../../assets/Banner/banner1.png";
import banner2 from "../../assets/Banner/banner2.png";
import banner3 from "../../assets/Banner/banner3.png";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img
              className="object-cover banner-img"
              src={banner1}
              alt="banner 1"
            />
            <div className="absolute z-50 -top-4 sm:top-0 left-0 space-y-1 sm:space-y-4 lg:space-y-8 w-fit lg:w-8/12 text-center sm:text-left p-2 md:p-8">
              <div className="badge badge-lg uppercase bg-violate border-violate text-white">
                our courses
              </div>
              <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl text-black font-bold duration-700">
                With Quillirium Teachers, Everything Is Easier
              </h2>
              <p className="text-base xl:text-lg font-medium text-black line-clamp-2 lg:line-clamp-none duration-700">
                Quillirium is free CSS template designed by Injamul for online
                educational related websites. This layout is based on the famous
                Keen Slider JS and Tailwind CSS framework.
              </p>
              <div>
                <button className="btn hidden sm:inline-flex rounded-full text-violate hover:bg-violate hover:text-white hover:border-violate">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <img
              className="object-cover banner-img"
              src={banner2}
              alt="banner 2"
            />
            <div className="absolute z-50 -top-4 sm:top-0 left-0 space-y-1 sm:space-y-4 lg:space-y-8 w-fit lg:w-8/12 text-center sm:text-left p-2 md:p-8">
              <div className="badge badge-lg uppercase bg-violate border-violate text-white">
                Best Result
              </div>
              <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl text-black font-bold duration-700">
                Get the best result out of your effort
              </h2>
              <p className="text-base xl:text-lg font-medium text-black line-clamp-2 lg:line-clamp-none duration-700">
                We know from research that growth is actually contagious, so if
                you want to reach your goals, you`ve got to be around people
                that are going in the same direction you want to be going, and
                you will catch the success.
              </p>
              <div>
                <button className="btn hidden sm:inline-flex rounded-full text-violate hover:bg-violate hover:text-white hover:border-violate">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <img
              className="object-cover banner-img"
              src={banner3}
              alt="banner 3"
            />
            <div className="absolute z-50 -top-4 sm:top-0 left-0 space-y-1 sm:space-y-4 lg:space-y-8 w-fit lg:w-8/12 text-center sm:text-left p-2 md:p-8">
              <div className="badge badge-lg uppercase bg-violate border-violate text-white">
                Online Learning
              </div>
              <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl text-black font-bold duration-700">
                Online Learning helps you save the time
              </h2>
              <p className="text-base xl:text-lg font-medium text-black line-clamp-2 lg:line-clamp-none duration-700">
                Online education is one of the major changes in the global
                education industry after COVID hits the country. The internet is
                used for this type of learning.
              </p>
              <div>
                <button className="btn hidden sm:inline-flex rounded-full text-violate hover:bg-violate hover:text-white hover:border-violate">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  );
};

export default HeroSlider;

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

HeroSlider.propTypes = {
  disabeld: PropTypes.func,
};
