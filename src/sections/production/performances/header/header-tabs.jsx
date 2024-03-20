import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import PreferencePanel from './preference-panel';
import BilanPArtiel from './bilan-partiel.jsx';
import api from 'api/production';
import { openSnackbar } from 'api/snackbar';

const HeaderTabs = ({ fetchPerformanceTable }) => {
  const [bilanData, setBilanData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const fetchBilanPartialData = async (id) => {
    try {
      setLoading(true);
      const result = await api.getBilanPartial(id);
      if (result.status === 200) {
        setBilanData(result.data);
        setLoading(false);
        setExpanded(true);
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
    <Grid item xs={12} container spacing={2}>
      <Grid item xs={12}>
        <MainCard>
          <PreferencePanel fetchBilanPartialData={fetchBilanPartialData} fetchPerformanceTable={fetchPerformanceTable} />
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <BilanPArtiel data={bilanData} loading={loading} setExpanded={setExpanded} expanded={expanded} />
      </Grid>
    </Grid>
  );
};

export default HeaderTabs;
