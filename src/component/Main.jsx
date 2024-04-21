import { GrGithub, GrLinkedin, GrTwitter } from "react-icons/gr";
import { TypeAnimation } from "react-type-animation";
import HeroImage from "../assets/heroImage.jpg";

const Main = () => {
  return (
    <div>
      <img
        className="w-full h-screen object-cover"
        //src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //src="https://images.unsplash.com/1/work-station-straight-on-view.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        src={HeroImage}
      />
      <div className="w-full h-screen absolute top-0 left-0">
        <div className="max-w-[700px] m-auto flex flex-col lg:items-start items-center w-full h-full justify-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-900">
            John Doe
          </h1>
          <h2 className="sm:text-3xl text-2xl flex pt-4 text-gray-900">
            Im a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Full stack developer",
                2000,
                "Javascript developer",
                () => {},
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
              }}
            />
          </h2>
          <div className="flex justify-center pt-6 max-w-[200px] w-full">
            <GrGithub className="cursor-pointer mr-5" size={20} />
            <GrTwitter className="cursor-pointer mr-5" size={20} />
            <GrLinkedin className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
