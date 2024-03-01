import PropTypes from 'prop-types';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import { ClockCircleOutlined } from '@ant-design/icons';

// ==============================|| REPORT CARD ||============================== //

const HeaderCard = ({ primary, secondary, iconPrimary, color }) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;
  const iconSX = {
    fontSize: '0.675rem'
  };

  return (
    <MainCard>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Stack spacing={1}>
            <Typography variant="h4">{primary}</Typography>
            <Stack
              sx={{
                padding: 0.1
              }}
              alignItems={'center'}
              flexDirection={'row'}
              gap={1}
            >
              <Typography variant="caption" color="secondary">
                {secondary}
              </Typography>
              <ClockCircleOutlined style={iconSX} />
            </Stack>
          </Stack>
        </Grid>
        <Grid item>
          <Typography variant="h2" style={{ color }}>
            {primaryIcon}
          </Typography>
        </Grid>
      </Grid>
    </MainCard>
  );
};

HeaderCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string
};

export default HeaderCard;
