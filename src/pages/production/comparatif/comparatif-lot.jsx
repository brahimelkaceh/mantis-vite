// material-ui
import { Grid, LinearProgress, Typography } from '@mui/material';
import api from 'api/charts';
import { openSnackbar } from 'api/snackbar';

// project import
import MainCard from 'components/MainCard';
import { useEffect, useState } from 'react';
import Body from 'sections/production/comparatif/comparatif-lot/Body';
import Header from 'sections/production/comparatif/comparatif-lot/Header';

// ==============================|| SAMPLE PAGE ||============================== //

const ComparatifLot = () => {
  const [courbeId, setCourbeId] = useState('');
  const [lotName, setLotName] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchComparChartData = async (lotName, courbeId) => {
    if (!lotName || (courbeId !== 0 && !courbeId)) {
      return;
    }
    console.log(courbeId);
    try {
      setLoading(true);
      const result = await api.getComparCharts(lotName, courbeId);
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
    fetchComparChartData(lotName, courbeId);
  }, [lotName, courbeId]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard>
          <Header lotName={lotName} setLotName={setLotName} setCourbeId={setCourbeId} />
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard title={loading && <LinearProgress />}>
          <Body data={data} courbeId={courbeId} />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ComparatifLot;
