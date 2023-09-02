import { FC } from "react";

interface ISecondHeaderProps {
  title: string;
}

const SecondHeader: FC<ISecondHeaderProps> = ({ title }: ISecondHeaderProps) => {
  return (
    <h1 className="text-center text-2xl cursor-pointer text-[#e5e5e5] transition duration-200 font-bold hover:text-white">
      {title}
    </h1>
  );
};

export default SecondHeader;
