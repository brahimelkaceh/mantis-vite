// material-ui
import { Grid, LinearProgress, Typography } from '@mui/material';
import api from 'api/production';

// project import
import MainCard from 'components/MainCard';
import { useState } from 'react';
import HeaderTabs from 'sections/production/performances/header/header-tabs';
import ProductionPerformanceTable from 'sections/production/performances/table/performance-table';

// ==============================|| SAMPLE PAGE ||============================== //

const PerformanceTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchPerformanceTable = async (id) => {
    try {
      setLoading(true);
      const result = await api.getPerformanceTable(id);
      if (result.status === 200) {
        console.log(result.data);
        setData(result.data);
        setLoading(false);
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'Échec de récupération les données; Veuillez réessayer.',
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
  return (
    <Grid container spacing={2}>
      <HeaderTabs fetchPerformanceTable={fetchPerformanceTable} />
      <ProductionPerformanceTable data={data} loading={loading} fetchPerformanceTable={fetchPerformanceTable} />
    </Grid>
  );
};

export default PerformanceTable;
