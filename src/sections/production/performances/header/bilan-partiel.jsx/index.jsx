import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Divider, Grid, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import LotIdentification from './lot-identification';
import LastWeek from './last-week';
import BilanGlobal from './bilan';

const BilanPArtiel = ({ data, loading, expanded, setExpanded }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        '& .MuiAccordion-root': {
          borderColor: theme.palette.divider,
          borderRadius: 1,
          '& .MuiAccordionSummary-root': {
            bgcolor: 'transparent',
            flexDirection: 'row',
            '&:focus-visible': {
              bgcolor: 'primary.lighter'
            }
          },
          '& .MuiAccordionDetails-root': {
            borderColor: theme.palette.divider
          },
          '& .Mui-expanded': {
            color: theme.palette.primary.main
          }
        }
      }}
    >
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h5" fontWeight={'bold'}>
            Bilan partiel {loading && <CircularProgress color="inherit" size={18} />}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {data && (
            <Grid container spacing={2} justifyContent={'end'}>
              <Grid item md={6} xs={12}>
                <LotIdentification data={data} />
              </Grid>
              <Grid item md={6} xs={12}>
                <LastWeek data={data.week_data} />
              </Grid>
              <Grid item xs={12}>
                <BilanGlobal data={data} />
              </Grid>{' '}
            </Grid>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default BilanPArtiel;
