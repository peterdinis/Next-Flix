import { FC } from "react";

interface InputProps {
  id: string;
  value: string;
  type?: string;
  label: string;
  onChange: any;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ id, value, onChange, type, label, placeholder }: InputProps) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="block pt-6 px-6 pb-1 w-full text-md focus:ring-0 peer text-white rounded-md bg-neutral-700 appearance-none focus:outline-none"
      />
      <label
        className="absolute text-md text-blue-50 duration-150 peer-focus:scale-75 transform -translate-y-3 scale-75 peer-placeholder-shown:translate-y-0 top-4 z-10 left-6 peer-placehilder-shown:scale-100 origin-[0]"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
