import { FC } from "react";
import Navbar from "../shared/navbar/Navbar";
import Header from "../shared/Header";

const FilmsWrapper: FC = () => {
    return (
        <>
            <Navbar />
            <Header title="Netflix films" />
        </>
    )
}

export default FilmsWrapper;