import { useState } from "react";

const useToggleState = (defaultState: boolean = false) => {
    const [open, setOpen] = useState<boolean>(defaultState);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return {
        open,
        onOpen,
        onClose,
    };
};

export default useToggleState;
