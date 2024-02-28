import { Button, Checkbox, FormControlLabel, Grid, InputLabel, Stack, TextField } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import React from 'react';

const ViabiliteBlock = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <TextField
            id="mort"
            name="mort"
            label="Mortalité (Sujet)"
            value={formik.values.mort}
            onChange={formik.handleChange}
            error={formik.touched.mort && Boolean(formik.errors.mort)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.mort && formik.errors.mort}
            fullWidth
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <TextField
            id="hensEliminated"
            name="hensEliminated"
            label="Triage (Sujet)"
            fullWidth
            value={formik.values.hensEliminated}
            onChange={formik.handleChange}
            error={formik.touched.hensEliminated && Boolean(formik.errors.hensEliminated)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.hensEliminated && formik.errors.hensEliminated}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <TextField
            id="poidVif"
            name="poidVif"
            label="Poids corporel (g)"
            fullWidth
            value={formik.values.poidVif}
            onChange={formik.handleChange}
            error={formik.touched.poidVif && Boolean(formik.errors.poidVif)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.poidVif && formik.errors.poidVif}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <TextField
            id="homog"
            name="homog"
            label="Homogeneité (%)"
            fullWidth
            value={formik.values.homog}
            onChange={formik.handleChange}
            error={formik.touched.homog && Boolean(formik.errors.homog)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.homog && formik.errors.homog}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ViabiliteBlock;
