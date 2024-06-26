import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { colorRojo, theme } from '@/styled-components/button.styled';


interface PopUpProps {
    show: boolean;
    image: string;
    onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ show, image, onClose }) => {
    return (
        <Dialog open={show} onClose={onClose}>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    bgcolor: colorRojo, 
                    color: theme.palette.secondary.contrastText, 
                    '&:hover': {
                      bgcolor: theme.palette.secondary.dark, 
                    },
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <img src={image} alt="imagen" style={{ width: '100%' }} />
            </DialogContent>
        </Dialog>
    );
};

export default PopUp;