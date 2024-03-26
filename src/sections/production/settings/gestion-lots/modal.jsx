import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

// material-ui
import { Box, Modal, Stack } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import SimpleBar from 'components/third-party/SimpleBar';

import { useGetCustomer } from 'api/customer';
import FormSiteEdit from './edit';
import api from 'api/production';
import { openSnackbar } from 'api/snackbar';

// ==============================|| CUSTOMER ADD / EDIT ||============================== //

const LotModal = ({ open, modalToggler, lot, fetchProdLot, sites }) => {
  const closeModal = () => modalToggler(false);
  const [guides, setGuides] = useState([]);
  const fetProdActiveGuide = async () => {
    try {
      const result = await api.getProdGuides();
      if (result.status === 200) {
        console.log(result);
        setGuides(result.data || []); // Ensure result.data is not null or undefined
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
    }
  };

  useEffect(() => {
    fetProdActiveGuide();
  }, []);

  const lotForm = useMemo(
    () => <FormSiteEdit lot={lot || null} closeModal={closeModal} fetchProdLot={fetchProdLot} sites={sites} guides={guides} />,
    // eslint-disable-next-line
    [lot]
  );

  return (
    <>
      {open && (
        <Modal
          open={open}
          onClose={closeModal}
          aria-labelledby="modal-customer-add-label"
          aria-describedby="modal-customer-add-description"
          sx={{
            '& .MuiPaper-root:focus': {
              outline: 'none'
            }
          }}
        >
          <MainCard
            sx={{ width: `calc(100% - 48px)`, minWidth: 340, maxWidth: 500, height: 'auto', maxHeight: 'calc(100vh - 48px)' }}
            modal
            content={false}
          >
            <SimpleBar
              sx={{
                maxHeight: `calc(100vh - 48px)`,
                '& .simplebar-content': {
                  display: 'flex',
                  flexDirection: 'column'
                }
              }}
            >
              {lotForm}
            </SimpleBar>
          </MainCard>
        </Modal>
      )}
    </>
  );
};

LotModal.propTypes = {
  open: PropTypes.bool,
  modalToggler: PropTypes.func,
  site: PropTypes.object
};

export default LotModal;
