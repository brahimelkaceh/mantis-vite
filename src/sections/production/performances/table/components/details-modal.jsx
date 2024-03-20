import { forwardRef, useState } from 'react';

// material-ui
import {
  Avatar,
  AppBar,
  Button,
  Dialog,
  Slide,
  Toolbar,
  Typography,
  useTheme,
  DialogContent,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Stack,
  Box,
  TableBody,
  Rating,
  LinearProgress
} from '@mui/material';

// project import

// assets
import { CloseOutlined, EditFilled, MenuOutlined } from '@ant-design/icons';

import LoadingButton from 'components/@extended/LoadingButton';
import { blue } from '@mui/material/colors';
import { Menu, MenuBook } from '@mui/icons-material';
import api from 'api/production';
import { openSnackbar } from 'api/snackbar';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// ==============================|| DIALOG - FULL SCREEN ||============================== //

export default function DetailsModal({ id, age }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleGetTableRowDetails = async () => {
    try {
      setLoading(true);
      const result = await api.getProductionTableRow(id, age);
      if (result.status === 200) {
        setData(result.data);
      }
    } catch (error) {
      console.error('Error:', error);
      openSnackbar({
        open: true,
        message: 'Échec du téléchargement du PDF. Veuillez réessayer plus tard.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
    } finally {
      setLoading(false); // Set loading to false when the fetch is complete
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
    handleGetTableRowDetails();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <LoadingButton loading={loading} size="small" color="info" variant="text" shape="square" onClick={handleClickOpen}>
        <Menu />
      </LoadingButton>{' '}
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar color="inherit" sx={{ position: 'relative', boxShadow: 'none', borderBottom: `solid 2px ${theme.palette.divider}` }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="div">
              Détails
            </Typography>
            <Button color="error" endIcon={<CloseOutlined />} variant="contained" onClick={handleClose}>
              Fermer
            </Button>
          </Toolbar>
        </AppBar>
        {loading && <LinearProgress />}
        <DialogContent>
          <TableContainer
            sx={{
              '& .css-1ndpvdd-MuiTableCell-root': {
                padding: 0
              }
            }}
            component={Paper}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={4}></TableCell>

                  {/* Regrouper */}
                  <TableCell
                    sx={{
                      padding: '0',
                      background: '#3583c182'
                    }}
                    align="center"
                    colSpan={6}
                  >
                    Déclassé
                  </TableCell>

                  {/* Regrouper */}
                  <TableCell align="center"></TableCell>
                </TableRow>
                <TableRow
                  sx={{
                    background: '#bbdefb61',
                    '& th': {
                      borderTop: `1px solid ${theme.palette.divider}`,
                      borderLeft: `1px solid ${theme.palette.grey[400]} !important`,
                      padding: 0
                    }
                  }}
                >
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Coloration</TableCell>
                  <TableCell align="center">Coquille</TableCell>
                  <TableCell align="center">Double jaune</TableCell>
                  {/* Regrouper */}
                  <TableCell align="center">Sale</TableCell>
                  <TableCell align="center">Triage</TableCell>
                  <TableCell align="center">blancs</TableCell>
                  <TableCell align="center">Cassé</TableCell>
                  <TableCell align="center">
                    <Typography color="text.primary" variant="subtitle2">
                      Liquide{' '}
                      <Typography color="text.primary" variant="caption" component={'span'} textTransform={'lowercase'}>
                        kg
                      </Typography>
                    </Typography>
                    <Typography color="text.secondary" variant="caption">
                      Nombre
                    </Typography>
                  </TableCell>
                  <TableCell align="center">Somme de déclassé</TableCell>
                  {/* Regrouper */}
                  <TableCell align="center">Observation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((d, i) => {
                  return (
                    <TableRow
                      hover
                      key={i}
                      sx={{
                        '& td': {
                          borderTop: `1px solid ${theme.palette.divider}`,
                          borderLeft: `1px solid ${theme.palette.grey[400]} !important`,
                          padding: 0.5
                        }
                      }}
                    >
                      <TableCell align="center">
                        <Typography color="text.primary" variant="subtitle2">
                          {d.date}
                        </Typography>
                        <Typography color="text.secondary" variant="caption">
                          {d.day}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Stack direction="row" spacing={0} alignItems={'center'} justifyContent={'center'}>
                          <Box
                            component="span"
                            sx={{
                              '& img': {
                                height: 50
                              }
                            }}
                          >
                            {/* <img
                              alt="egge"
                              src={
                                d.coloration == 70
                                  ? egg70
                                  : d.coloration == 80
                                  ? egg80
                                  : d.coloration == 90
                                  ? egg90
                                  : d.coloration == 100
                                  ? egg100
                                  : d.coloration == 110
                                  ? egg110
                                  : noimg
                              }
                            /> */}
                          </Box>
                          <Typography variant="subtitle1">{d.coloration}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="center">
                        <Rating name="read-only" value={d.coquille} readOnly />
                      </TableCell>
                      <TableCell align="center">{d.dj}</TableCell>

                      <TableCell align="center">{d.sale}</TableCell>
                      <TableCell align="center">{d.triage}</TableCell>
                      <TableCell align="center">{d.blancs}</TableCell>
                      <TableCell align="center">{d.casse}</TableCell>
                      <TableCell align="center">
                        <Typography color="text.primary" variant="subtitle2">
                          {d.liquide_kg}
                        </Typography>
                        <Typography color="text.secondary" variant="caption">
                          {d.liquide_egg}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">{d.sum_declassed}</TableCell>
                      <TableCell align="center">{d.observation != 'NULL' ? d.observation : '--'}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </>
  );
}
