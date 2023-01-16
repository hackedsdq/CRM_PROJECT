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

const MasterDetailClientContacts = ({rows}) => {
  const columns = [
    {
      name: "nom",
    },
    {
      name: "prenom"
    },
    {
      name: "fonction",
      options: {
        display: false,
      }
    },
    {
      name: "email",
      options: {
        display: false,
      }
    },
    {
      name: "id",
      options: {
        display: false,
      }
    },
    {
      name: "telephone",
      options: {
        display: false,
      }
    },
    {
      name: "photo",
      options: {
        display: false,
      }
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
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
            <div>
 <section >
  <div className="container">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col col-lg-12 mb-4 mb-lg-0">
        <div className="card mb-3" style={{borderRadius: '.5rem'}}>
          <div className="row g-0">
            <div className="col-md-4 gradient-custom text-center text-white" style={{borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', alignItems:"center"}}>
              <img src={rowData[6]} alt="Avatar" className="me-3 rounded-circle "  width={80} height={80} style={{objectFit:'contain', margin:'160px auto',  }} />
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h6>Informations</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                <div className="col-6 mb-3">
                    <h6>Nom</h6>
                    <p className="text-muted">{rowData[0]}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Prenom</h6>
                    <p className="text-muted">{rowData[1]}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Profession</h6>
                    <p className="text-muted">{rowData[2]}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">{rowData[3]}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Téléphone</h6>
                    <p className="text-muted">{rowData[5]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
        </TableCell>
      </TableRow>        
        </React.Fragment>
      );
    },
    page: 1
  };

  return (
    <MUIDataTable
      title={"Contacts"}
      data={rows}
      columns={columns}
      options={options}
    />
  );
};

export default MasterDetailClientContacts;