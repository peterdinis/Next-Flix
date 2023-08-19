import { FC } from "react";

const Input: FC = () => {
  return (
    <input
      placeholder=" "
      className="block pt-6 px-6 pb-1 w-full text-md focus:ring-0 peer text-white rounded-md bg-neutral-700 appearance-none focus:outline-none"
    />
  );
};

export default Input;
