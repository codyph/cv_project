import { useState } from "react";

const uwaInfo = {
  id: 0,
  title: "University of Western Australia",
  type: "Bachelor of Science & Engineering",
  degrees: ["Astrophysics", "Mechanical Engineering"],
  startYear: "2017",
  endYear: "2019",
};
const umInfo = {
  id: 1,
  title: "University of Melbourne",
  type: "Master of Engineering",
  degrees: ["Aerospace Engineering"],
  startYear: "2020",
  endYear: "2022",
};

interface UniSectionProps {
  isEditing: boolean;
}

type UniEntry = {
    id: number,
    title: string,
    type: string,
    degrees: string[],
    startYear: string,
    endYear: string,
}

const UniSection: React.FC<UniSectionProps> = ({ isEditing }) => {
  const [uniInfo, setUniInfo] = useState([uwaInfo, umInfo]);


  function handleUniInfoChange(e: React.ChangeEvent<HTMLInputElement>, entryId: number) {
    setUniInfo(uniInfo.map(uni => {
        if (entryId === uni.id) {
            return {
                ...uni,
                [e.target.name]: e.target.value
            }
        } else {
            return uni
        }
    }))
  }

  function handleAddEntryClick() {
    const defaultEntry: UniEntry = {
        id: uniInfo.length,
        title: "",
        type: "",
        degrees: [""],
        startYear: "",
        endYear: ""
    }
    setUniInfo([...uniInfo, defaultEntry])
}

function handleDeleteEntryClick(idToDelete: number) {
  const deletedIdList = uniInfo.filter(uI => uI.id !== idToDelete)
  setUniInfo([...deletedIdList])
}

  function handleAddDegreeClick(entryId: number) {
    setUniInfo(uniInfo.map(uni => {
        if (entryId === uni.id) {
            return {
                ...uni,
                degrees: [...uni.degrees, ""]
            }
        } else {
            return uni
        }
    }))
  }

  function handleDegreeChange(e: React.ChangeEvent<HTMLInputElement>, entryId: number, index: number) {
    setUniInfo(uniInfo.map(uni => {
        if (entryId === uni.id) {
            const nextDegreeList = uni.degrees.map((deg, i) => {
                if (i === index) {
                    return e.target.value
                } else {
                    return deg
                }
            })
            return {
                ...uni,
                degrees: [...nextDegreeList]
            }
        } else {
            return uni
        }
    }))
  }

  function handleDeleteDegreeClick(entryId: number, index: number) {
    setUniInfo(uniInfo.map(uni => {
        if (entryId === uni.id) {
            const nextDeletedIndexList = uni.degrees.filter((ud, i) => i !== index)
            return {
                ...uni,
                degrees: [...nextDeletedIndexList]
            }
        } else {
            return uni
        }
    })
    )
  }



  return (
    <div>
      {isEditing ? (
        <>
        {/* Mapping out each university entry */}
          {uniInfo.map((uni) => {
            return (
              <>
                <div key={uni.id} className="flex justify-between items-center">
                  <div className="px-6 text-slate-600 space-y-2">
                    <input
                      name="title"
                      className="w-[44%]"
                      placeholder="University name"
                      value={uni.title}
                      onChange={e => handleUniInfoChange(e, uni.id)}
                    />
                    <div className="space-y-2">
                      <div className="flex space-x-2">
                        <input
                          name="type"
                          className="w-[44%]"
                          placeholder="Degree Type"
                          value={uni.type}
                          onChange={e => handleUniInfoChange(e, uni.id)}
                        />
                        <input
                            name="startYear"
                          className="w-[10%] text-center"
                          placeholder="Year Start"
                          value={uni.startYear}
                          onChange={e => handleUniInfoChange(e, uni.id)}
                        />
                        <input
                            name="endYear"
                          className="w-[10%] text-center"
                          placeholder="Year End"
                          value={uni.endYear}
                          onChange={e => handleUniInfoChange(e, uni.id)}
                        />
                      </div>

                      {/* Mapping out each major */}
                      <ol className="px-6 space-y-2">
                        {uni.degrees.map((deg, index) => (
                        <div className="flex items-center gap-x-2">
                          <li key={index} className="list-disc">
                            <input name="degrees" placeholder="Major Title" value={deg}
                             onChange={(e) => {handleDegreeChange(e, uni.id, index)}}/>
                          </li>
                          <button className="bg-[#F19A3E] w-4 h-4 rounded-full hover:scale-[110%] flex items-center justify-center text-[15px] pb-[0px] text-white"
                            onClick={() => {handleDeleteDegreeClick(uni.id, index)}}>
                            -
                        </button>
                        </div>
                        ))}
                        <li className="list-disc" >
                        <button className="bg-[#F19A3E] w-4 h-4 rounded-full hover:scale-[110%] flex items-center justify-center text-[15px] pb-[0px] text-white"
                         onClick={() => handleAddDegreeClick(uni.id)}>
                            +
                        </button>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <button className="bg-[#F19A3E] w-8 h-8 rounded-full hover:scale-[110%] flex items-center justify-center text-[30px] pb-1 text-white"
                    onClick={() => handleDeleteEntryClick(uni.id)}>
                    -
                  </button>
                </div>
                <br />
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
        <>
          {uniInfo.map((uni) => {
            return (
              <div>
                <h1 className=" px-6 text-xl text-slate-600 font-bold">
                  {uni.title}
                </h1>
                <div className="text-slate-600 px-6">
                  <p>
                    {uni.type} | {uni.startYear} - {uni.endYear}
                  </p>
                  <ol className="px-6">
                    {uni.degrees.map((deg) => (
                      <li className="list-disc" key={deg}>
                        {deg}
                      </li>
                    ))}
                  </ol>
                </div>
                <br />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default UniSection;
