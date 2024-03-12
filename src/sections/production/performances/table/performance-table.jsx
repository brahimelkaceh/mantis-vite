import { DownOutlined, RightOutlined, StopOutlined } from '@ant-design/icons';
import { Card, Grid, IconButton, Table, TableContainer, useTheme } from '@mui/material';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import MainCard from 'components/MainCard';
import makeData from 'data/react-table';
import { useMemo } from 'react';
import ChooseColumn from './components/column-choser';
import TableHeader from './components/table-header';
import { tableHeaders } from './components/table-headers';
import { useState } from 'react';
import '../../style.css';
import TableList from './components/table-body';
const ProductionPerformanceTable = () => {
  const [visibleChildren, setVisibleChildren] = useState(
    tableHeaders.reduce((acc, curr) => {
      acc[curr.parent] = curr.children.map((child) => child.key);
      return acc;
    }, {})
  );

  const handleToggleVisibility = (parent, child) => {
    const newVisibleChildren = { ...visibleChildren };
    const index = newVisibleChildren[parent].indexOf(child);

    if (index !== -1) {
      newVisibleChildren[parent] = [...newVisibleChildren[parent].slice(0, index), ...newVisibleChildren[parent].slice(index + 1)];
    } else {
      newVisibleChildren[parent] = [...newVisibleChildren[parent], child];
    }

    setVisibleChildren(newVisibleChildren);
  };

  const handleShowAll = () => {
    const allVisible = tableHeaders.reduce((acc, curr) => {
      acc[curr.parent] = curr.children.map((child) => child.key);
      return acc;
    }, {});
    setVisibleChildren(allVisible);
  };
  return (
    <Grid item xs={12}>
      <MainCard>
        <ChooseColumn
          tableHeaders={tableHeaders}
          handleToggleVisibility={handleToggleVisibility}
          visibleChildren={visibleChildren}
          showAll={handleShowAll}
        />
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table>
            <TableHeader tableHeaders={tableHeaders} visibleChildren={visibleChildren} />
            <TableList tableHeaders={tableHeaders} visibleChildren={visibleChildren} />
          </Table>
        </TableContainer>
      </MainCard>
    </Grid>
  );
};

export default ProductionPerformanceTable;
