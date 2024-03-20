import { forwardRef, useEffect, useState } from 'react';

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
  Typography,
  useTheme,
  DialogContent,
  Grid,
  Stack,
  Box,
  DialogContentText,
  DialogActions
} from '@mui/material';

// project import
import IconButton from 'components/@extended/IconButton';

// assets
import { CloseOutlined, EditFilled } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import LoadingButton from 'components/@extended/LoadingButton';
import ReportForm from 'sections/production/report/ReportForm';
import { useFormik } from 'formik';
import { openSnackbar } from 'api/snackbar';
import { validationSchema } from 'pages/production/validation-schema';
import AnimateButton from 'components/@extended/AnimateButton';
import { Delete, Send } from '@mui/icons-material';
import { PopupTransition } from 'components/@extended/Transitions';
import api from 'api/production';

// ==============================|| DIALOG - DELETE ||============================== //

export default function DeleteModal({ id, lotId, fetchPerformanceTable }) {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteReport = async () => {
    try {
      setLoading(true);
      const result = await api.deleteReport(id);
      if (result.status === 200) {
        openSnackbar({
          open: true,
          message: 'Le rapport a été supprimé avec succès..',
          variant: 'alert',
          alert: {
            color: 'success'
          }
        });
        await fetchPerformanceTable(lotId);
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'La suppression du rapport a échoué; Veuillez réessayer.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LoadingButton size="small" color="error" variant="text" shape="square" onClick={handleClickOpen}>
        <Delete />
      </LoadingButton>
      <Dialog
        open={open}
        TransitionComponent={PopupTransition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          zIndex: 100000
        }}
      >
        <Box sx={{ p: 1, py: 1.5 }}>
          <DialogContent>
            <DialogContentText textAlign={'center'} lineHeight={2} variant="h1" id="alert-dialog-slide-description">
              La suppression de cet élément le supprimera définitivement du système. <br /> Voulez-vous vraiment continuer ?{id}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color="success"
              variant="outlined"
              onClick={() => {
                deleteReport();
                handleClose();
                setOpen(false);
              }}
            >
              Confirmer
            </Button>
            <Button variant="contained" color="error" onClick={() => setOpen(false)}>
              Annuler
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}
