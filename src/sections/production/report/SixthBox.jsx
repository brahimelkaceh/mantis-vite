import { Accordion, AccordionDetails, AccordionSummary, Box, Icon, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useState } from 'react';
import ReformeBlock from '../forms/ReformeBlock';

const SixthBox = ({ formik }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box
      sx={{
        '& .MuiAccordion-root': {
          borderColor: theme.palette.divider,
          '& .MuiAccordionSummary-root': {
            flexDirection: 'row',
            borderRadius: 1
          },
          '& .MuiAccordionDetails-root': {
            borderColor: theme.palette.divider
          },
          '& .Mui-expanded': {
            fontWeight: 'bold',
            borderRadius: 1,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }
        }
      }}
    >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className="reforme" aria-controls="panel1d-content" id="panel1d-header">
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Typography variant="h6">Réforme </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <ReformeBlock formik={formik} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SixthBox;
