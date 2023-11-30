import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { GrUserManager } from "react-icons/gr";
import { IoLayersOutline } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";
import { FaStar } from "react-icons/fa";

const CourseItem = () => {
  const courses = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.id == id);

  const {
    image,
    price,
    category,
    title,
    course_name,
    teacher_name,
    description,
    duration,
    target_audience,
    course_outline,
  } = course;

  return (
    <div>
      <div className="container mx-auto my-8 flex flex-col md:flex-row gap-4 px-4 2xl:px-0 duration-1000">
        <div className="p-4 md:p-8 rounded-2xl bg-[#EDEFF9] basis-8/12 space-y-4">
          <figure>
            <img className="w-full rounded-xl" src={image} alt={title} />
          </figure>
          <h3 className="text-2xl text-center md:text-left md:text-4xl font-bold">
            {course_name}
          </h3>
          <div
            className="
           grid grid-cols-2 lg:grid-cols-4 lg:divide-x-2
         divide-slate-300 justify-around 
           p-3 border-2 rounded-lg "
          >
            <div className="pl-3 space-y-1">
              <p className="flex items-center gap-2 ">
                <GrUserManager />
                Instructor
              </p>
              <h5 className="xl:text-xl font-semibold text-[#17183B]">
                {teacher_name}
              </h5>
            </div>
            <div className="pl-3 space-y-1">
              <p className="flex items-center gap-2">
                <IoLayersOutline />
                Cateegory
              </p>
              <h5 className="xl:text-xl font-semibold text-[#17183B]">
                {category}
              </h5>
            </div>
            <div className="pl-3 space-y-1">
              <p className="flex items-center gap-2">
                <TfiTimer />
                Duration
              </p>
              <h5 className="xl:text-xl font-semibold text-[#17183B]">
                {duration}
              </h5>
            </div>
            <div className="pl-3 space-y-1">
              <p className="flex items-center gap-2">
                <FaStar />
                Ratings
              </p>
              <h5 className="text-xl font-semibold text-[#17183B]">
                <div className="rating rating-sm xl:rating-md space-x-1">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </h5>
            </div>
          </div>
          <div className="shadow-md p-4 rounded-lg">
            <h5 className="text-2xl font-medium divider divider-start">
              About the course
            </h5>
            <p>{description}</p>
          </div>
        </div>
        <div className="basis-4/12 p-4 md:p-8 rounded-2xl bg-[#EDEFF9] space-y-4 h-fit">
          <h2 className="text-2xl font-semibold text-teal-500">{title}</h2>
          <h3 className="text-4xl xl:text-5xl font-extrabold text-violet-400">
            Price: ${price}
          </h3>
          <h4 className="text-3xl font-bold divider divider-success py-8">
            Course Outline
          </h4>
          <ul className="space-y-2 bg-white rounded-xl p-4 font-medium">
            {course_outline.map((outline, idx) => (
              <li key={idx}>
                {idx + 1}. {outline}
              </li>
            ))}
          </ul>
          <p className="text-2xl font-semibold">Who should purchase it?</p>
          <p className="text-gray-500 text-lg">
            <span className="text-black ">Answer :</span> {target_audience}
          </p>
          <button className="btn btn-block rounded-full bg-teal-500 hover:bg-teal-300 text-lg">
            Enroll Now
          </button>

          <button
            onClick={() => navigate(-1)}
            className="btn bg-violate hover:bg-violet-500 text-white mt-8"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
