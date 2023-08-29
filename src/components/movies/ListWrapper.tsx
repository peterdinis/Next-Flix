import { FC } from "react";
import Navbar from "../shared/navbar/Navbar";
import Header from "../shared/Header";

const ListWrapper: FC = () => {
    return (
        <>
            <Navbar />
            <Header title="My List" />
        </>
    )
}

export default ListWrapper;