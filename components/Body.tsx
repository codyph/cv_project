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
      <UniSection isEditing={isEditing}/>
      <br />
      <h2 className="rounded-lg bg-gradient-to-r from-slate-400 text-2xl text-slate-600 font-bold px-3">
        Job Experience
      </h2>
      <JobSection isEditing={isEditing}/>
    </div>
  );
};

export default Body;
