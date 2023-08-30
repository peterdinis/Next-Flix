import { FC, Fragment, useState, useEffect } from "react";
import MuiModal from "@mui/material/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import {FiXCircle} from "react-icons/fi";
import { modalState } from "@/store/atoms/modalAtom";
import { Genre, Movie, Element } from "@/types/moviesTypes";

const MovieModal: FC = () => {
  const [showModal, setShdowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [trailer, setTrailer] = useState('')
  const [genres, setGenres] = useState<Genre[]>([])
  
  const handleClose = () => {
    setShdowModal(false);
  };

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_TMDB_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((response) => response.json())
        .catch((err) => console.log(err.message))

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer'
        )
        setTrailer(data.videos?.results[index]?.key)
      }
      if (data?.genres) {
        setGenres(data.genres)
      }
    }

    fetchMovie()
  }, [movie]);

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <Fragment>
        <button className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]" onClick={handleClose}>
          <FiXCircle className="h-6 w-6 text-blue-50" />
        </button>

        <div>

        </div>
      </Fragment>
    </MuiModal>
  );
};

export default MovieModal;
