import { Movie, MovieApiResponse } from "@/types/moviesTypes";
import { FC, useState } from "react";
import { modalState, movieState } from "@/store/atoms/modalAtom";
import { useRecoilState } from "recoil";
import { FaPlay } from 'react-icons/fa';
import { baseUrl } from "@/api/movies/moviesRequests";
import {BiInfoCircle} from "react-icons/bi";


interface InfoModalPropsI {
  netflixOriginals:MovieApiResponse;
}

const InfoModal: FC<InfoModalPropsI> = ({
  netflixOriginals,
}: InfoModalPropsI) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  
  return (
    <>
     <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <img
          src={`${baseUrl}/${netflixOriginals.results && netflixOriginals.results[0].backdrop_path || netflixOriginals.results && netflixOriginals!.results[0]?.poster_path}`}
          alt="Movie Poster"
        />
      </div>

      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-blue-50">
        {netflixOriginals.results && netflixOriginals!.results[0]?.title || netflixOriginals.results && netflixOriginals!.results[0]?.name || netflixOriginals.results && netflixOriginals!.results[0]?.original_name}
      </h1>
      <p className="max-w-xs text-blue-50 text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
        {netflixOriginals.results && netflixOriginals!.results[0]?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7 cursor-not-allowed" />
          Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setShowModal(true);
            setCurrentMovie(movie);
          }}
        >
          More Info <BiInfoCircle className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
    </>
  )
};

export default InfoModal;