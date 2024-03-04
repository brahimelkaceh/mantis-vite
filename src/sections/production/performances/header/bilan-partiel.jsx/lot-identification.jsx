import { Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const LotIdentification = () => {
  return (
    <Grid container spacing={3.5}>
      <Grid item xs={12}>
        <Typography color={'Highlight'} variant="h5">
          Identification de lot :
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item lg={4} xs={6}>
            <Typography variant="subtitle1">Lhomann BROWN</Typography>
          </Grid>
          <Grid item lg={4} xs={6}>
            <Stack flexDirection={'row'} gap={1} alignItems={'end'}>
              <Typography color={'textSecondary'} variant="caption">
                Semaine:
              </Typography>
              <Typography variant="subtitle1" color="primary">
                73
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} xs={6}>
            <Stack flexDirection={'row'} gap={1} alignItems={'end'}>
              <Typography color={'textSecondary'} variant="caption">
                Né le:
              </Typography>
              <Typography variant="subtitle1">11/10/2023</Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} xs={6}>
            <Stack flexDirection={'row'} gap={1} alignItems={'end'}>
              <Typography color={'textSecondary'} variant="caption">
                Effectif départ:
              </Typography>
              <Typography variant="subtitle1">110,122</Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} xs={6}>
            <Stack flexDirection={'row'} gap={1} alignItems={'end'}>
              <Typography color={'textSecondary'} variant="caption">
                Mortalité:
              </Typography>
              <Typography variant="subtitle1">9,253</Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} xs={6}>
            <Stack flexDirection={'row'} gap={1} alignItems={'end'}>
              <Typography color={'textSecondary'} variant="caption">
                Effectif présent:
              </Typography>
              <Typography variant="subtitle1">201,005</Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} xs={6}>
            <Stack flexDirection={'row'} gap={1} alignItems={'end'}>
              <Typography color={'textSecondary'} variant="caption">
                Production totale:
              </Typography>
              <Typography variant="subtitle1">71,457,190</Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} xs={6}>
            <Stack flexDirection={'row'} gap={1} alignItems={'end'}>
              <Typography color={'textSecondary'} variant="caption">
                Déclassés:
              </Typography>
              <Typography variant="subtitle1">18,389</Typography>
              <Typography color={'info'} variant="caption">
                (1.63%)
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} xs={6}>
            <Stack flexDirection={'row'} gap={1} alignItems={'end'}>
              <Typography color={'textSecondary'} variant="caption">
                Consommation:
              </Typography>
              <Typography variant="subtitle1">450,278.89 T</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LotIdentification;
