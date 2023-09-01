import { FC } from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchDropdown: FC = () => {
  return (
    <div className="relative text-gray-600">
    <input type="search" name="serch" placeholder="Search" className="bg-transparent h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
      <SearchIcon className="mb-4" />
    </button>
  </div>
  )
}

export default SearchDropdown