import JobSection from "./JobSection";
import UniSection from "./UniSection";

interface BodyProps {
  isEditing: boolean;
}

const Body: React.FC<BodyProps> = ({ isEditing }) => {
  return (
    <div className="bg-slate-200 px-10 py-16">
      <h2 className="rounded-lg bg-gradient-to-r from-slate-400 text-2xl text-slate-600 font-bold px-3">
        Education
      </h2>
      <UniSection uniInformation={uwaInfo} />
      <UniSection uniInformation={umInfo} />
      <br />
      <h2 className="rounded-lg bg-gradient-to-r from-slate-400 text-2xl text-slate-600 font-bold px-3">
        Job Experience
      </h2>
      <JobSection />
    </div>
  );
};

export default Body;

const umInfo = {
  title: "University of Melbourne",
  type: "Master of Engineering",
  degrees: ["Aerospace Engineering"],
  startYear: "2020",
  endYear: "2022",
};

const uwaInfo = {
  title: "University of Western Australia",
  type: "Bachelor of Science & Engineering",
  degrees: ["Astrophysics", "Mechanical Engineering"],
  startYear: "2017",
  endYear: "2019",
};
