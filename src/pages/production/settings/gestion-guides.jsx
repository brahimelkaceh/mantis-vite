// material-ui
import { Grid, Typography } from '@mui/material';
import api from 'api/production';
import { openSnackbar } from 'api/snackbar';

// project import
import MainCard from 'components/MainCard';
import { useState } from 'react';
import GuideTable from 'sections/production/settings/gestion-guides/guide-table';
import SoucheTable from 'sections/production/settings/gestion-guides/souche-table';

// ==============================|| SAMPLE PAGE ||============================== //

const GestionGuides = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchGuideData = async (id) => {
    try {
      setLoading(true);
      const result = await api.getGuideData(id);

      if (result.status === 200) {
        setData(result.data);
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
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <GuideTable fetchGuideData={fetchGuideData} />
      </Grid>
      <Grid item xs={12}>
        <SoucheTable data={data} loading={loading} />
      </Grid>
    </Grid>
  );
};

export default GestionGuides;
