/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type GenericModalProps = {
  children: React.ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  disabledBackdropClick?: boolean;
};
const GenericModal: React.FC<GenericModalProps> = ({
  visible,
  setVisible,
  children,
  disabledBackdropClick = false,
}) => {
  const handleClose = (
    _event: any,
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    if (disabledBackdropClick && reason && reason === "backdropClick") return;
    setVisible(false);
  };

  return (
    <div>
      <Modal open={visible} onClose={handleClose} disableEnforceFocus>
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

export default GenericModal;
