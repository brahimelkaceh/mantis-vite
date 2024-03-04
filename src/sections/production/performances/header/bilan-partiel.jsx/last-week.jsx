import { CaretDownOutlined, CaretUpOutlined, FallOutlined, RiseOutlined } from '@ant-design/icons';
import { Chip, Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, useTheme } from '@mui/material';
import MainCard from 'components/MainCard';
import React from 'react';
import SimpleBar from 'simplebar-react';

const LastWeek = () => {
  const theme = useTheme();

  const successSX = { color: theme.palette.success.main };
  const errorSX = { color: theme.palette.error.main };
  const infoSX = { color: theme.palette.info.main };
  return (
    <Grid container spacing={1.5}>
      <Grid item xs={12}>
        <Typography color={'Highlight'} variant="h5">
          Derniére semaine achevée:
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <MainCard content={false}>
          <SimpleBar sx={{ height: 10 }}>
            <List
              aria-label="main mailbox folders"
              sx={{
                '& svg': {
                  width: 32,
                  my: -0.75,
                  ml: -0.75,
                  mr: 0.75
                }
              }}
            >
              <ListItemButton
                sx={{
                  cursor: 'default'
                }}
                dense
              >
                <ListItemIcon>
                  <CaretUpOutlined style={successSX} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Grid container justifyContent={'space-between'}>
                      <Grid item justifyContent={'end'} xs={4}>
                        <span>Ponte</span>
                      </Grid>
                      <Grid container item justifyContent={'start'} md={2} xs={1}>
                        <Typography sx={infoSX}>45.85%</Typography>
                      </Grid>
                      <Grid container item justifyContent={'start'} md={2} xs={1}>
                        <Typography sx={successSX}>+ 1.85</Typography>
                      </Grid>
                      <Grid container justifyContent={'end'} item xs={4}>
                        <Chip
                          variant="filled"
                          color={'success'}
                          icon={
                            <>
                              <RiseOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                            </>
                          }
                          label={`${0.3}%`}
                          sx={{ ml: 0, pl: 1 }}
                          size="small"
                        />
                      </Grid>
                    </Grid>
                  }
                />
              </ListItemButton>
              <Divider />
              <ListItemButton
                dense
                sx={{
                  cursor: 'default'
                }}
              >
                <ListItemIcon>
                  <CaretDownOutlined style={errorSX} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Grid container justifyContent={'space-between'}>
                      <Grid item justifyContent={'end'} xs={4}>
                        <span>Mortalité</span>
                      </Grid>
                      <Grid container item justifyContent={'start'} md={2} xs={1}>
                        <Typography sx={infoSX}>0.42%</Typography>
                      </Grid>
                      <Grid container item justifyContent={'start'} md={2} xs={1}>
                        <Typography sx={errorSX}>- 0.71</Typography>
                      </Grid>
                      <Grid container justifyContent={'end'} item xs={4}>
                        <Chip
                          variant="filled"
                          color={'error'}
                          icon={
                            <>
                              <FallOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                            </>
                          }
                          label={`${-120.3}%`}
                          sx={{ ml: 0, pl: 1 }}
                          size="small"
                        />
                      </Grid>
                    </Grid>
                  }
                />
              </ListItemButton>
              <Divider />
              <ListItemButton
                dense
                sx={{
                  cursor: 'default'
                }}
              >
                <ListItemIcon>
                  <CaretUpOutlined style={successSX} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Grid container justifyContent={'space-between'}>
                      <Grid item justifyContent={'end'} xs={4}>
                        <span>PMO</span>
                      </Grid>
                      <Grid container item justifyContent={'start'} md={2} xs={1}>
                        <Typography sx={infoSX}>45.85g</Typography>
                      </Grid>
                      <Grid container item justifyContent={'start'} md={2} xs={1}>
                        <Typography sx={successSX}>+ 4.25</Typography>
                      </Grid>
                      <Grid container justifyContent={'end'} item xs={4}>
                        <Chip
                          variant="filled"
                          color={'success'}
                          icon={
                            <>
                              <RiseOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                            </>
                          }
                          label={`${7.82}%`}
                          sx={{ ml: 0, pl: 1 }}
                          size="small"
                        />
                      </Grid>
                    </Grid>
                  }
                />
              </ListItemButton>
            </List>
          </SimpleBar>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default LastWeek;
