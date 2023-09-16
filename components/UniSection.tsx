import { useState } from "react";

const uwaInfo = {
  title: "University of Western Australia",
  type: "Bachelor of Science & Engineering",
  degrees: ["Astrophysics", "Mechanical Engineering"],
  startYear: "2017",
  endYear: "2019",
};
const umInfo = {
  title: "University of Melbourne",
  type: "Master of Engineering",
  degrees: ["Aerospace Engineering"],
  startYear: "2020",
  endYear: "2022",
};

interface UniSectionProps {
  isEditing: boolean;
}

const UniSection: React.FC<UniSectionProps> = ({ isEditing }) => {
  const [uniInfo, setUniInfo] = useState([uwaInfo, umInfo]);


  function degreeHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
    
  }


  return (
    <div>
      {isEditing ? (
        <>
        {/* Mapping out each university entry */}
          {uniInfo.map((uni) => {
            return (
              <>
                <div className="flex justify-between items-center">
                  <div className="px-6 text-slate-600 space-y-2">
                    <input
                      className="w-[44%]"
                      placeholder="University name"
                      value={uni.title}
                    />
                    <div className="space-y-2">
                      <div className="flex space-x-2">
                        <input
                          className="w-[44%]"
                          placeholder="Degree Type"
                          value={uni.type}
                        />
                        <input
                          className="w-[10%] text-center"
                          placeholder="Year Start"
                          value={uni.startYear}
                        />
                        <input
                          className="w-[10%] text-center"
                          placeholder="Year End"
                          value={uni.endYear}
                        />
                      </div>

                      {/* Mapping out each major */}
                      <ol className="px-6 space-y-2">
                        {uni.degrees.map((deg) => (
                          <li className="list-disc" key={deg}>
                            <input placeholder="Major Title" value={deg}/>
                          </li>
                        ))}
                        <li className="list-disc" >
                        <button className="bg-[#F19A3E] w-4 h-4 rounded-full hover:scale-[110%] flex items-center justify-center text-[15px] pb-[0px] text-white">
                            +
                        </button>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <button className="bg-[#F19A3E] w-8 h-8 rounded-full hover:scale-[110%] flex items-center justify-center text-[30px] pb-1 text-white">
                    -
                  </button>
                </div>
                <br />
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
