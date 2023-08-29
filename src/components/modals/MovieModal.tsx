import { FC, Fragment, useState, useEffect } from "react";
import MuiModal from "@mui/material/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import {FiXCircle} from "react-icons/fi";
import { modalState } from "@/store/atoms/modalAtom";

const MovieModal: FC = () => {
  const [showModal, setShdowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShdowModal(false);
  };

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
