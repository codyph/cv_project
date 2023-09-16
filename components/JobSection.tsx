import { useState } from 'react'

const initialInfo = {
    title: "Defence, Science, Technology Group",
    position: "Vehicle Survivability Scientist",
    startYear: "2022",
    description: "Blow shit up. Shoot shit. Write shit down. Simulate shit."
}

const JobSection = () => {

    const [jobInfo, setjobInfo] = useState(initialInfo)

    return (
    <div className='text-slate-600'>
        <h1 className='px-6 text-xl  font-bold'>{jobInfo.title}</h1>
        <div className='px-6'>
            <div className='flex gap-x-2'>
                <p className='font-medium'>{jobInfo.position}</p>
                <p>| {jobInfo.startYear} - Now</p>
            </div>
            <p>{jobInfo.description}</p>
        </div>
        <br/>

    </div>
    )
}

export default JobSection