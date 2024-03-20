import { Grid, InputLabel, Stack, TextField, useTheme } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import React from 'react';

const ProductionBlock = ({ formik }) => {
  const theme = useTheme();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Stack spacing={0}>
          <InputLabel
            sx={{
              color: 'GrayText',
              fontSize: '13px'
            }}
            id="prod_normal-label"
          >
            Œufs normaux
          </InputLabel>
          <TextField
            labelId="prod_normal-label"
            id="prod_normal"
            name="prod_normal"
            autoFocus="true"
            value={formik?.values.prod_normal}
            onChange={formik?.handleChange}
            error={formik?.touched.prod_normal && Boolean(formik?.errors.prod_normal)}
            onBlur={formik?.handleBlur}
            helperText={formik?.touched.prod_normal && formik?.errors.prod_normal}
            fullWidth
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={0}>
          <InputLabel
            sx={{
              color: 'GrayText',
              fontSize: '13px'
            }}
            id="prod_dj-label"
          >
            Œufs double jaune
          </InputLabel>
          <TextField
            labelId="prod_dj-label"
            id="prod_dj"
            name="prod_dj"
            fullWidth
            value={formik?.values?.prod_dj}
            onChange={formik?.handleChange}
            error={formik?.touched.prod_dj && Boolean(formik?.errors.prod_dj)}
            onBlur={formik?.handleBlur}
            helperText={formik?.touched.prod_dj && formik?.errors.prod_dj}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={0}>
          <InputLabel
            sx={{
              color: 'GrayText',
              fontSize: '13px'
            }}
            id="prod_feles-label"
          >
            Sale
          </InputLabel>
          <TextField
            labelId="prod_feles-label"
            id="prod_feles"
            name="prod_feles"
            fullWidth
            value={formik?.values.prod_feles}
            onChange={formik?.handleChange}
            error={formik?.touched.prod_feles && Boolean(formik?.errors.prod_feles)}
            onBlur={formik?.handleBlur}
            helperText={formik?.touched.prod_feles && formik?.errors.prod_feles}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={0}>
          <InputLabel
            sx={{
              color: 'GrayText',
              fontSize: '13px'
            }}
            id="prod_casse-label"
          >
            Cassé
          </InputLabel>
          <TextField
            labelId="prod_casse-label"
            id="prod_casse"
            name="prod_casse"
            fullWidth
            value={formik?.values.prod_casse}
            onChange={formik?.handleChange}
            error={formik?.touched.prod_casse && Boolean(formik?.errors.prod_casse)}
            onBlur={formik?.handleBlur}
            helperText={formik?.touched.prod_casse && formik?.errors.prod_casse}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={0}>
          <InputLabel
            sx={{
              color: 'GrayText',
              fontSize: '13px'
            }}
            id="prod_blanc-label"
          >
            Œufs blancs
          </InputLabel>
          <TextField
            labelId="prod_blanc-label"
            id="prod_blanc"
            name="prod_blanc"
            fullWidth
            value={formik?.values.prod_blanc}
            onChange={formik?.handleChange}
            error={formik?.touched.prod_blanc && Boolean(formik?.errors.prod_blanc)}
            onBlur={formik?.handleBlur}
            helperText={formik?.touched.prod_blanc && formik?.errors.prod_blanc}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={0}>
          <InputLabel
            sx={{
              color: 'GrayText',
              fontSize: '13px'
            }}
            id="prod_liquide-label"
          >
            Liquide (kg)
          </InputLabel>
          <TextField
            labelId="prod_liquide-label"
            id="prod_liquide"
            name="prod_liquide"
            fullWidth
            value={formik?.values.prod_liquide}
            onChange={formik?.handleChange}
            error={formik?.touched.prod_liquide && Boolean(formik?.errors.prod_liquide)}
            onBlur={formik?.handleBlur}
            helperText={formik?.touched.prod_liquide && formik?.errors.prod_liquide}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={0}>
          <InputLabel
            sx={{
              color: 'GrayText',
              fontSize: '13px'
            }}
            id="prod_elimne-label"
          >
            Triage
          </InputLabel>
          <TextField
            labelId="prod_elimne-label"
            id="prod_elimne"
            name="prod_elimne"
            fullWidth
            value={formik?.values.prod_elimne}
            onChange={formik?.handleChange}
            error={formik?.touched.prod_elimne && Boolean(formik?.errors.prod_elimne)}
            onBlur={formik?.handleBlur}
            helperText={formik?.touched.prod_elimne && formik?.errors.prod_elimne}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack spacing={0}>
          <InputLabel
            sx={{
              color: 'GrayText',
              fontSize: '13px'
            }}
            id="pmo-label"
          >
            PMO (g)
          </InputLabel>
          <TextField
            labelId="pmo-label"
            id="pmo"
            name="pmo"
            fullWidth
            value={formik?.values.pmo}
            onChange={formik?.handleChange}
            error={formik?.touched.pmo && Boolean(formik?.errors.pmo)}
            onBlur={formik?.handleBlur}
            helperText={formik?.touched.pmo && formik?.errors.pmo}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductionBlock;
