import { Box, Modal, ThemeProvider, createTheme } from '@mui/material';

import { removeLastQueryParam } from '@/utils/removeLastQueryParam';

import { useModalContext, useModalDispatch } from '@/contexts/modalContext';

const theme = createTheme();

const CustomModal = () => {
  const modalContext = useModalContext();
  const dispatch = useModalDispatch();
  const { isOpen, style, children } = modalContext;
  const modalStyle = { ...baseStyle, ...style };

  const handleClose = () => {
    const originalUrl = window.location.href;
    const modifiedUrl = removeLastQueryParam(originalUrl);

    window.history.pushState({}, '', modifiedUrl);
    dispatch({
      type: 'CLOSE_MODAL',
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal open={isOpen} onClose={handleClose}>
        <Box sx={modalStyle}>{children}</Box>
      </Modal>
    </ThemeProvider>
  );
};

const baseStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '12px',
  minWidth: '1100px',
  height: '700px',
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  paddingBottom: '2rem',
  borderRadius: '12px',
};
export default CustomModal;
