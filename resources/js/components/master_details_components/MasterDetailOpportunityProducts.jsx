import * as React from 'react';
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
        <TableCell >{row.quantité}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
            <article class="card card-product-list">
            <div class="row no-gutters">
                <aside class="col-md-3">
                    <a href="#" className="img-wrap">
                        <span className="badge badge-danger"> NEW </span>
                        <img src={row.photo} />
                    </a>
                </aside> 
                <div className="col-md-6">
                <a href="#" className="h5 title"> Great product name goes here  </a>                        
                    <div className="info-main">
                        <h5>Description</h5> 
                        <p>{row.description}</p>
                    </div>
                    <div className="info-main">
                        <h5>Prix</h5> 
                        <p>{row.prix} DZD</p>
                    </div>
                </div> 
            </div> 
          </article> 
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
    description: PropTypes.string.isRequired,
    nom: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    quantité: PropTypes.number.isRequired,
    photo : PropTypes.string.isRequired
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
            <TableCell>Produit</TableCell>
            <TableCell>Quantité</TableCell>
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