import { Grid, Stack, TextField } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import React from 'react';

const ConsommationBlock = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <TextField
            id="alimentDist"
            name="alimentDist"
            label="Aliment consommé (Kg)"
            value={formik.values.alimentDist}
            onChange={formik.handleChange}
            error={formik.touched.alimentDist && Boolean(formik.errors.alimentDist)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.alimentDist && formik.errors.alimentDist}
            fullWidth
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <TextField
            id="eauDist"
            name="eauDist"
            label="Eau consommée (Litre)"
            fullWidth
            value={formik.values.eauDist}
            onChange={formik.handleChange}
            error={formik.touched.eauDist && Boolean(formik.errors.eauDist)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.eauDist && formik.errors.eauDist}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Stack spacing={1}>
          <TextField
            id="formule"
            name="formule"
            label="Référence d'aliment"
            fullWidth
            value={formik.values.formule}
            onChange={formik.handleChange}
            error={formik.touched.formule && Boolean(formik.errors.formule)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.formule && formik.errors.formule}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ConsommationBlock;
