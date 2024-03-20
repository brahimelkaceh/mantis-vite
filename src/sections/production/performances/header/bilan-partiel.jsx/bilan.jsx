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
  useTheme,
  Card
} from '@mui/material';
import React from 'react';
import SimpleBar from 'simplebar-react';

const BilanGlobal = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xl'));

  const successSX = { color: theme.palette.success.main };
  const errorSX = { color: theme.palette.error.main };
  const infoSX = { color: theme.palette.info.main };
  return (
    <Grid container spacing={2.5}>
      <Divider />
      <Grid item xs={12}>
        <Typography color={'Highlight'} variant="h5">
          Bilan partiel ({data?.first_age}
          <Typography color={'GrayText'} variant="caption">
            /1
          </Typography>
          ~{data?.age}
          <Typography color={'GrayText'} variant="caption">
            /{data?.day_on_week} Sem
          </Typography>{' '}
          )
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card content={false}>
          <List
            aria-label="main mailbox folders"
            sx={{
              '& svg': {
                width: 25,
                my: -0.75,
                ml: -0.75,
                mr: 0.75
              },
              '& .css-cveggr-MuiListItemIcon-root': {
                minWidth: '30px'
              }
            }}
          >
            <ListItemButton
              sx={{
                cursor: 'default'
              }}
              dense
            >
              <ListItemIcon></ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={'space-between'}>
                    <Grid item justifyContent={'end'} xs={4}>
                      <Typography component="span" fontWeight={'bold'}>
                        Paramétre
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography component="span" fontWeight={'bold'}>
                        Réel
                      </Typography>{' '}
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography component="span" fontWeight={'bold'}>
                        Ecart/std
                      </Typography>{' '}
                    </Grid>
                    <Grid container justifyContent={'end'} item xs={4}>
                      <Typography component="span" fontWeight={'bold'}>
                        % Evolution
                      </Typography>{' '}
                    </Grid>
                  </Grid>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton
              sx={{
                cursor: 'default'
              }}
              dense
            >
              <ListItemIcon>
                {data?.mort?.isUp ? (
                  <CaretUpOutlined style={data?.mort?.color == 'green' ? successSX : errorSX} />
                ) : (
                  <CaretDownOutlined style={data?.mort?.color == 'green' ? successSX : errorSX} />
                )}{' '}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={'space-between'}>
                    <Grid item justifyContent={'end'} xs={4}>
                      <Typography variant="caption" color={'GrayText'}>
                        {/* {isMobile ? "∑ mort" : "Mortalité cumulée"} */}∑ Mortalité
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={infoSX}>
                        {data?.mort?.reel}{' '}
                        <Typography color={'GrayText'} variant="caption">
                          %
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={data?.mort?.color == 'green' ? successSX : errorSX}>{data?.mort?.ecart}</Typography>{' '}
                    </Grid>
                    <Grid container justifyContent={'end'} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.mort?.color == 'green' ? 'success' : 'error'}
                        icon={
                          data?.mort?.isUp ? (
                            <RiseOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          ) : (
                            <FallOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          )
                        }
                        label={`${data?.mort?.ecart_prsnt}%`}
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
                {data?.noppp?.isUp ? (
                  <CaretUpOutlined style={data?.noppp?.color == 'green' ? successSX : errorSX} />
                ) : (
                  <CaretDownOutlined style={data?.noppp?.color == 'green' ? successSX : errorSX} />
                )}{' '}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={'space-between'}>
                    <Grid item justifyContent={'end'} xs={4}>
                      <Typography variant="caption" color={'GrayText'}>
                        {isMobile ? '∑ NOPPP' : "∑ Nbr d'œuf par poule présente"}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={infoSX}>
                        {data?.noppp?.reel}{' '}
                        <Typography color={'GrayText'} variant="caption">
                          œuf
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={data?.noppp?.color == 'green' ? successSX : errorSX}>{data?.noppp?.ecart}</Typography>{' '}
                    </Grid>
                    <Grid container justifyContent={'end'} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.noppp?.color == 'green' ? 'success' : 'error'}
                        icon={
                          data?.noppp?.isUp ? (
                            <RiseOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          ) : (
                            <FallOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          )
                        }
                        label={`${data?.noppp?.ecart_prsnt}%`}
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
                {data?.noppd?.isUp ? (
                  <CaretUpOutlined style={data?.noppd?.color == 'green' ? successSX : errorSX} />
                ) : (
                  <CaretDownOutlined style={data?.noppd?.color == 'green' ? successSX : errorSX} />
                )}{' '}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={'space-between'}>
                    <Grid item justifyContent={'end'} xs={4}>
                      <Typography variant="caption" color={'GrayText'}>
                        {isMobile ? '∑ NOPPD' : " ∑ Nbr d'œuf par poule départ"}
                        {/* ∑ NOPPD */}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={infoSX}>
                        {data?.noppd?.reel}{' '}
                        <Typography color={'GrayText'} variant="caption">
                          œuf
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={data?.noppd?.color == 'green' ? successSX : errorSX}>{data?.noppd?.ecart}</Typography>
                    </Grid>
                    <Grid container justifyContent={'end'} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.noppd?.color == 'green' ? 'success' : 'error'}
                        icon={
                          data?.noppd?.isUp ? (
                            <RiseOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          ) : (
                            <FallOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          )
                        }
                        label={`${data?.noppd?.ecart_prsnt}%`}
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
                {data?.moppp?.isUp ? (
                  <CaretUpOutlined style={data?.moppp?.color == 'green' ? successSX : errorSX} />
                ) : (
                  <CaretDownOutlined style={data?.moppp?.color == 'green' ? successSX : errorSX} />
                )}{' '}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={'space-between'}>
                    <Grid item justifyContent={'end'} xs={4}>
                      <Typography variant="caption" color={'GrayText'}>
                        {/* {isMobile
                          ? "∑ MOPPP"
                          : "Masse d'œuf par poule présente cumulé"} */}
                        ∑ MOPPP
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={infoSX}>
                        {data?.moppp?.reel}{' '}
                        <Typography color={'GrayText'} variant="caption">
                          kg
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={data?.moppp?.color == 'green' ? successSX : errorSX}>{data?.moppp?.ecart}</Typography>
                    </Grid>
                    <Grid container justifyContent={'end'} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.moppp?.color == 'green' ? 'success' : 'error'}
                        icon={
                          data?.moppp?.isUp ? (
                            <RiseOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          ) : (
                            <FallOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          )
                        }
                        label={`${data?.moppp?.ecart_prsnt}%`}
                        sx={{ ml: 0, pl: 1 }}
                        size="small"
                      />
                    </Grid>
                  </Grid>
                }
              />
            </ListItemButton>
          </List>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card content={false}>
          <List
            aria-label="main mailbox folders"
            sx={{
              '& svg': {
                width: 32,
                my: -0.75,
                ml: -0.75,
                mr: 0.75
              },
              '& .css-cveggr-MuiListItemIcon-root': {
                minWidth: '30px'
              }
            }}
          >
            <ListItemButton
              sx={{
                cursor: 'default'
              }}
              dense
            >
              <ListItemIcon></ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={'space-between'}>
                    <Grid item justifyContent={'end'} xs={4}>
                      <Typography component="span" fontWeight={'bold'}>
                        Paramétre
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography component="span" fontWeight={'bold'}>
                        Réel
                      </Typography>{' '}
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography component="span" fontWeight={'bold'}>
                        Ecart/std
                      </Typography>{' '}
                    </Grid>
                    <Grid container justifyContent={'end'} item xs={4}>
                      <Typography component="span" fontWeight={'bold'}>
                        % Evolution
                      </Typography>{' '}
                    </Grid>
                  </Grid>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton
              sx={{
                cursor: 'default'
              }}
              dense
            >
              <ListItemIcon>
                {data?.moppd?.isUp ? (
                  <CaretUpOutlined style={data?.moppd?.color == 'green' ? successSX : errorSX} />
                ) : (
                  <CaretDownOutlined style={data?.moppd?.color == 'green' ? successSX : errorSX} />
                )}{' '}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={'space-between'}>
                    <Grid item justifyContent={'end'} xs={4}>
                      <Typography variant="caption" color={'GrayText'}>
                        {isMobile ? '∑ MOPPD' : " ∑ masse d'œuf par poule départ"}
                        {/*MOPPD */}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={infoSX}>
                        {data?.moppd?.reel}{' '}
                        <Typography color={'GrayText'} variant="caption">
                          kg
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={data?.moppd?.color == 'green' ? successSX : errorSX}>{data?.moppd?.ecart}</Typography>
                    </Grid>
                    <Grid container justifyContent={'end'} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.moppd?.color == 'green' ? 'success' : 'error'}
                        icon={
                          data?.moppd?.isUp ? (
                            <RiseOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          ) : (
                            <FallOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          )
                        }
                        label={`${data?.moppd?.ecart_prsnt}%`}
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
                {data?.aps_cuml?.isUp ? (
                  <CaretUpOutlined style={data?.aps_cuml?.color == 'green' ? successSX : errorSX} />
                ) : (
                  <CaretDownOutlined style={data?.aps_cuml?.color == 'green' ? successSX : errorSX} />
                )}{' '}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={'space-between'}>
                    <Grid item justifyContent={'end'} xs={4}>
                      <Typography variant="caption" color={'GrayText'}>
                        {isMobile ? '∑ APS' : ' ∑ Aliment par sujet'}
                        {/*Aliment par sujet */}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={infoSX}>
                        {data?.aps_cuml?.reel}{' '}
                        <Typography color={'GrayText'} variant="caption">
                          kg
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={data?.aps_cuml?.color == 'green' ? successSX : errorSX}>{data?.aps_cuml?.ecart}</Typography>
                    </Grid>
                    <Grid container justifyContent={'end'} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.aps_cuml?.color == 'green' ? 'success' : 'error'}
                        icon={
                          data?.aps_cuml?.isUp ? (
                            <RiseOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          ) : (
                            <FallOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          )
                        }
                        label={`${data?.aps_cuml?.ecart_prsnt}%`}
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
                {data?.pv?.isUp ? (
                  <CaretUpOutlined style={data?.pv?.color == 'green' ? successSX : errorSX} />
                ) : (
                  <CaretDownOutlined style={data?.pv?.color == 'green' ? successSX : errorSX} />
                )}{' '}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={'space-between'}>
                    <Grid item justifyContent={'end'} xs={4}>
                      <Typography variant="caption" color={'GrayText'}>
                        {isMobile ? 'P.corporel' : 'Poids corporel'}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={infoSX}>
                        {data?.pv?.reel}{' '}
                        <Typography color={'GrayText'} variant="caption">
                          g
                        </Typography>{' '}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={data?.pv?.color == 'green' ? successSX : errorSX}>{data?.pv?.ecart}</Typography>
                    </Grid>
                    <Grid container justifyContent={'end'} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.pv?.color == 'green' ? 'success' : 'error'}
                        icon={
                          data?.pv?.isUp ? (
                            <RiseOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          ) : (
                            <FallOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          )
                        }
                        label={`${data?.pv?.ecart_prsnt}%`}
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
                {data?.homog?.isUp ? (
                  <CaretUpOutlined style={data?.homog?.color == 'green' ? successSX : errorSX} />
                ) : (
                  <CaretDownOutlined style={data?.homog?.color == 'green' ? successSX : errorSX} />
                )}{' '}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={'space-between'}>
                    <Grid item justifyContent={'end'} xs={4}>
                      <Typography variant="caption" color={'GrayText'}>
                        {'Homogénéité'}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={infoSX}>
                        {data?.homog?.reel}{' '}
                        <Typography color={'GrayText'} variant="caption">
                          %
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={'start'} xs={2}>
                      <Typography sx={data?.homog?.isUp ? successSX : errorSX}>{data?.homog?.ecart}</Typography>
                    </Grid>
                    <Grid container justifyContent={'end'} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.homog?.isUp ? 'success' : 'error'}
                        icon={
                          data?.homog?.isUp ? (
                            <RiseOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          ) : (
                            <FallOutlined style={{ fontSize: '1rem', color: 'inherit' }} />
                          )
                        }
                        label={`${data?.homog?.ecart_prsnt}%`}
                        sx={{ ml: 0, pl: 1 }}
                        size="small"
                      />
                    </Grid>
                  </Grid>
                }
              />
            </ListItemButton>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BilanGlobal;
