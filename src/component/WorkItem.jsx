/* eslint-disable react/prop-types */
const WorkItem = ({ role, date, company }) => {
  console.log("WI");
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li>
        <p>{role}</p>
        <p>{date}</p>
        <p>{company}</p>
      </li>
    </ol>
  );
};

export default WorkItem;
