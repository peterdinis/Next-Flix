import {FC} from "react";
import Link from "next/link";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ visible }: MobileMenuProps) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">
          <Link href="/">Home</Link>
        </div>
        <div className="px-3 text-center text-white hover:underline">
          <Link href="/series">Series</Link>
        </div>
        <div className="px-3 text-center text-white hover:underline">
          <Link href="/films">Films</Link>
        </div>
        <div className="px-3 text-center text-white hover:underline">
          <Link href="/new-popular">New & Popular</Link>
        </div>
        <div className="px-3 text-center text-white hover:underline">
          <Link href="/list">My List</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
