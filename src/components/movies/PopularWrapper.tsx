import { FC } from "react";

import Header from "../shared/Header";
import SecondNavbar from "../shared/navbar/SecondNavbar";

const PopularWrapper: FC = () => {
    return (
        <>
            <SecondNavbar />
            <Header title="Netflix popular" />
        </>
    )
}

export default PopularWrapper;