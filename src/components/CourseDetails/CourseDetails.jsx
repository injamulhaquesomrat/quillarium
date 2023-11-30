import PropTypes from "prop-types";
import "./CourseDetails.css";
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
  const { id, title, image, price, category, course_name, teacher_name } =
    course;

  return (
    <div className="card card-compact bg-[#F1F0FE] rounded-3xl relative overflow-hidden grid duration-700">
      <figure>
        <img className="rounded-3xl aspect-video" src={image} alt={title} />
        <p className="course-category absolute top-5 left-5 px-3 py-1 text-violate bg-white font-medium uppercase rounded-full">
          {category}
        </p>
        <p className="price absolute -top-10 -right-6 text-2xl  text-white bg-[#7A6AD8] pt-16 pr-10 pl-4 pb-10 rounded-full">
          <sup>$</sup>
          <span className=" text-3xl font-semibold">{price}</span>
        </p>
      </figure>
      <div className="p-4 lg:p-8 space-y-3">
        <p className="text-violate text-lg font-medium">{teacher_name}</p>
        <h2 className="card-title course-title">{course_name}</h2>
        <div className="card-actions">
          <Link to={`/course/${id}`}>
            <button className="btn bg-[#a49dfa] text-white hover:bg-violate">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

CourseDetails.propTypes = {
  course: PropTypes.object.isRequired,
};
export default CourseDetails;
