/* eslint-disable react/prop-types */
const WorkItem = ({ role, date, company, desc }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm mb-2">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded">
            {date}
          </span>
        </p>
        <p className="text-2xl font-bold text-[#001b5e] mr-4 mb-2">
          <span>{company}</span>
        </p>
        <p className="text-xl font-normal text-[#001b5e] mb-2">
          <span>{role}</span>
        </p>
        <p>{desc}</p>
      </li>
    </ol>
  );
};

export default WorkItem;
