import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, CardContent, Grid, Link, Typography } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';

// assets
import { MessageFilled, ShoppingFilled, FileTextFilled, FileTextOutlined } from '@ant-design/icons';
import HeaderCard from './card-header';
import { useTheme } from '@emotion/react';

// ==============================|| DATA WIDGET - FEEDS ||============================== //

const WeatherCard = () => {
  const theme = useTheme();
  return (
    <MainCard title="Météo" content={false}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeaderCard primary="Site 1" secondary="01/03/2024 - 22:00" color={theme.palette.success.dark} />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item>
                <Box sx={{ position: 'relative' }}>
                  <Avatar color="primary" type="filled" size="sm">
                    <MessageFilled />
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="body2">
                      You have 3 pending tasks.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="left" variant="caption" color="secondary">
                      just now
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item>
                <Box sx={{ position: 'relative' }}>
                  <Avatar color="error" type="filled" size="sm">
                    <ShoppingFilled />
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="body2">
                      New order received
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="left" variant="caption" color="secondary">
                      1 day ago
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item>
                <Box sx={{ position: 'relative' }}>
                  <Avatar color="success" type="filled" size="sm">
                    <FileTextFilled />
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="body2">
                      You have 3 pending tasks.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="left" variant="caption" color="secondary">
                      3 week ago
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item>
                <Box sx={{ position: 'relative' }}>
                  <Avatar color="primary" type="filled" size="sm">
                    <MessageFilled />
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="body2">
                      New order received
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="left" variant="caption" color="secondary">
                      around month
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item>
                <Box sx={{ position: 'relative' }}>
                  <Avatar color="warning" type="filled" size="sm">
                    <ShoppingFilled />
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="body2">
                      Order cancelled
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="left" variant="caption" color="secondary">
                      2 month ago
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item>
                <Box sx={{ position: 'relative' }}>
                  <Avatar color="warning" type="filled" size="sm">
                    <ShoppingFilled />
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="body2">
                      Order cancelled
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="left" variant="caption" color="secondary">
                      2 month ago
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item>
                <Box sx={{ position: 'relative' }}>
                  <Avatar color="warning" type="filled" size="sm">
                    <ShoppingFilled />
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="body2">
                      Order cancelled
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="left" variant="caption" color="secondary">
                      2 month ago
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </MainCard>
  );
};

export default WeatherCard;
