import { FC } from "react";
import Header from "../shared/Header";
import SecondNavbar from "../shared/navbar/SecondNavbar";

const ListWrapper: FC = () => {
    return (
        <>
            <SecondNavbar />
            <Header title="My List" />
        </>
    )
}

export default ListWrapper;