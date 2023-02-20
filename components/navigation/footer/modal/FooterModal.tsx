import { Box, Modal, Typography } from '@mui/material';
import { IModalContent } from '../Footer';

export interface IFooterModal extends React.ComponentPropsWithoutRef<'div'> {
    open: boolean;
    content: IModalContent;
    handleClose: () => () => void;
}

const FooterModal:React.FC<IFooterModal> = ({
    open,content,handleClose
}) => {
    const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700,
        height: 500,
        bgcolor: "white",
        borderRadius: "10px",
        boxShadow: 24,
        overflow: "scroll",
        p: 4
    };
    return (
        <>
            <Modal
            open={open}
            onClose={handleClose()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-text"
            >
            <Box sx={style}>
                <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="footer-modal-title"
                >
                    {content.title}
                    <button onClick={handleClose()}>
                        <img src="/closeModalBtn.png" alt="Close Modal button" />
                    </button>
                </Typography>
                <Typography id="modal-modal-text" sx={{ mt: 2, color: "#737272" }}>
                {content.text}
                </Typography>
            </Box>
            </Modal>
        </>
    );
};

export default FooterModal;