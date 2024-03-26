import { DownloadOutlined, FilePdfFilled, RightOutlined } from '@ant-design/icons';
import { LoadingButton } from '@mui/lab';
import { Avatar, ListItemAvatar, ListItemButton, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import api from 'api/pdf';
import { openSnackbar } from 'api/snackbar';
import React, { useState } from 'react';
import FormDialog from './dialog';

const DailySynthese = () => {
  return (
    <ListItemButton>
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
      <ListItemText primary={<FormDialog />} />
      <ListItemSecondaryAction>
        <LoadingButton color="info" variant="light" aria-label="open profile" aria-haspopup="true">
          <RightOutlined />
        </LoadingButton>
      </ListItemSecondaryAction>
    </ListItemButton>
  );
};

export default DailySynthese;
