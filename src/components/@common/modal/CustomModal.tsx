import { Box, Modal, ThemeProvider, createTheme } from '@mui/material';

import { useModalContext } from '@/contexts/modalContext';

const theme = createTheme();

const CustomModal = () => {
  const modalContext = useModalContext();
  const { isOpen, onClose, children } = modalContext;
  return (
    <ThemeProvider theme={theme}>
      <Modal open={isOpen} onClose={onClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </ThemeProvider>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '12px',
  width: '1100px',
  height: '700px',
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  paddingBottom: '2rem',
  borderRadius: '12px',
};
export default CustomModal;
