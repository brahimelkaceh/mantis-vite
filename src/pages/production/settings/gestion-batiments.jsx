// material-ui
import { Grid, InputLabel, LinearProgress, MenuItem, Select, Stack, Typography } from '@mui/material';
import api from 'api/production';
import { openSnackbar } from 'api/snackbar';

// project import
import MainCard from 'components/MainCard';
import { useEffect, useState } from 'react';
import NewBatiment from 'sections/production/settings/gestion-batiments/form';
import BatimentTable from 'sections/production/settings/gestion-batiments/table';

// ==============================|| SAMPLE PAGE ||============================== //

const GestionBatiments = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [sites, setSites] = useState([]);
  const [siteId, setSiteId] = useState(null);
  const fetchBatiments = async () => {
    try {
      setLoading(true);
      const result = await api.getAllBatiments();
      if (result.status === 200) {
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
    fetchBatiments();
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <MainCard title="Déclarer un bâtiment">
          <NewBatiment fetchBatiments={fetchBatiments} />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <MainCard>
          {loading && <LinearProgress />}
          <BatimentTable data={data} fetchBatiments={fetchBatiments} />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default GestionBatiments;
