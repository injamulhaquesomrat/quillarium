import { Link, useLoaderData } from "react-router-dom";
import CourseCards from "../components/CourseCards/CourseCards";
import Hero from "../components/Hero/Hero";
import { FaArrowRight } from "react-icons/fa";
import SubBanner from "../components/Banner/SubBanner";
import LiveSession from "../components/LiveSession/LiveSession";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  const allCourses = useLoaderData();
  const slicedCourses = allCourses.slice(0, 6);

  // initialize aos
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Hero data-aos="fade-up"></Hero>
      <h3
        className="text-2xl md:text-4xl font-bold text-center pt-12"
        data-aos=""
      >
        Latest Courses
      </h3>
      <CourseCards courses={slicedCourses}></CourseCards>
      <div className="flex justify-center container mx-auto my-4">
        <Link to={"/courses"}>
          <button className="btn bg-violate text-white hover:text-violate">
            Show All <FaArrowRight />
          </button>
        </Link>
      </div>
      <SubBanner></SubBanner>
      <LiveSession></LiveSession>
    </div>
  );
};

export default Home;
