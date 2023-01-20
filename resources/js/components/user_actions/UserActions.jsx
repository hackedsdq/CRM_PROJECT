import React,{useState} from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


export default function UserActions(props) {
const title= props.title;
const user= props.user;

const [open, setOpen] = useState(false);

const handleClickOpen = () => {
  if(user){
    setOpen(true);
  }
  console.log("hi")
};

const handleClose = () => {
  setOpen(false);
};



const handleDelete = () =>{
  Inertia.delete(`/adcom/${title}/${user.id}`,{
    preserveState:true,
    onSuccess:page=>{
      Inertia.reload({only:['users']})
      handleClose()
      $('#scrollable-modal').hide();
      $('.modal-backdrop').remove(); 
  }
  }); 
}
 
return(
  <div>
 {props.action==="delete" && <button onClick={handleClickOpen} className='btn  btn-sm '><i className='mdi mdi-delete'></i> </button>}
 {props.action==="modify" && <InertiaLink   href={`/adcom/${title}/edit/${user.id}`}><i className='mdi mdi-square-edit-outline'></i></InertiaLink>}
 {props.action==="show" && <InertiaLink href={`/adcom/${title}/show/${user.id}`}><i className='mdi mdi-eye'></i> </InertiaLink>}

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

  /*return (
    
    <div>
        {
            props.action==="delete"?
          
             <button className='btn  btn-sm' ><i className='mdi mdi-delete'></i> </button>
             :
             <button className='btn  btn-sm' data-bs-toggle="modal" data-bs-target="#scrollable-modal"><i className='mdi mdi-square-edit-outline'></i></button> 
              
        }
       
    </div>
    
  )}*/
      

