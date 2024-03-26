import { useState } from 'react';

// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import api from 'api/pdf';
import { LoadingButton } from '@mui/lab';
import { DownloadOutlined } from '@ant-design/icons';

// ==============================|| DIALOG - FORM ||============================== //

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePdfClick = async (date) => {
    try {
      setLoading(true);
      await api.weekPerformnaceWeeklyPdf(date);
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
        État de production journalière
      </Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Synthèse hebdomadaire des performance :</DialogTitle>
        <DialogContent>
          <Stack spacing={0}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                id="date"
                label=""
                inputFormat="MM/dd/yyyy"
                value={date}
                name="date"
                onChange={(newValue) => setDate(newValue)}
              />
            </LocalizationProvider>
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
            onClick={() => handlePdfClick(date.toLocaleString('en-GB').split(',')[0].replaceAll('/', '-').split('-').reverse().join('-'))}
          >
            Télecharger
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
