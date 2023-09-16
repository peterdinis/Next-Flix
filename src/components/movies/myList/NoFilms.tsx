import { FC } from "react";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const NoFilms: FC = () => {
  return (
    <div className="text-white text-xl pt-4 font-thin">
      You don't have any movies in myList sections <SentimentDissatisfiedIcon />
    </div>
  );
};

export default NoFilms;
