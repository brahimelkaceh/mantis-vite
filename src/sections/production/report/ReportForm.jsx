import { ClockCircleOutlined, PictureOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useState } from 'react';
import FirstBox from './FirstBox';
import SecondBox from './SecondBox';
import ThirdBox from './ThirdBox';
import FourthBox from './FourthBox';
import FifthBox from './FifthBox';
import SixthBox from './SixthBox';

const ReportForm = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <SecondBox formik={formik} />
      </Grid>
      <Grid item sm={12} md={6}>
        <FourthBox formik={formik} />
      </Grid>
      <Grid item sm={12} md={6}>
        <FirstBox formik={formik} />
      </Grid>
      <Grid item sm={12} md={6}>
        <FifthBox formik={formik} />
      </Grid>
      <Grid item sm={12} md={6}>
        <ThirdBox formik={formik} />
      </Grid>
      <Grid item sm={12} md={6}>
        <SixthBox formik={formik} />
      </Grid>
    </Grid>
  );
};

export default ReportForm;
