import React, { forwardRef, useEffect, useMemo, useState } from 'react';

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import {
  AppBar,
  Box,
  Button,
  Card,
  CircularProgress,
  Dialog,
  Divider,
  LinearProgress,
  Modal,
  Slide,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ProductionChart from './chart';
import api from 'api/charts';
import { openSnackbar } from 'api/snackbar';
import MainCard from 'components/MainCard';
let base_url = 'https://farmdriver.savas.ma/api/';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ProductionContainer = ({ id, title }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProductionChartData = async (id) => {
    try {
      setLoading(true);
      const result = await api.getProductionChartData(id);
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
    fetchProductionChartData(id);
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
              Production œufs
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              fermer
            </Button>
          </Toolbar>
        </AppBar>
        {data && <ProductionChart data={data} show={fullScreen} />}
        {/* {loading && <Loader />} */}
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
          Production œufs
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

      <ProductionChart data={data} show={fullScreen} />
      {/* {loading && <Loader />} */}
    </Card>
  );
};

export default ProductionContainer;
