import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Box, Modal, Stack } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import SimpleBar from 'components/third-party/SimpleBar';

import { useGetCustomer } from 'api/customer';
import FormBatimentEdit from './edit';

// ==============================|| CUSTOMER ADD / EDIT ||============================== //

const BatimentModal = ({ open, modalToggler, batiment, fetchBatiments }) => {
  const closeModal = () => modalToggler(false);

  const batimentForm = useMemo(
    () => <FormBatimentEdit batiment={batiment || null} closeModal={closeModal} fetchBatiments={fetchBatiments} />,
    // eslint-disable-next-line
    [batiment]
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
              {batimentForm}
            </SimpleBar>
          </MainCard>
        </Modal>
      )}
    </>
  );
};

BatimentModal.propTypes = {
  open: PropTypes.bool,
  modalToggler: PropTypes.func,
  batiment: PropTypes.object
};

export default BatimentModal;
