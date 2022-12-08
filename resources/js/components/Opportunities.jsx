import React,{useState,useEffect} from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import PageTitle from './static_components/PageTitle'
import DndBoard from './static_components/DndBoard'
import { ChakraProvider } from '@chakra-ui/react';
import theme from './dnd_board_resources/config/theme';

import AddModalOpportunity from './static_components/AddModalOpportunity'

export default function Opportunities({clients,opportunities_one, opportunities_two, opportunities_three, opportunities_four}) {

  let title = "Opportunités"
  let [filtredClients, setFiltredClients]=useState([])

  //const [open,setOpen]=useState(false);


  useEffect(()=>{
  //console.log(clients)
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
        
        <div className="content-page">
          <div className="content">
            {/* Start Content*/}
            <div className="container-fluid">
              {/* start page title */}
              <PageTitle title={title} />
              
              <button  className="btn btn-danger mb-2" data-bs-toggle="modal" data-bs-target="#scrollable-modal">
                  <i className="mdi mdi-plus-circle me-2" /> Add Opportunity
              </button>

              <AddModalOpportunity clients={filtredClients} />

              {/* end page title */} 
              {/* ------------------------ drag and drop board ------------------ */}
              <ChakraProvider   resetCSS={false} theme={theme} >
                  <DndBoard opportunities_one={opportunities_one} opportunities_two={opportunities_two} opportunities_three={opportunities_three} opportunities_four={opportunities_four} />
              </ChakraProvider>
              {/* end row */}
            </div> {/* container */}
          </div> {/* content */}
        </div>

    </div>
  )
}




