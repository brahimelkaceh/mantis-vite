import { CaretDownOutlined, CaretUpOutlined, FallOutlined, RiseOutlined } from '@ant-design/icons';
import {
  Chip,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MainCard from 'components/MainCard';
import React from 'react';
import SimpleBar from 'simplebar-react';

const BilanGlobal = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const successSX = { color: theme.palette.success.main };
  const errorSX = { color: theme.palette.error.main };
  const infoSX = { color: theme.palette.info.main };
  return (
    <Grid container spacing={2.5}>
      <Divider />
      <Grid item xs={12}>
        <Typography color={'Highlight'} variant="h5">
          Un titre:
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} md={6}>
        <MainCard content={false}>
          <SimpleBar>
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
                        <span>{isMobile ? '∑ mort' : 'Mortalité cumulée'}</span>
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
                        <span>{isMobile ? '∑ NOPPP' : "Nombre d'œuf par poule présente cumulée"}</span>
                      </Grid>
                      <Grid container item justifyContent={'start'} md={2} xs={1}>
                        <Typography sx={infoSX}>0.22%</Typography>
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
                        <span>{isMobile ? '∑ NOPPD' : "Nombre d'œuf par poule départ cumulé"}</span>
                      </Grid>
                      <Grid container item justifyContent={'start'} md={2} xs={1}>
                        <Typography sx={infoSX}>25.85g</Typography>
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
                        <span>{isMobile ? '∑ MOPPP' : "masse d'œuf par poule présente cumulé"}</span>
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
      <Grid item xs={12} md={6}>
        <MainCard content={false}>
          <SimpleBar>
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
                        <span>{isMobile ? '∑ MOPPD' : "masse d'œuf par poule départ cumulé"}</span>
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
                        <span>{isMobile ? '∑ APS' : 'Aliment par sujet cumulé'}</span>
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
                        <span>{isMobile ? 'P.corporel' : 'Poids corporel'}</span>
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
                        <span>{'Homogénéité'}</span>
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

export default BilanGlobal;
