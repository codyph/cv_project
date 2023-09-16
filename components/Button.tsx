import { twMerge } from "tailwind-merge"

interface ButtonProps {
    isEditing: boolean,
    onClick: () => void
}

const Button = (props: ButtonProps) => {
    return (
        <button 
        className={twMerge(`bg-[#F19A3E] flex w-48 h-12 rounded-3xl hover:scale-[110%] font-semibold tracking-[6px] text-center items-center justify-center`)}
        onClick={() => {props.onClick()}}>
            {props.isEditing ? "Save" : "Edit"}
        </button>
    )
}

export default Button