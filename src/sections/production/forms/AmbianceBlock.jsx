import { Button, Checkbox, Chip, FormControlLabel, Grid, InputLabel, Slider, Stack, Switch, TextField, Typography } from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AnimateButton from 'components/@extended/AnimateButton';
import React, { useState } from 'react';
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
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <Stack spacing={1} direction="row">
          <Typography id="input-slider" color={'textSecondary'} variant="caption" gutterBottom>
            Température intérieure
          </Typography>
          <Slider
            getAriaLabel={() => 'Temperature'}
            orientation="horizontal"
            defaultValue={[20, 37]}
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
            getAriaLabel={() => 'Temperature'}
            orientation="horizontal"
            defaultValue={[20, 37]}
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
            <TimePicker label="Allumage de lumiére" value={value} onChange={handleChange} />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <TimePicker label="Extinction de lumière" value={value} onChange={handleChange} />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <TimePicker label="Durée de flash" value={value} onChange={handleChange} />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <TimePicker label="Allumage de flash" value={value} onChange={handleChange} />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <TimePicker label="Extinction de lumière" value={value} onChange={handleChange} />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <TimePicker label="Durée de flash" value={value} onChange={handleChange} />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12}>
        <Stack flexDirection="row" gap={1} alignItems="center">
          <Chip size="small" label="Intensité" color="warning" variant="outlined" />
          <FormControlLabel value="top" control={<Switch size="small" color="primary" />} label="%" labelPlacement="left" />
          <Slider valueLabelDisplay="on" defaultValue={30} color="warning" />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AmbianceBlock;
