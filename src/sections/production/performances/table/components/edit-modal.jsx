import { forwardRef, useState } from 'react';

// material-ui
import {
  Avatar,
  AppBar,
  Button,
  Dialog,
  Divider,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Slide,
  Toolbar,
  Typography
} from '@mui/material';

// project import
import IconButton from 'components/@extended/IconButton';

// assets
import { CloseOutlined, EditFilled } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import LoadingButton from 'components/@extended/LoadingButton';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// ==============================|| DIALOG - FULL SCREEN ||============================== //

export default function EditModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <LoadingButton size="small" color="warning" variant="outlined" shape="square" onClick={handleClickOpen}>
        <EditFilled />
      </LoadingButton>{' '}
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', boxShadow: 'none' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="div">
              Modifier le rapport
            </Typography>
            <Button color="error" endIcon={<CloseOutlined />} variant="contained" onClick={handleClose}>
              Fermer
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </>
  );
}
