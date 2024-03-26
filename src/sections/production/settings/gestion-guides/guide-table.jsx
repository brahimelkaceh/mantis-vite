import { EyeFilled, PlusCircleOutlined } from '@ant-design/icons';
import { LoadingButton } from '@mui/lab';
import { FormControlLabel, LinearProgress, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import api from 'api/production';
import { openSnackbar } from 'api/snackbar';
import MainCard from 'components/MainCard';
import React, { useEffect, useState } from 'react';

const GuideTable = ({ fetchGuideData }) => {
  const [loading, setLoading] = useState(false);
  const [guides, setGuides] = useState([]);
  const fetProdActiveGuide = async () => {
    try {
      setLoading(true);
      const result = await api.getTitleGuides();
      if (result.status === 200) {
        setGuides(result?.data);
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'Échec de récupération des données; Veuillez réessayer.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const toggleActiveGuide = async (id) => {
    try {
      setLoading(true);
      const result = await api.toggleActiveGuide(id);
      if (result.status === 200) {
        openSnackbar({
          open: true,
          message: 'Le statut du guide a été changé.',
          variant: 'alert',
          alert: {
            color: 'success'
          }
        });
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'Échec de récupération des données; Veuillez réessayer.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetProdActiveGuide();
  }, []);
  return (
    <MainCard content={false}>
      {loading && <LinearProgress />}
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Souche</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Statut</TableCell>
              <TableCell>Afficher</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {guides &&
              guides.map((guide) => {
                return (
                  <TableRow key={guide.id}>
                    <TableCell>{guide.souche}</TableCell>
                    <TableCell>{guide.name}</TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={
                          <Switch
                            defaultChecked={guide.is_active}
                            onChange={(e) => {
                              toggleActiveGuide(guide.id);
                            }}
                            size="small"
                            color="primary"
                          />
                        }
                      />{' '}
                    </TableCell>
                    <TableCell>
                      <LoadingButton color="info" variant="outlined" shape="square" onClick={() => fetchGuideData(guide.id)}>
                        <EyeFilled />
                      </LoadingButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
};

export default GuideTable;
