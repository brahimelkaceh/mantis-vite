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
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
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
            name="hover-feedback"
            value={value}
            precision={1}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
          {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
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
            name="hover-feedback"
            value={value}
            precision={1}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            icon={<Egg fontSize="inherit" />}
            emptyIcon={<EggOutlined fontSize="inherit" />}
          />
          {value !== null && <Box sx={{ ml: 2 }}>{colors[hover !== -1 ? hover : value]}</Box>}
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
            value={formik.values.observation}
            onChange={formik.handleChange}
            error={formik.touched.observation && Boolean(formik.errors.observation)}
            helperText={formik.touched.observation && formik.errors.observation}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ConstatsBlock;
