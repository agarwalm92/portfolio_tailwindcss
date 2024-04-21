import { experiences } from "../data/workData";
import WorkItem from "./WorkItem";

const Work = () => {
  return (
    <div id="work" className="section">
      <h1 className="header">Work</h1>
      <div>
        {experiences.map((e, idx) => (
          <WorkItem
            key={idx}
            date={e.date}
            role={e.role}
            company={e.company}
            desc={e.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
