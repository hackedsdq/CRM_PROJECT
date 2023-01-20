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
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import { useState } from 'react';

let selectedProduct;

function Row(props) {
  const { row , opportunity_id, setConfirmDeletion, confirmDeletion, openDialog, setOpenDialog, handleClickOpen, type} = props;
  const [open, setOpen] = useState(false);

 
 const handleSelectedProduct = (product) =>{
  selectedProduct = product;
 }


  const handleDeleteProduct = () => {
    if(confirmDeletion)
     Inertia.post(`/adcom/oportunities/edit/${selectedProduct}`,{
      opportunityId : opportunity_id
    },{
      preserveState:false,
            onSuccess:page=>{
              setConfirmDeletion(false)
            }
    }) 
  }

  if(confirmDeletion)
  handleDeleteProduct()

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset',  } }}>
        <TableCell style={{width:40}}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{width:200}} component="th" scope="row">
          {row.nom}
        </TableCell>
        <TableCell >{row.quantité}</TableCell>
        {type ==="edit" && <TableCell ><i onClick={()=>{handleClickOpen(); handleSelectedProduct(row.id) }} className='mdi mdi-delete'></i></TableCell>}

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>

<div class="row">
        <div class="col-lg-4">
          <div class="card mb-4" >
            <div class="card-body text-center">
              <img src={row.photo} alt="avatar"
                class="rounded-circle img-fluid" style={{height:130}}/>
            </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Nom</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{row.nom}</p>
                </div>
              </div>
              <hr/>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Description</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{row.description}</p>
                </div>
              </div>
              <hr/>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Prix</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{row.prix} DZD</p>
                </div>
              </div>

            </div>
          </div>
      </div>
      </div>

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
    photo : PropTypes.string.isRequired,
  }).isRequired,
  opportunity : PropTypes.shape({
    opportunity_id: PropTypes.string.isRequired,
  })
};


export default function CollapsibleTable(props) {
  const rows = props.rows;
  let opportunity_id = props.opportunity_id;
  let type = props.type

  const [open, setOpen] = useState(false);
  const [confirmDeletion, setConfirmDeletion] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Produit</TableCell>
            <TableCell>Quantité</TableCell>
          {type==="edit" && <TableCell>Supprimer</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row type={type} key={row.nom} openDialog={open} setOpenDialog={setOpen} setConfirmDeletion={setConfirmDeletion} confirmDeletion={confirmDeletion} handleClose={handleClose} handleClickOpen={handleClickOpen}  opportunity_id={opportunity_id} row={row} />
          ))}
        </TableBody>
      </Table>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation de Suppression?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Est-ce-que vous voullez supprimer les données.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={()=> {setConfirmDeletion(true)} } autoFocus>
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}