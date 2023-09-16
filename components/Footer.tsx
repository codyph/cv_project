import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface FooterProps {
  isEditing: boolean;
}

const Footer: React.FC<FooterProps> = ({ isEditing }) => {
  const [email, setEmail] = useState("codyphilipp@gmail.com");
  const [number, setNumber] = useState("0444511720");

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value);
  }

  return (
    <div
      className={twMerge(
        "flex justify-between text-slate-100 h-16 p-10 items-center",
        isEditing && "text-slate-800"
      )}
    >
      {isEditing ? (
        <>
          <input
            placeholder="What's your email?"
            value={email}
            onChange={(e) => handleEmailChange(e)}
          />
          <input
            placeholder="What's your mobile?"
            value={number}
            onChange={(e) => handleNumberChange(e)}
          />
        </>
      ) : (
        <>
          <p>{email}</p>
          <p>{number}</p>
        </>
      )}
    </div>
  );
};

export default Footer;
