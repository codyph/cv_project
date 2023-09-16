import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  isEditing: boolean;
}

const Header: React.FC<HeaderProps> = ({ isEditing }) => {
  const [name, setName] = useState("CODY PHILIPP");
  const [title, setTitle] = useState("Vehicle Survivability Scientist");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value.toUpperCase());
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  return (
    <div
      className={twMerge(
        "p-10 py-16 text-center h-[225px] flex-1 flex-col",
        isEditing && "space-y-4 text-slate-800"
      )}
    >
      <div>
        {isEditing ? (
          <input
            className="text-[50px] text-center"
            placeholder="What's your name?"
            value={name}
            onChange={(e) => handleNameChange(e)}
          />
        ) : (
          <h1 className="text-[50px] tracking-[20px]">
            <b>{name}</b>
          </h1>
        )}
      </div>
      <div>
        {isEditing ? (
          <input
            className="text-center w-[44%]"
            placeholder="What's your main title?"
            value={title}
            onChange={(e) => handleTitleChange(e)}
          />
        ) : (
          <p className="font-light">{title}</p>
        )}
      </div>
    </div>
  );
};

export default Header;
