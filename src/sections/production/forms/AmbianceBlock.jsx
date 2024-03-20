import { Button, Checkbox, Chip, FormControlLabel, Grid, InputLabel, Slider, Stack, Switch, TextField, Typography } from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AnimateButton from 'components/@extended/AnimateButton';
import React, { useState } from 'react';
import LightOn, { FlashDure, FlashOff, FlashOn, LightDure, LightOff } from './times-modals';
const marks = [
  {
    value: 0,
    label: '0°C'
  },
  {
    value: 20,
    label: '20°C'
  },
  {
    value: 37,
    label: '37°C'
  },
  {
    value: 100,
    label: '100°C'
  }
];

function valuetext(value) {
  return `${value}°C`;
}

const AmbianceBlock = ({ formik }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <Stack spacing={1} direction="row">
          <Typography id="input-slider" color={'textSecondary'} variant="caption" gutterBottom>
            Température intérieure
          </Typography>
          <Slider
            getAriaLabel={() => 'Température'}
            orientation="horizontal"
            name="temperatureInt"
            value={formik?.values?.temperatureInt}
            onChange={formik?.handleChange}
            marks={marks}
            getAriaValueText={valuetext}
            color="warning"
            valueLabelDisplay="auto"
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Stack spacing={1} direction="row">
          <Typography id="input-slider" gutterBottom variant="caption" color={'textSecondary'}>
            Température extérieure
          </Typography>
          <Slider
            getAriaLabel={() => 'Température'}
            orientation="horizontal"
            name="temperatureExt"
            value={formik?.values?.temperatureExt}
            onChange={formik?.handleChange}
            marks={marks}
            getAriaValueText={valuetext}
            color="warning"
            valueLabelDisplay
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <LightOn formik={formik} />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <LightOff formik={formik} />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <LightDure formik={formik} />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <FlashOn formik={formik} />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <FlashOff formik={formik} />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <FlashDure formik={formik} />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12}>
        <Stack flexDirection="row" gap={1} alignItems="center">
          <Chip size="small" label="Intensité" color="warning" variant="outlined" />
          <FormControlLabel
            control={
              <Switch
                name="intensIsLux"
                checked={formik?.values.intensIsLux}
                onChange={(e) => {
                  formik?.setFieldValue('intensIsLux', e.target.checked);
                }}
                size="small"
                color="primary"
              />
            }
            label={formik?.values.intensIsLux ? 'lux ' : '%'}
            labelPlacement="left"
          />
          <Slider
            valueLabelDisplay="on"
            name="intensite"
            value={formik?.values?.intensite}
            color="warning"
            onChange={(e) => {
              formik?.setFieldValue('intensite', e.target.value);
            }}
            max={formik?.values.intensIsLux ? 44 : 100}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AmbianceBlock;
