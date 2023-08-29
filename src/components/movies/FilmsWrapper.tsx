import { FC } from "react";
import Header from "../shared/Header";
import SecondNavbar from "../shared/navbar/SecondNavbar";

const FilmsWrapper: FC = () => {
    return (
        <>
            <SecondNavbar />
            <Header title="Netflix films" />
        </>
    )
}

export default FilmsWrapper;