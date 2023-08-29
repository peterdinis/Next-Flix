import { FC, useState } from "react";
import MuiModal from "@mui/material/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "@/store/atoms/modalAtom";

const MovieModal: FC = () => {
  const [showModal, setShdowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShdowModal(false);
  };

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>Modal</>
    </MuiModal>
  );
};

export default MovieModal;
