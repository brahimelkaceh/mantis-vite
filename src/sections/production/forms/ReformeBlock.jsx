import { Button, Checkbox, FormControlLabel, Grid, InputLabel, Stack, Switch, TextField } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import React from 'react';

const ReformeBlock = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <TextField
            fullWidth
            label="Sujets normaux"
            name="hensReformed"
            value={formik?.values?.hensReformed}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            error={formik?.errors.hensReformed && Boolean(formik?.errors.hensReformed)}
            helperText={formik?.touched.hensReformed && formik?.errors.hensReformed}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <TextField
            fullWidth
            label="Prix unitaire"
            name="price"
            value={formik?.values?.price}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            error={formik?.errors.price && Boolean(formik?.errors.price)}
            helperText={formik?.touched.price && formik?.errors.price}
          />
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Sujets gratuits"
          name="hensReformedFree"
          value={formik?.values?.hensReformedFree}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          error={formik?.errors.hensReformedFree && Boolean(formik?.errors.hensReformedFree)}
          helperText={formik?.touched.hensReformedFree && formik?.errors.hensReformedFree}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Sujets triage"
          name="hensReformedTriage"
          value={formik?.values?.hensReformedTriage}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          error={formik?.errors.hensReformedTriage && Boolean(formik?.errors.hensReformedTriage)}
          helperText={formik?.touched.hensReformedTriage && formik?.errors.hensReformedTriage}
        />
      </Grid>

      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Switch size="small" name="isKg" checked={formik?.values?.isKg ? true : false} onChange={(e) => formik?.handleChange(e)} />
          }
          label={formik?.values?.isKg ? 'Kg' : 'Sujet'}
        />
      </Grid>
    </Grid>
  );
};

export default ReformeBlock;
