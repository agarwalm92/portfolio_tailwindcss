import { experiences } from "../data/workData";
import WorkItem from "./WorkItem";

const Work = () => {
  console.log(experiences);
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-950">Work</h1>

      <div>
        {experiences.map((e, idx) => (
          <WorkItem key={idx} date={e.date} role={e.role} company={e.company} />
        ))}
      </div>
    </div>
  );
};

export default Work;
