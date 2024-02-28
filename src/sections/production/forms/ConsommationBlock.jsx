import { Button, Checkbox, FormControlLabel, Grid, InputLabel, Stack, TextField } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import React from 'react';

const ConsommationBlock = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>Aliment consommé (Kg)</InputLabel>
          <TextField
            id="alimentDist"
            name="alimentDist"
            placeholder="Aliment consommé (Kg)"
            value={formik.values.alimentDist}
            onChange={formik.handleChange}
            error={formik.touched.alimentDist && Boolean(formik.errors.alimentDist)}
            helperText={formik.touched.alimentDist && formik.errors.alimentDist}
            fullWidth
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>Eau consommée (Litre)</InputLabel>
          <TextField
            id="eauDist"
            name="eauDist"
            placeholder="Eau consommée (Litre)"
            fullWidth
            value={formik.values.eauDist}
            onChange={formik.handleChange}
            error={formik.touched.eauDist && Boolean(formik.errors.eauDist)}
            helperText={formik.touched.eauDist && formik.errors.eauDist}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Stack spacing={1}>
          <InputLabel>Référence d'aliment</InputLabel>
          <TextField
            id="formule"
            name="formule"
            placeholder="Référence d'aliment"
            fullWidth
            value={formik.values.formule}
            onChange={formik.handleChange}
            error={formik.touched.formule && Boolean(formik.errors.formule)}
            helperText={formik.touched.formule && formik.errors.formule}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ConsommationBlock;
