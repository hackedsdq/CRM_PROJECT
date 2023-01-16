import React,{useState,useEffect} from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import PageTitle from './static_components/PageTitle'
import DndBoard from './static_components/DndBoard'
import { ChakraProvider } from '@chakra-ui/react';
import theme from './dnd_board_resources/config/theme';

import { Inertia } from '@inertiajs/inertia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import AddModalOpportunity from './static_components/AddModalOpportunity'

export default function Opportunities({clients,opportunities_one, opportunities_two, opportunities_three, opportunities_four, opportunities}) {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  let title = "Opportunités"
  let [filtredClients, setFiltredClients]=useState([])
  //let [firstRender, setFirstRender]=useState(true)
/*   let [opp1, setOpp1]=useState([])
  let [opp2, setOpp2]=useState([])
  let [opp3, setOpp3]=useState([])
  let [opp4, setOpp4]=useState([]) */

  //const [open,setOpen]=useState(false);

useEffect(()=>{
/*   setOpp1(opportunities_one)
  setOpp2(opportunities_two)
  setOpp3(opportunities_three)
  setOpp4(opportunities_four) */

console.log(opportunities)
handleFilter(clients)


},[clients])

const handleFilter=(clients)=>{
  let filtred;
   //setFiltredClients([])
   
  if(clients !== undefined){
    filtred = clients.map((client)=>(filtredClients.filter(data => data.label === client.société)))
    if(filtred.length !== 0){
    for(let i=0;i<filtred.length;i++){
      if(filtred[i].length===0){
        filtredClients.push({ label: `${clients[i].société}`, id:clients[i].id})
      }
    }
  }
}
}

  return (

   
    <div className='wrapper' >
        <SideBar />
        <Header />
        
        <div className="container-login100">
    <div className="wrap-login100">
        <div className="modal-content">
          <div className="modal-body">
            <div className="container-fluid">
{/*               <PageTitle title={title} />*/}  
            <button  className="btn btn-danger mb-2" data-bs-toggle="modal" data-bs-target="#scrollable-modal">
                  <i className="mdi mdi-plus-circle me-2" /> Add Opportunity
              </button>

              <AddModalOpportunity clients={filtredClients} />
          <ChakraProvider   resetCSS={false} theme={theme} >
                  <DndBoard opportunities_one={opportunities_one} opportunities_two={opportunities_two} opportunities_three={opportunities_three} opportunities_four={opportunities_four} />
              </ChakraProvider>
            
            </div> 
          </div>
        </div>

    </div>
    </div>

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
          <Button autoFocus>
            Confirmer
          </Button>
        </DialogActions>
</Dialog>
  </div>

  )
}