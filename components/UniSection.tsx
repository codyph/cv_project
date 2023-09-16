import { useState } from 'react'

interface UniSectionProps {
    uniInformation: {
        title: string,
        type: string,
        degrees: string[],
        startYear: string,
        endYear: string
    }
}

const UniSection: React.FC<UniSectionProps> = ({ uniInformation }) => {

    const [uniInfo, setUniInfo] = useState(uniInformation)

    return (
    <div>
        <h1 className=' px-6 text-xl text-slate-600 font-bold'>{uniInfo.title}</h1>
        <div className='text-slate-600 px-6'>
            <p>{uniInfo.type} | {uniInfo.startYear} - {uniInfo.endYear}</p>
            <ol className='px-6'>
                {uniInfo.degrees.map((deg) => (
                        <li className='list-disc' key={deg}>{deg}</li>
                ))}
            </ol>
        </div>
        <br/>
    </div>
    )
}

export default UniSection