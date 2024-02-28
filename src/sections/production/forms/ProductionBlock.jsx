import { Button, Checkbox, FormControlLabel, Grid, InputLabel, Stack, TextField } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import React from 'react';

const ProductionBlock = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>Œufs normaux</InputLabel>
          <TextField
            id="prod_normal"
            name="prod_normal"
            placeholder="Œufs normaux"
            value={formik.values.prod_normal}
            onChange={formik.handleChange}
            error={formik.touched.prod_normal && Boolean(formik.errors.prod_normal)}
            helperText={formik.touched.prod_normal && formik.errors.prod_normal}
            fullWidth
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>Œufs double jaune</InputLabel>
          <TextField
            id="prod_dj"
            name="prod_dj"
            placeholder="Œufs double jaune"
            fullWidth
            value={formik.values.prod_dj}
            onChange={formik.handleChange}
            error={formik.touched.prod_dj && Boolean(formik.errors.prod_dj)}
            helperText={formik.touched.prod_dj && formik.errors.prod_dj}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>Sale</InputLabel>
          <TextField
            id="prod_feles"
            name="prod_feles"
            placeholder="Sale"
            fullWidth
            value={formik.values.prod_feles}
            onChange={formik.handleChange}
            error={formik.touched.prod_feles && Boolean(formik.errors.prod_feles)}
            helperText={formik.touched.prod_feles && formik.errors.prod_feles}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>Cassé</InputLabel>
          <TextField
            id="prod_casse"
            name="prod_casse"
            placeholder="Cassé"
            fullWidth
            value={formik.values.prod_casse}
            onChange={formik.handleChange}
            error={formik.touched.prod_casse && Boolean(formik.errors.prod_casse)}
            helperText={formik.touched.prod_casse && formik.errors.prod_casse}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>Œufs blancs</InputLabel>
          <TextField
            id="prod_blanc"
            name="prod_blanc"
            placeholder="Œufs blancs"
            fullWidth
            value={formik.values.prod_blanc}
            onChange={formik.handleChange}
            error={formik.touched.prod_blanc && Boolean(formik.errors.prod_blanc)}
            helperText={formik.touched.prod_blanc && formik.errors.prod_blanc}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>Liquide (kg)</InputLabel>
          <TextField
            id="prod_liquide"
            name="prod_liquide"
            placeholder="Liquide (kg)"
            fullWidth
            value={formik.values.prod_liquide}
            onChange={formik.handleChange}
            error={formik.touched.prod_liquide && Boolean(formik.errors.prod_liquide)}
            helperText={formik.touched.prod_liquide && formik.errors.prod_liquide}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>Triage</InputLabel>
          <TextField
            id="prod_elimne"
            name="prod_elimne"
            placeholder="Triage"
            fullWidth
            value={formik.values.prod_elimne}
            onChange={formik.handleChange}
            error={formik.touched.prod_elimne && Boolean(formik.errors.prod_elimne)}
            helperText={formik.touched.prod_elimne && formik.errors.prod_elimne}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={1}>
          <InputLabel>PMO (g)</InputLabel>
          <TextField
            id="pmo"
            name="pmo"
            placeholder="PMO (g)"
            fullWidth
            value={formik.values.pmo}
            onChange={formik.handleChange}
            error={formik.touched.pmo && Boolean(formik.errors.pmo)}
            helperText={formik.touched.pmo && formik.errors.pmo}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductionBlock;
