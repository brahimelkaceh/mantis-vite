// material-ui
import { Grid, LinearProgress, Typography } from '@mui/material';
import api from 'api/production';
import { openSnackbar } from 'api/snackbar';

// project import
import MainCard from 'components/MainCard';
import { useEffect, useState } from 'react';
import NewSite from 'sections/production/settings/gestion-sites/form';
import SiteTable from 'sections/production/settings/gestion-sites/table';

// ==============================|| SAMPLE PAGE ||============================== //

const GestionSite = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchProdSite = async () => {
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
  useEffect(() => {
    fetchProdSite();
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <MainCard title="Déclarer un Site">
          <NewSite fetchProdSite={fetchProdSite} />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <MainCard>
          {loading && <LinearProgress />}
          <SiteTable data={data} fetchProdSite={fetchProdSite} />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default GestionSite;
