import { FC, Fragment, useState, useEffect } from "react";
import MuiModal from "@mui/material/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { modalState, movieState } from "@/recoil/atoms/modalAtom";
import { Genre, Element, Movie } from "@/types/moviesTypes";
import { useAuth } from "@/hooks/useAuth";
import {
  DocumentData,
  Unsubscribe,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import ReactPlayer from "react-player";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CancelIcon from "@mui/icons-material/Cancel";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckIcon from "@mui/icons-material/Check";
import { db } from "@/firebase/init";

const MovieModal: FC = () => {
  const [showModal, setShdowModal] = useRecoilState(modalState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const movie = useRecoilValue(movieState);
  const { currentUser } = useAuth();
  const [addedToList, setAddedToList] = useState<boolean>(false);
  const [movies, setMovies] = useState<DocumentData[] | Movie[]>([]);
  const [muted, setMuted] = useState<boolean>(false);

  const handleClose = () => {
    setShdowModal(false);
  };

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_TMDB_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((response) => response.json())
        .catch((err) => console.log(err.message));

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [movie]);

  useEffect(() => {
    if (currentUser) {
      return onSnapshot(
        collection(db, "watchList"),
        /* collection(db, "customers", currentUser.uid, "myList"), */
        (snapshot) => setMovies(snapshot.docs)
      );
    }
  }, [db, movie?.id]);

  useEffect(() => {
    let unsubscribe: Unsubscribe;

    if (currentUser && currentUser.email) {
      const collectionRef = collection(db, "watchList"),

      unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        const movieList = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setMovies(movieList);
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [db, currentUser]);

  useEffect(
    () =>
      setAddedToList(
        movies.findIndex((result) => result.data().id === movie?.id) !== -1
      ),
    [movies]
  );

  useEffect(
    () =>
      setAddedToList(
        movies.findIndex((result) => result.data().id === movie?.id) !== -1
      ),
    [movies]
  );

  const handleList = async () => {
    if (addedToList) {
      await deleteDoc(
        doc(db, "customers", currentUser!.uid, "myList", movie?.id.toString()!)
      );

      toast.success(
        `${movie?.title || movie?.original_name} has been removed from My List`,
        {
          duration: 8000,
        }
      );
    } else {
      await setDoc(
        doc(db, "customers", currentUser!.uid, "myList", movie?.id.toString()!),
        { ...movie }
      );

      toast.success(
        `${movie?.title || movie?.original_name} has been added to My List`,
        {
          duration: 8000,
        }
      );
    }
  };

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <Fragment>
        <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={handleClose}
        >
          <CancelIcon className="h-6 w-6 text-blue-50" />
        </button>

        <div className="relative aspect-video">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-3">
              <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6] cursor-not-allowed">
                <PlayCircleIcon className="h-7 w-7 text-black" />
                Play
              </button>
              <button className="modalButton" onClick={handleList}>
                {addedToList ? (
                  <CheckIcon className="h-7 w-7" />
                ) : (
                  <AddCircleOutlineIcon className="h-7 w-7" />
                )}
              </button>
              <button className="modalButton cursor-not-allowed">
                <ThumbUpIcon className="h-7 w-7" />
              </button>
            </div>
            <button onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeDownIcon className="h-6 w-6" />
              ) : (
                <VolumeUpIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie?.vote_average * 10}% Match
              </p>
              <p className="font-light text-blue-50">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border text-blue-50 border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>

            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6 text-blue-50">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-blue-50">Genres: </span>
                  <span className="text-blue-50">
                    {genres.map((genre) => genre.name).join(", ")}
                  </span>
                </div>
                <div>
                  <span className="text-blue-50">Original language: </span>
                  <span className="text-blue-50">
                    {movie?.original_language}
                  </span>
                </div>

                <div>
                  <span className="text-blue-50">Total votes: </span>
                  <span className="text-blue-50">{movie?.vote_count}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </MuiModal>
  );
};

export default MovieModal;
