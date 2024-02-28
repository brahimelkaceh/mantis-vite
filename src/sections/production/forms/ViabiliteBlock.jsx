import { Button, Checkbox, FormControlLabel, Grid, InputLabel, Stack, TextField } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import React from 'react';

const ViabiliteBlock = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>Mortalité (Sujet)</InputLabel>
          <TextField
            id="mort"
            name="mort"
            placeholder="Mortalité (Sujet)"
            value={formik.values.mort}
            onChange={formik.handleChange}
            error={formik.touched.mort && Boolean(formik.errors.mort)}
            helperText={formik.touched.mort && formik.errors.mort}
            fullWidth
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>Triage (Sujet)</InputLabel>
          <TextField
            id="hensEliminated"
            name="hensEliminated"
            placeholder="Triage (Sujet)"
            fullWidth
            value={formik.values.hensEliminated}
            onChange={formik.handleChange}
            error={formik.touched.hensEliminated && Boolean(formik.errors.hensEliminated)}
            helperText={formik.touched.hensEliminated && formik.errors.hensEliminated}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>Poids corporel (g)</InputLabel>
          <TextField
            id="poidVif"
            name="poidVif"
            placeholder="Poids corporel (g)"
            fullWidth
            value={formik.values.poidVif}
            onChange={formik.handleChange}
            error={formik.touched.poidVif && Boolean(formik.errors.poidVif)}
            helperText={formik.touched.poidVif && formik.errors.poidVif}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>Homogeneité (%)</InputLabel>
          <TextField
            id="homog"
            name="homog"
            placeholder="Homogeneité (%)"
            fullWidth
            value={formik.values.homog}
            onChange={formik.handleChange}
            error={formik.touched.homog && Boolean(formik.errors.homog)}
            helperText={formik.touched.homog && formik.errors.homog}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ViabiliteBlock;
