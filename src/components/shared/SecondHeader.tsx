import { FC } from "react";

interface ISecondHeaderProps {
  title: string;
}

const SecondHeader: FC<ISecondHeaderProps> = ({ title }: ISecondHeaderProps) => {
  return (
    <h1 className="w-56 text-center cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
      {title}
    </h1>
  );
};

export default SecondHeader;
