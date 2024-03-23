// material-ui
import { Grid, LinearProgress, Typography } from '@mui/material';
import api from 'api/production';
import { openSnackbar } from 'api/snackbar';

// project import
import MainCard from 'components/MainCard';
import { useEffect, useState } from 'react';
import NewLot from 'sections/production/settings/gestion-lots/form';
import LotTable from 'sections/production/settings/gestion-lots/table';

// ==============================|| SAMPLE PAGE ||============================== //

const GestionLots = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [sites, setSites] = useState([]);
  const [siteId, setSiteId] = useState(null);
  const fetchProdLot = async () => {
    try {
      setLoading(true);
      const result = await api.getAllSites();
      if (result.status === 200) {
        console.log(result.data);
        setData(result?.data);
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'Échec de récupération des données; Veuillez réessayer.',
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
  const fetchProdSite = async () => {
    try {
      setLoading(true);
      const result = await api.getAllSites();
      if (result.status === 200) {
        console.log(result.data);
        setSites(result?.data);
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'Échec de récupération des données; Veuillez réessayer.',
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

  useEffect(() => {
    fetchProdSite();
    fetchProdLot();
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <MainCard title="Déclarer un Site">
          <NewLot fetchProdLot={fetchProdLot} sites={sites} setSiteId={setSiteId} siteId={siteId} />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <MainCard>
          {loading && <LinearProgress />}
          <LotTable data={data} fetchProdLot={fetchProdLot} />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default GestionLots;
