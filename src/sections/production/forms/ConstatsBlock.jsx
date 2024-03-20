import { SmileOutlined } from '@ant-design/icons';
import { Egg, EggOutlined, Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box, Button, Checkbox, FormControlLabel, Grid, InputLabel, Rating, Stack, TextField, Typography, styled } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import React, { useState } from 'react';
const labels = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5'
};
const colors = {
  1: '70',
  2: '80',
  3: '90',
  4: '100',
  5: '110'
};
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#b26046'
  },
  '& .MuiRating-iconHover': {
    color: '#a13311'
  }
});
const ConstatsBlock = ({ formik }) => {
  const [hoverShell, setHoverShell] = useState(-1);
  const [hoverColoration, setHoverColoration] = useState(-1);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography color={'textSecondary'} variant="caption">
          {' '}
          Qualité de coquille
        </Typography>
        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Rating
            value={formik?.values.qty_shell}
            name="qty-shell"
            precision={1}
            onChange={(event, newValue) => {
              formik?.setFieldValue('qty_shell', newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHoverShell(newHover);
            }}
          />
          {formik?.values.qty_shell !== null && (
            <Box sx={{ ml: 2 }}>{labels[hoverShell !== -1 ? hoverShell : formik?.values.qty_shell]}</Box>
          )}
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography color={'textSecondary'} variant="caption">
          Coloration
        </Typography>

        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <StyledRating
            name="coloration"
            value={formik?.values.coloration}
            precision={1}
            onChange={(event, newValue) => {
              formik?.setFieldValue('coloration', newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHoverColoration(newHover);
            }}
            icon={<Egg fontSize="inherit" />}
            emptyIcon={<EggOutlined fontSize="inherit" />}
          />
          {formik?.values.coloration !== null && (
            <Box sx={{ ml: 2 }}>{colors[hoverColoration !== -1 ? hoverColoration : formik?.values.coloration]}</Box>
          )}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={1}>
          <TextField
            id="observation"
            name="observation"
            placeholder="Observation"
            multiline
            rows={4}
            fullWidth
            value={formik?.values.observation}
            onChange={formik?.handleChange}
            error={formik?.touched.observation && Boolean(formik?.errors.observation)}
            helperText={formik?.touched.observation && formik?.errors.observation}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ConstatsBlock;
