import { FC } from "react";
import Navbar from "../shared/navbar/Navbar";
import Header from "../shared/Header";

const PopularWrapper: FC = () => {
    return (
        <>
            <Navbar />
            <Header title="Netflix popular" />
        </>
    )
}

export default PopularWrapper;