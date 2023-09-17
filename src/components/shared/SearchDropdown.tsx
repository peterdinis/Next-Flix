import { FC } from "react";

interface ISearchDropdownProps {
  value?: string;
  changeValue?: (value: any) => any;
}

const SearchDropdown: FC<ISearchDropdownProps> = ({value, changeValue}: ISearchDropdownProps) => {
  return (
    <div className="relative text-gray-600">
      <input
        type="search"
        name="serch"
        value={value}
        placeholder="Search"
        className="bg-transparent h-10 px-5 pr-10 rounded-full text-sm focus:outline-none text-blue-50"
        onChange={changeValue}
      />
    </div>
  );
};

export default SearchDropdown;
