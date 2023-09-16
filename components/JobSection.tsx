import { useState } from "react";

const initialInfo = {
  title: "Defence, Science, Technology Group",
  position: "Vehicle Survivability Scientist",
  startYear: "2022",
  endYear: "Now",
  description: "Blow shit up. Shoot shit. Write shit down. Simulate shit.",
};

interface JobSectionProps {
  isEditing: boolean;
}

const JobSection: React.FC<JobSectionProps> = ({ isEditing }) => {
  const [jobInfo, setjobInfo] = useState([initialInfo]);

  return (
    <div>
      {isEditing ? (
        <>
            {jobInfo.map((job) => {
            return (
            <>
              <div className="flex justify-between items-center">
                <div className="text-slate-600 px-6 space-y-2">
                  <input
                    className="w-[44%]"
                    placeholder="Job Title"
                    value={job.title}
                  />
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <input className="w-[44%]" placeholder="Job Title" value={job.position}/>
                      <input className="w-[10%]" placeholder="Start Year" value={job.startYear}/>
                      <input className="w-[10%]" placeholder="End Year" value={job.endYear}/>
                    </div>
                    <textarea className="w-full h-full" placeholder="Brief description" value={job.description}/>
                  </div>
                  <br />
                </div>
                <button className="bg-[#F19A3E] w-8 h-8 rounded-full hover:scale-[110%] flex items-center justify-center text-[30px] pb-1 text-white">
                  -
                </button>
              </div>
              <br/>
            </>
            );
          })}
          <div className="flex justify-center">
            <button className="bg-[#F19A3E] w-12 h-12 rounded-full hover:scale-[110%] flex items-center justify-center text-[40px] pb-1">
              +
            </button>
          </div>
        </>
        ) : (
        
            jobInfo.map((job) => {
            return (
              <div className="text-slate-600">
                <h1 className="px-6 text-xl  font-bold">{job.title}</h1>
                <div className="px-6">
                  <div className="flex gap-x-2">
                    <p className="font-medium">{job.position}</p>
                    <p>| {job.startYear} - {job.endYear}</p>
                  </div>
                  <p>{job.description}</p>
                </div>
                <br />
              </div>
            );
          })
        )}
    </div>
  );
};

export default JobSection;
