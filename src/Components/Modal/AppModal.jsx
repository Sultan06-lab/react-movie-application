import { Modal } from "@mui/material"
import { useState } from "react"
import ModalContent from "../ModalContent/ModalContent";
import Button from '@mui/material/Button';
import './Modal.css'
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const AppModal = ({id, media_type}) => {

    let [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className='button'>
            <div onClick={handleOpen}>
            <ColorButton variant="contained">Treiler</ColorButton>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <ModalContent id={id} media_type={media_type}/>
            </Modal>
        </div>
    )
}

export default AppModal