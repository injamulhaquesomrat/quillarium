import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import CourseCards from "../components/CourseCards/CourseCards";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between container mx-auto pt-5 gap-4 px-3 duration-700">
        <div>
          <ul className="md:flex hidden gap-3 md:gap-8 bg-[#F1F0FE] px-5 md:px-8 py-3 rounded-full font-semibold">
            <Link className="hover:text-violate">All</Link>
            <Link className="hover:text-violate">HTML</Link>
            <Link className="hover:text-violate">CSS</Link>
            <Link className="hover:text-violate">React</Link>
            <Link className="hover:text-violate">Javascript</Link>
          </ul>
        </div>
        <div className="join md:flex rounded-full">
          <div>
            <div>
              <input
                className="input input-bordered join-item w-full"
                placeholder="Search Courses... "
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn join-item border border-[#7A6AD8] text-[#7A6AD8] hover:bg-violate hover:text-white">
              Search
            </button>
          </div>
        </div>
      </div>
      <CourseCards courses={courses}></CourseCards>
      {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4 md:my-10 px-3 lg:px-0 duration-700">
        {courses.map((course) => (
          <CourseDetails course={course} key={course.id}></CourseDetails>
        ))}
      </div> */}
    </div>
  );
};

export default Courses;
