import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import { Inertia } from '@inertiajs/inertia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';




export default function DataGridTable(props) {

  const [selectedRows,setSelectedRows]=useState([]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  

  const handleDelete = () =>{
    console.log(selectedRows)

       if(props.title==='contacts')
        Inertia.delete(`/adcom/contacts/${selectedRows}`,{
          preserveState:true,
          onSuccess:page=>{
              Inertia.reload({only:['contacts']})
              handleClose()
              $('#scrollable-modal').hide();
              $('.modal-backdrop').remove(); 
          }});
        else if(props.title==='Prospects')
        Inertia.delete(`/adcom/prospects/${selectedRows}`,{ 
          preserveState:true,
          onSuccess:page=>{
              Inertia.reload({only:['prospects']})
              handleClose()
              $('#scrollable-modal').hide();
              $('.modal-backdrop').remove(); 
          }});
        else if(props.title==='produits')
        Inertia.delete(`/adcom/produits/${selectedRows}`,{
          preserveState:true,
          onSuccess:page=>{
              Inertia.reload({only:['produits']})
              handleClose()
              $('#scrollable-modal').hide();
              $('.modal-backdrop').remove(); 
          }});
        else if (props.title === 'Clients'){
          Inertia.delete(`/adcom/clients/${selectedRows}`,{ 
            preserveState:true,
            onSuccess:page=>{
                Inertia.reload({only:['clients']})
                handleClose()
                $('#scrollable-modal').hide();
                $('.modal-backdrop').remove(); 
            }});
        }
        else if (props.title === 'utilisateur'){
          //console.log("user"+id)

            Inertia.delete(`/adcom/users/${selectedRows}`,{ 
              preserveState:true,
              onSuccess:page=>{
                  Inertia.reload({only:['users']})
                  handleClose()
                  $('#scrollable-modal').hide();
                  $('.modal-backdrop').remove(); 
              }});
          console.log("hehe")
        }

  }
  /*  const titrePage= props.title;
   if(selectedRows.length > 0){
    if(titrePage =="Prospects"){
    selectedRows.map((id)=>{
      Inertia.delete(`/adcom/prospects/${id}`);
    })
  }else if(props.title =="Produits"){
    selectedRows.map((id)=>{
      Inertia.delete(`/adcom/produits/${id}`);
    })
  }else if(props.title =="contact"){
    selectedRows.map((id)=>{
      Inertia.delete(`/adcom/contact/${id}`);
    })
  }else if(props.title =="Clients"){
    selectedRows.map((id)=>{
      Inertia.delete(`/adcom/clients/${id}`);
    })
  }
  } */


  const handleConversion = () =>{
    console.log(selectedRows)
    if(selectedRows.length > 0){
      selectedRows.map((id)=>{
        Inertia.post(`/adcom/prospects/${id}`);
      })
    }
  }

  return (
    <div className="row">
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <div className="row mb-2">
            <div className="col-sm-4">
            { props.title !="Clients"  && props.title !="contacts"  && <button  className="btn btn-danger mb-2" data-bs-toggle="modal" data-bs-target="#scrollable-modal">
                  <i className="mdi mdi-plus-circle me-2" /> Ajouter {props.title}
                </button>}
            </div>
            <div className="col-sm-8">
              <div className="text-sm-end">
                <button type="button" className="btn btn-light mb-2 me-1" onClick={handleClickOpen} >Supprimer</button>
                { props.title ==="Prospects" && <button onClick={handleConversion} type="button" className="btn btn-light mb-2 me-1">Conversion</button>}

{/*                 <button  type="button" className="btn btn-light mb-2" data-bs-toggle="modal" data-bs-target="#scrollable-modal">export</button>*/}

              </div>
            </div>{/* end col*/}
          </div>

          <div className="table-responsive">
            {/* ----------------------------------------   DATA GRID TABLE ADDED ------------------------------------------ */}
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                      rows={props.rows}
                      columns={props.columns}
                      pageSize={6}
                      rowsPerPageOptions={[5]}
                      checkboxSelection
                      onSelectionModelChange={(selectedRow)=> setSelectedRows(selectedRow)}
                />  
            </div>
          </div>
        </div> {/* end card-body*/}
      </div> {/* end card*/}
    </div> {/* end col */}
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
          <Button onClick={handleDelete} autoFocus>
            Confirmer
          </Button>
        </DialogActions>
  </Dialog>
  </div>
  )
}