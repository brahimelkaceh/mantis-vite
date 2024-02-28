import { ClockCircleOutlined, PictureOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
// import { Egg } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Icon, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useState } from 'react';
import ProductionBlock from '../forms/ProductionBlock';
const HeartSvg = () => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 926.000000 1280.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" stroke="none">
      <path
        d="M4590 12790 c-504 -70 -1061 -319 -1550 -694 -180 -137 -298 -243
-500 -445 -205 -205 -343 -365 -514 -591 -809 -1074 -1427 -2586 -1821 -4455
-397 -1880 -213 -3379 554 -4523 644 -962 1746 -1656 3111 -1960 415 -93 737
-131 945 -113 444 40 933 150 1360 308 677 251 1220 590 1686 1053 235 234
352 373 521 620 794 1159 1050 2750 762 4740 -94 651 -444 1797 -817 2675
-547 1291 -1251 2277 -2015 2823 -359 258 -747 434 -1126 512 -224 47 -470 67
-596 50z"
      />
    </g>
  </svg>
);
const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;

const FirstBox = ({ formik }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box
      sx={{
        '& .MuiAccordion-root': {
          borderColor: theme.palette.divider,
          '& .MuiAccordionSummary-root': {
            bgcolor: '#8b4513',
            flexDirection: 'row'
          },
          '& .MuiAccordionDetails-root': {
            borderColor: theme.palette.divider
          },
          '& .Mui-expanded': {
            color: 'inherit',
            fontWeight: 'bold',
            borderRadius: 1,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }
        }
      }}
    >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Stack direction="row" spacing={1.5} alignItems="center">
            {/* <Egg /> */}
            {/* <HeartIcon style={{ color: 'hotpink' }} /> */}

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
