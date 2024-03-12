// material-ui
import { TwitterOutlined, ProjectOutlined } from '@ant-design/icons';
import { Box, Button, Grid, Stack, Typography, useTheme } from '@mui/material';
import api from 'api/production';
import MainCard from 'components/MainCard';

// project import
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import { useEffect, useState } from 'react';
import IncomeAreaChart from 'sections/dashboard/default/IncomeAreaChart';
import FirstCard from 'sections/production/dashboard/cards/first-card';
import WeatherCard from 'sections/production/dashboard/cards/weather/weather-card';

// ==============================|| SAMPLE PAGE ||============================== //

const Dashboard = () => {
  const theme = useTheme();
  const [slot, setSlot] = useState('week');
  const fetchPoussLot = async () => {
    try {
      const result = await api.getProdSites();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPoussLot();
  }, []);
  return (
    <Grid container alignItems={'start'} rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item container rowSpacing={3} columnSpacing={2.75} xs={12} lg={9} sm={6}>
        <Grid item xs={12} lg={4} sm={6}>
          <FirstCard primary="Twitter Users" secondary="780 +" iconPrimary={ProjectOutlined} color={theme.palette.info.main} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
        </Grid>
        <Grid item container spacing={3} xs={12}>
          <Grid item xs={6}>
            <MainCard>
              <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h5">Unique Visitor</Typography>
                  </Grid>
                  <Grid item>
                    <Stack direction="row" alignItems="center" spacing={0}>
                      <Button
                        size="small"
                        onClick={() => setSlot('month')}
                        color={slot === 'month' ? 'primary' : 'secondary'}
                        variant={slot === 'month' ? 'outlined' : 'text'}
                      >
                        Month
                      </Button>
                      <Button
                        size="small"
                        onClick={() => setSlot('week')}
                        color={slot === 'week' ? 'primary' : 'secondary'}
                        variant={slot === 'week' ? 'outlined' : 'text'}
                      >
                        Week
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
                <Box sx={{ pt: 1 }}>
                  <IncomeAreaChart slot={slot} />
                </Box>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={6}>
            <MainCard>
              <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h5">Unique Visitor</Typography>
                  </Grid>
                  <Grid item>
                    <Stack direction="row" alignItems="center" spacing={0}>
                      <Button
                        size="small"
                        onClick={() => setSlot('month')}
                        color={slot === 'month' ? 'primary' : 'secondary'}
                        variant={slot === 'month' ? 'outlined' : 'text'}
                      >
                        Month
                      </Button>
                      <Button
                        size="small"
                        onClick={() => setSlot('week')}
                        color={slot === 'week' ? 'primary' : 'secondary'}
                        variant={slot === 'week' ? 'outlined' : 'text'}
                      >
                        Week
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
                <Box sx={{ pt: 1 }}>
                  <IncomeAreaChart slot={slot} />
                </Box>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={6}>
            <MainCard>
              <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h5">Unique Visitor</Typography>
                  </Grid>
                  <Grid item>
                    <Stack direction="row" alignItems="center" spacing={0}>
                      <Button
                        size="small"
                        onClick={() => setSlot('month')}
                        color={slot === 'month' ? 'primary' : 'secondary'}
                        variant={slot === 'month' ? 'outlined' : 'text'}
                      >
                        Month
                      </Button>
                      <Button
                        size="small"
                        onClick={() => setSlot('week')}
                        color={slot === 'week' ? 'primary' : 'secondary'}
                        variant={slot === 'week' ? 'outlined' : 'text'}
                      >
                        Week
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
                <Box sx={{ pt: 1 }}>
                  <IncomeAreaChart slot={slot} />
                </Box>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={6}>
            <MainCard>
              <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h5">Unique Visitor</Typography>
                  </Grid>
                  <Grid item>
                    <Stack direction="row" alignItems="center" spacing={0}>
                      <Button
                        size="small"
                        onClick={() => setSlot('month')}
                        color={slot === 'month' ? 'primary' : 'secondary'}
                        variant={slot === 'month' ? 'outlined' : 'text'}
                      >
                        Month
                      </Button>
                      <Button
                        size="small"
                        onClick={() => setSlot('week')}
                        color={slot === 'week' ? 'primary' : 'secondary'}
                        variant={slot === 'week' ? 'outlined' : 'text'}
                      >
                        Week
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
                <Box sx={{ pt: 1 }}>
                  <IncomeAreaChart slot={slot} />
                </Box>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3} item xs={12} sm={6} md={4} lg={3}>
        <Grid item xs={12}>
          <WeatherCard />
        </Grid>
        <Grid item xs={12}>
          <WeatherCard />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
