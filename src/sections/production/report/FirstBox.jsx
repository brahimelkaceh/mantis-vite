import { ClockCircleOutlined, PictureOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
// import { Egg } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Icon, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useState } from 'react';
import ProductionBlock from '../forms/ProductionBlock';

const FirstBox = ({ formik }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(true);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : true);
  };
  return (
    <Box
      sx={{
        '& .MuiAccordion-root': {
          borderColor: theme.palette.divider,
          '& .MuiAccordionSummary-root': {
            borderRadius: 1,
            flexDirection: 'row'
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
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary className="production" aria-controls="panel1d-content" id="panel1d-header">
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Typography variant="h6">Production </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <ProductionBlock formik={formik} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FirstBox;
