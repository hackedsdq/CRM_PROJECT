import React,{useState,useEffect} from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import PageTitle from './static_components/PageTitle'
import DndBoard from './static_components/DndBoard'
import { ChakraProvider } from '@chakra-ui/react';
import theme from './dnd_board_resources/config/theme';
import { Inertia } from '@inertiajs/inertia';

import AddModalOpportunity from './static_components/AddModalOpportunity'
import HeaderContact from './static_components/HeaderContact'
import FooterFrontoffice from './static_components/FooterFrontoffice'

export default function OpportunitiesContact({clients,opportunities_one, opportunities_two, opportunities_three, opportunities_four, opportunities}) {

  let title = "Opportunités"
  let [filtredClients, setFiltredClients]=useState([])
  let [rendred, setRendreded]=useState(false)
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
    <div className='front-wrapper' >

        <HeaderContact />
        <div className="">
    <div className="">
        <div className="modal-content">
          <div className="modal-body">
            <div className="container-fluid">
{/*               <PageTitle title={title} />*/}  


              <AddModalOpportunity clients={filtredClients} />
          
               <ChakraProvider   resetCSS={false} theme={theme} >
                  <DndBoard opportunities_one={opportunities_one} opportunities_two={opportunities_two} opportunities_three={opportunities_three} opportunities_four={opportunities_four} />
              </ChakraProvider>
            
            </div> 
          </div>
        </div>

    </div>
    </div>
    <FooterFrontoffice/>
  </div>

  )
}