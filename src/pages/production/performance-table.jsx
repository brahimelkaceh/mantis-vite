// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import HeaderTabs from 'sections/production/performances/header/header-tabs';
import ProductionPerformanceTable from 'sections/production/performances/table/performance-table';

// ==============================|| SAMPLE PAGE ||============================== //

const PerformanceTable = () => (
  <Grid container spacing={2}>
    <HeaderTabs />
    <ProductionPerformanceTable />
  </Grid>
);

export default PerformanceTable;
