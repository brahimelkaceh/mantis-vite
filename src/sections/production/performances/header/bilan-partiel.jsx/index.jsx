import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import LotIdentification from './lot-identification';
import LastWeek from './last-week';
import BilanGlobal from './bilan';

const BilanPArtiel = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        '& .MuiAccordion-root': {
          borderColor: theme.palette.divider,
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
      <Accordion defaultExpanded>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6">Un titre</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <LotIdentification />
            </Grid>
            <Grid item md={6} xs={12}>
              <LastWeek />
            </Grid>
            <Grid item xs={12}>
              <BilanGlobal />
            </Grid>{' '}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default BilanPArtiel;
