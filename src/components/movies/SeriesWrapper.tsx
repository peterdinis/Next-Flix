import { FC } from "react";
import Navbar from "../shared/navbar/Navbar";
import Header from "../shared/Header";

const SeriesWrapper: FC = () => {
    return (
        <>
            <Navbar />
            <Header title="Netflix series" />
        </>
    )
}

export default SeriesWrapper;