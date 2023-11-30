import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Teacher from "../components/Teacher/Teacher";

const Team = () => {
  const team = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 px-4">
        {team.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher}></Teacher>
        ))}
      </div>
    </div>
  );
};

export default Team;
