import { useState } from 'react';

// material-ui
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import api from 'api/pdf';
import { LoadingButton } from '@mui/lab';
import { DownloadOutlined } from '@ant-design/icons';
import { openSnackbar } from 'api/snackbar';

// ==============================|| DIALOG - FORM ||============================== //

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePdfClick = async (age) => {
    if (age === ' ' || age <= 17) {
      openSnackbar({
        open: true,
        message: "L'âge doit être supérieur à 18 ans pour télécharger le rapport.",
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
      return;
    }
    try {
      setLoading(true);
      await api.SyntheseParAgePdf(age);
      openSnackbar({
        open: true,
        message: 'PDF téléchargé avec succès !',
        variant: 'alert',
        alert: {
          color: 'success'
        }
      });
    } catch (error) {
      console.error('Error:', error);
      openSnackbar({
        open: true,
        message: 'Échec du téléchargement du PDF. Veuillez réessayer plus tard.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
    } finally {
      setLoading(false); // Set loading to false when the fetch is complete
    }
  };
  return (
    <>
      <Typography variant="h6" onClick={handleClickOpen}>
        Synthèse par âge figé
      </Typography>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ p: 1, py: 1.5 }}>
          <DialogTitle>Synthèse par âge figé :</DialogTitle>
          <DialogContent>
            <Stack spacing={0}>
              <TextField
                autoFocus
                required
                type="number"
                placeholder="Âge"
                fullWidth
                variant="outlined"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button color="error" variant="outlined" onClick={handleClose}>
              Annuller
            </Button>
            <LoadingButton
              loading={loading}
              endIcon={<DownloadOutlined />}
              variant="contained"
              color="success"
              onClick={() => handlePdfClick(age)}
            >
              Télecharger
            </LoadingButton>
          </DialogActions>{' '}
        </Box>
      </Dialog>
    </>
  );
}
