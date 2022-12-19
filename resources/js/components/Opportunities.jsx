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
  //let [firstRender, setFirstRender]=useState(true)
  let [opp1, setOpp1]=useState([])
  let [opp2, setOpp2]=useState([])
  let [opp3, setOpp3]=useState([])
  let [opp4, setOpp4]=useState([])

  //const [open,setOpen]=useState(false);

  useEffect(()=>{
  //console.log(opportunities_one)
  setOpp1(opportunities_one)
  setOpp2(opportunities_two)
  setOpp3(opportunities_three)
  setOpp4(opportunities_four)

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
            <div className="container-fluid">
              <PageTitle title={title} />
              <button  className="btn btn-danger mb-2" data-bs-toggle="modal" data-bs-target="#scrollable-modal">
                  <i className="mdi mdi-plus-circle me-2" /> Add Opportunity
              </button>

              <AddModalOpportunity clients={filtredClients} />
          
              <ChakraProvider   resetCSS={false} theme={theme} >
                  <DndBoard opportunities_one={opp1} opportunities_two={opp2} opportunities_three={opp3} opportunities_four={opp4} />
              </ChakraProvider>
            
            </div> 
          </div>
        </div>

    </div>
  )
}



