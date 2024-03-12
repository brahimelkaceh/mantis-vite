import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { MenuOutlined } from '@ant-design/icons';

const ITEM_HEIGHT = 48;

const ChooseColumn = ({ tableHeaders, handleToggleVisibility, visibleChildren, showAll }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="primary"
      >
        <MenuOutlined rotate={90} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch'
          }
        }}
      >
        {tableHeaders?.map((header, index) => {
          return header.children.map((child) => {
            console.log(child.title.trim().length > 0);
            return (
              child.title.trim().length > 0 && (
                <MenuItem key={child.key}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={visibleChildren[header.parent]?.includes(child.key)}
                        onChange={() => handleToggleVisibility(header.parent, child.key)}
                      />
                    }
                    label={child.title}
                  />
                </MenuItem>
              )
            );
          });
        })}
        <MenuItem
          onClick={() => {
            handleClose();
            showAll();
          }}
        >
          Afficher tout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ChooseColumn;
