/* import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset', } }}>
        <TableCell style={{width:20}}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{width:20}} component="th" scope="row">
          {row.nom}
        </TableCell>
        <TableCell >{row.étape}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
            <div>{row.nom}</div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nom: PropTypes.string.isRequired,
    étape: PropTypes.string.isRequired,
    montant: PropTypes.string.isRequired,
    date_de_clôture: PropTypes.string.isRequired,
  }).isRequired,
};
export default function CollapsibleTable(props) {
  const rows = props.rows;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>nom</TableCell>
            <TableCell>étape</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.nom} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 */

import React from "react";
import MUIDataTable from "mui-datatables";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from '@mui/material/Box';

// const Card = () => (
//   <tr>
//     <td className="fullWidth">
//       <h1>
//         lorem ipsum dorel em quol acee, vion, bloolw, wafeo, feiwjfoiew,
//         foiwejifowefjweoi, fewjoewjfowei, fwefwefewfewfewf
//       </h1>
//     </td>
//   </tr>
// );

const MasterDetailClientOpportunities = ({rows}) => {
  const columns = [
    {
      name: "nom"
    },
    {
      name: "montant"
    },
    {
      name: "id"
    },
  ];

  const options = {
    filter: true,
    onFilterChange: (changedColumn, filterList) => {
      console.log(changedColumn, filterList);
    },
    selectableRows: "single",
    filterType: "dropdown",
    responsive: "scrollMaxHeight",
    rowsPerPage: 10,
    expandableRows: true,
    renderExpandableRow: (rowData, rowMeta) => {
      console.log(rowData, rowMeta);
      return (
        <React.Fragment>
          <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
            <div>{rowData[0]}</div>
        </TableCell>
      </TableRow>        
        </React.Fragment>
      );
    },
    page: 1
  };

  return (
    <MUIDataTable
      title={"Opportunités"}
      data={rows}
      columns={columns}
      options={options}
    />
  );
};

export default MasterDetailClientOpportunities;