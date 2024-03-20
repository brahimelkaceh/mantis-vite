import React, { forwardRef, useEffect, useMemo, useState } from 'react';

import {
  AppBar,
  Box,
  Button,
  Card,
  Dialog,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Modal,
  Slide,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import AltChart from './Chart';
import api from 'api/charts';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const AltChartContainer = ({ id, title }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchAlimentChartData = async (id) => {
    try {
      setLoading(true);
      const result = await api.getAlimentChartData(id);
      if (result.status === 200) {
        setData(result.data);
        setLoading(false);
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'Échec de récupération les donnees; Veuillez réessayer.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAlimentChartData(id);
  }, [id]);
  const handleClose = () => {
    setFullScreen(false);
  };
  if (fullScreen) {
    return (
      <Dialog fullScreen open={fullScreen} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar color="primary" sx={{ position: 'relative', marginBottom: 2 }}>
          <Toolbar>
            <Typography variant="caption">{title}</Typography>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Aliment / Oeuf{' '}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              fermer
            </Button>
          </Toolbar>
        </AppBar>
        {data && <AltChart data={data} show={fullScreen} />}
      </Dialog>
    );
  }
  return (
    <Card
      style={{
        height: '35vh',
        paddingBottom: 30
      }}
    >
      {loading && <LinearProgress />}
      <Stack flexDirection={'row'} justifyContent={'space-between'} gap={2} alignItems={'center'}>
        <Typography color="info" variant="caption">
          {title}
        </Typography>{' '}
        <Typography color="primary" variant="body2">
          Aliment / œuf
        </Typography>
        <IconButton
          color="primary"
          onClick={() => {
            setFullScreen(!fullScreen);
          }}
        >
          <FullscreenIcon></FullscreenIcon>
        </IconButton>
      </Stack>
      <Divider />

      <AltChart data={data} show={fullScreen} />
    </Card>
  );
};

export default AltChartContainer;
