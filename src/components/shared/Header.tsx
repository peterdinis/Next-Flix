import { FC } from "react";

interface IHeaderProps {
  title: string;
}

const Header: FC<IHeaderProps> = ({ title }: IHeaderProps) => {
  return (
    <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
      {title}
    </h2>
  );
};

export default Header;
