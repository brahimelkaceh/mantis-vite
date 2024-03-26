import { DownloadOutlined, FilePdfFilled } from '@ant-design/icons';
import { LoadingButton } from '@mui/lab';
import { Avatar, ListItemAvatar, ListItemButton, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import api from 'api/pdf';
import { openSnackbar } from 'api/snackbar';
import React, { useState } from 'react';

const PendingWeek = () => {
  const [loading, setLoading] = useState(false);
  const handlePdfClick = async (id) => {
    try {
      setLoading(true);
      await api.productionWeekSynthesePdf(id);
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
    <ListItemButton onClick={() => handlePdfClick(0)}>
      <ListItemAvatar>
        <Avatar
          sx={{
            color: 'error.main',
            bgcolor: 'error.lighter'
          }}
        >
          <FilePdfFilled />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={<Typography variant="h6">Synthèse Semaine en cours</Typography>} />
      <ListItemSecondaryAction>
        <LoadingButton loading={loading} color="info" variant="light" aria-label="open profile" aria-haspopup="true">
          <DownloadOutlined />
        </LoadingButton>
      </ListItemSecondaryAction>
    </ListItemButton>
  );
};

export default PendingWeek;
