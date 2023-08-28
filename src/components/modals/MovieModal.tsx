import { FC, useState, useEffect } from "react";
import MuiModal from "@mui/material/Modal";
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useRecoilState, useRecoilValue } from "recoil";
import { db } from "@/lib/firebase";
import { Element, Genre, Movie } from "@/types/moviesTypes";
import { modalState } from "@/store/atoms/modalAtom";
import { PlusIcon, XIcon } from "@heroicons/react/outline";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { CheckIcon, VolumeOffIcon, VolumeUpIcon } from "@heroicons/react/solid";

const MovieModal: FC = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <Toaster position="bottom-center" />
    </MuiModal>
  );
};

export default MovieModal;
