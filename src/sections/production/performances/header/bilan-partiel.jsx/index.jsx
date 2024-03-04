import { Divider, Grid } from '@mui/material';
import React from 'react';
import LotIdentification from './lot-identification';
import LastWeek from './last-week';
import BilanGlobal from './bilan-global';

const BilanPArtiel = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <LotIdentification />
      </Grid>
      <Grid item md={6} xs={12}>
        <LastWeek />
      </Grid>
      <Grid item xs={12}>
        <BilanGlobal />
      </Grid>
    </Grid>
  );
};

export default BilanPArtiel;
