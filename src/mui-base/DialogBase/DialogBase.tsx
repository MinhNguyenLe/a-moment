import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    DialogProps,
} from "@mui/material";

export interface DialogBaseProps extends DialogProps {
    onSave: () => void;
    onCancel: () => void;
    title: string;
    contentText: string;
}

const DialogBase = ({
    open,
    onSave,
    onCancel,
    onClose,
    title,
    contentText,
    ...props
}: DialogBaseProps) => {
    return (
        <Dialog open={open} onClose={onClose} {...props}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{contentText}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onSave} autoFocus>
                    Save
                </Button>
                <Button onClick={onCancel}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogBase;
