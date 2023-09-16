import { useState } from "react";

const initialInfo = {
  id: 0,
  title: "Defence, Science, Technology Group",
  position: "Vehicle Survivability Scientist",
  startYear: "2022",
  endYear: "Now",
  description: "Blow shit up. Shoot shit. Write shit down. Simulate shit.",
};

interface JobSectionProps {
  isEditing: boolean;
}

type JobEntry = {
    id: number,
    title: string,
    position: string,
    startYear: string,
    endYear: string,
    description: string
}

const JobSection: React.FC<JobSectionProps> = ({ isEditing }) => {
  const [jobInfo, setJobInfo] = useState([initialInfo]);


  function handleJobInfoChange(e: React.ChangeEvent<HTMLInputElement>, entryId: number) {
    setJobInfo(jobInfo.map(job => {
        if (entryId === job.id) {
            return {
                ...job,
                [e.target.name]: e.target.value
            }
        } else {
            return job
        }
    }))
  }

  function handleAddEntryClick() {
    const defaultEntry: JobEntry = {
        id: jobInfo.length,
        title: "",
        position: "",
        startYear: "",
        endYear: "",
        description: ""
    }
    setJobInfo([...jobInfo, defaultEntry])
  }

  function handleDeleteEntryClick(idToDelete: number) {
    const deletedIdList = jobInfo.filter(uI => uI.id !== idToDelete)
    setJobInfo([...deletedIdList])
  }


  return (
    <div>
      {isEditing ? (
        <>
            {jobInfo.map((job) => {
            return (
            <>
              <div key={job.id} className="flex justify-between items-center">
                <div className="text-slate-600 px-6 space-y-2">
                  <input
                  name="title"
                    className="w-[44%]"
                    placeholder="Job Title"
                    value={job.title}
                    onChange={e => handleJobInfoChange(e, job.id)}
                  />
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <input name="position" className="w-[44%]" placeholder="Position" value={job.position} onChange={e => handleJobInfoChange(e, job.id)}/>
                      <input name="startYear" className="w-[10%]" placeholder="Start Year" value={job.startYear} onChange={e => handleJobInfoChange(e, job.id)}/>
                      <input name="endYear" className="w-[10%]" placeholder="End Year" value={job.endYear} onChange={e => handleJobInfoChange(e, job.id)}/>
                    </div>
                    <input name="description" className="w-full h-full" placeholder="Brief description" value={job.description} onChange={e => handleJobInfoChange(e, job.id)}/>
                  </div>
                  <br />
                </div>
                <button className="bg-[#F19A3E] w-8 h-8 rounded-full hover:scale-[110%] flex items-center justify-center text-[30px] pb-1 text-white"
                    onClick={() => {handleDeleteEntryClick(job.id)}}>
                  -
                </button>
              </div>
              <br/>
            </>
            );
          })}
          <div className="flex justify-center pt-6">
            <button className="bg-[#F19A3E] w-12 h-12 rounded-full hover:scale-[110%] flex items-center justify-center text-[40px] pb-1"
                onClick={handleAddEntryClick}>
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
