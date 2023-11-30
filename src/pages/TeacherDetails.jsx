import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowLeft,
} from "react-icons/fa";

const TeacherDetails = () => {
  const teachers = useLoaderData();
  const { id } = useParams();
  const teacher = teachers.find((teacher) => teacher.id == id);

  const {
    teacher_name,
    designation,
    insta,
    facebook,
    LinkedIn,
    introduction,
    category,
    students,
    reviews,
    courses,
  } = teacher;
  console.log(reviews);

  return (
    <div className="flex flex-col items-center my-8 px-3 space-y-4">
      <figure>
        <img
          className="w-52 h-72 rounded-full"
          src={teacher.img}
          alt={teacher_name}
        />
      </figure>
      <div className="text-center space-y-3">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold duration-700">
            {teacher_name}
          </h2>
          <p className="font-semibold text-teal-500">{designation}</p>
        </div>
        <div className="text-xl text-white flex justify-center gap-4 duration-1000">
          <a
            className="flex justify-center items-center h-10 w-10  bg-violate 
            border hover:bg-white hover:text-violate hover:border-violate  rounded-full"
            href={LinkedIn}
          >
            <FaLinkedinIn />
          </a>
          <a
            className="flex justify-center items-center h-10 w-10 bg-violate border hover:bg-white hover:text-violate hover:border-violate rounded-full"
            href={insta}
          >
            <FaInstagram />
          </a>
          <a
            className="flex justify-center items-center h-10 w-10 bg-violate border hover:bg-white hover:text-violate hover:border-violate rounded-full"
            href={facebook}
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
      <p className="text-center lg:w-2/5">{introduction}</p>
      <div className="border w-fit px-4 py-3 flex flex-row justify-between gap-4 rounded-xl text-center ">
        <div className="">
          <h4 className="text-2xl md:text-4xl font-semibold text-violate duration-1000">
            {courses}+
          </h4>
          <p className="text-sm md:text-base font-medium duration-700">
            Courses
          </p>
        </div>
        <div className="divider border h-8"></div>
        <div>
          <h4 className="text-2xl md:text-4xl font-semibold  text-violate duration-1000">
            {students}+
          </h4>
          <p className="text-sm md:text-base font-medium duration-700">
            Students
          </p>
        </div>
        <div className="divider border h-8"></div>
        <div>
          <h4 className="text-2xl md:text-4xl font-semibold text-violate duration-1000">
            {category}
          </h4>
          <p className="text-sm md:text-base font-medium duration-700">
            Category
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-medium divider pb-6">Reviews</h2>
        <ul className="space-y-3 text-white">
          {reviews.map((review, index) => (
            <li
              className="px-2 py-3 shadow-md rounded-md bg-violate/50"
              key={index}
            >
              `{review.comment}` ~ {review.user}
            </li>
          ))}
        </ul>
      </div>
      <Link to={"/team"}>
        <button className="btn btn-sm btn-outline mt-8 border-violate text-violate hover:bg-violate hover:border-violate">
          <FaArrowLeft />
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default TeacherDetails;
