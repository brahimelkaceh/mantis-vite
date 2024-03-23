import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Box, Modal, Stack } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import SimpleBar from 'components/third-party/SimpleBar';

import { useGetCustomer } from 'api/customer';
import FormSiteEdit from './edit';

// ==============================|| CUSTOMER ADD / EDIT ||============================== //

const SiteModal = ({ open, modalToggler, site, fetchProdSite }) => {
  const { customersLoading: loading } = useGetCustomer();
  const closeModal = () => modalToggler(false);

  const siteForm = useMemo(
    () => <FormSiteEdit site={site || null} closeModal={closeModal} fetchProdSite={fetchProdSite} />,
    // eslint-disable-next-line
    [site]
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
            sx={{ width: `calc(100% - 48px)`, minWidth: 340, maxWidth: 880, height: 'auto', maxHeight: 'calc(100vh - 48px)' }}
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
              {/* {loading ? (
                <Box sx={{ p: 5 }}>
                  <Stack direction="row" justifyContent="center">
                    <CircularWithPath />
                  </Stack>
                </Box>
              ) : (
                siteForm
              )} */}
              {siteForm}
            </SimpleBar>
          </MainCard>
        </Modal>
      )}
    </>
  );
};

SiteModal.propTypes = {
  open: PropTypes.bool,
  modalToggler: PropTypes.func,
  site: PropTypes.object
};

export default SiteModal;
