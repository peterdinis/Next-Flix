import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";

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
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <SearchIcon className="mb-4 text-blue-50" />
      </button>
    </div>
  );
};

export default SearchDropdown;
