import PropTypes from 'prop-types';

// material-ui
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import MainCard from 'components/MainCard';

// ===========================|| HOVER SOCIAL CARD ||=========================== //

const FirstCard = ({ primary, secondary, iconPrimary, color }) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary /> : null;

  return (
    <MainCard
      elevation={0}
      sx={{
        background: color,
        position: 'relative',
        color: '#fff',
        '&:hover svg': {
          opacity: 1,
          transform: 'scale(1.1)  rotate(180deg)'
        }
      }}
    >
      <CardContent>
        <Box
          sx={{
            position: 'absolute',
            right: 15,
            top: 25,
            color: '#fff',
            '& svg': {
              width: 80,
              height: 80,
              opacity: 0.5,
              transition: 'all .3s ease-in-out',
              transform: 'rotate(180deg)'
            }
          }}
        >
          {primaryIcon}
        </Box>
        <Stack flexDirection={'row'} alignItems={'start'}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="inherit">
                  Total Effectif
                </Typography>
              </Grid>
              <Typography variant="h3" color="inherit">
                381,826
              </Typography>
            </Grid>
          </Grid>{' '}
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="inherit">
                Age Moyen
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" color="inherit">
                61
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
    </MainCard>
  );
};

FirstCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string
};

export default FirstCard;
