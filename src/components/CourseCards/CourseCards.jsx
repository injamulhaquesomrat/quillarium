import CourseDetails from "../CourseDetails/CourseDetails";

const CourseCards = ({ courses }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4 md:my-10 px-3 lg:px-0 duration-700">
      {courses.map((course) => (
        <CourseDetails course={course} key={course.id}></CourseDetails>
      ))}
    </div>
  );
};

export default CourseCards;
