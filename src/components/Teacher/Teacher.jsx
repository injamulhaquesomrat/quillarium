import PropTypes from "prop-types";
import "./Teacher.css";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Teacher = ({ teacher }) => {
  const { teacher_name, img, id, designation, insta, facebook, LinkedIn } =
    teacher;
  return (
    <div className="teacher-card h-full relative duration-1000 overflow-hidden">
      <figure className="h-full">
        <img
          className="teacher-card-img w-full object-fit h-[400px] 2xl:h-[450px]"
          src={img}
          alt={teacher_name}
        />
      </figure>
      <div className="teacher-card-body absolute bottom-0 left-0 bg-violate/50 w-full h-[80px] z-50 p-5 flex items-end justify-between">
        <div>
          <h2 className="text-white text-xl font-semibold">{teacher_name}</h2>
          <p className="text-sm text-white">{designation}</p>
        </div>
        <div className="flex text-2xl md:text-3xl text-white items-center gap-2">
          <a href={LinkedIn}>
            <FaLinkedin />
          </a>
          <a href={insta}>
            <FaInstagram />
          </a>
          <a href={facebook}>
            <FaFacebookSquare />
          </a>
          <Link to={`/teacher/${id}`}>
            <div className="tooltip tooltip-accent" data-tip="Info">
              <FaArrowRightLong className="text-2xl hover:text-red-500 duration-700" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teacher;

Teacher.propTypes = {
  teacher: PropTypes.object,
};
