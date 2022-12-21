import React,{useState,useEffect} from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import {Box,Modal,Button} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import PageTitle from './static_components/PageTitle'
import UserActions from './user_actions/UserActions'
import DataGridTable from './static_components/DataGridTable'
import { Inertia } from '@inertiajs/inertia'
import AddModalProspect from './static_components/AddModalProspect'
import $ from 'jquery'
import {InertiaProgress} from '@inertiajs/progress'

InertiaProgress.init()

export default function Prospects({prospects}) {
  let title = "Prospects"
  let[pageLoaded, setPageLoaded]=useState(false)
  let[allProspects, setProspects]=useState([]);
  let[editedObject,setEditedObject]=useState(null);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nom', headerName: 'nom', width: 130 },
    { field: 'prenom', headerName: 'prenom', width: 130 },
    { field: 'société', headerName: 'société', width: 130 },
    { field: 'fonction', headerName: 'fonction', width: 130 },
    { field: 'email', headerName: 'email', width: 250 },
    {field: 'téléphone',headerName: 'téléphone',type: 'number',width: 120,},
    { field: 'adresse', headerName: 'adresse', width: 120 },
    { field: 'site_web', headerName: 'site_web', width: 200 },
    { field: 'Statut', headerName: 'Statut', width: 100 },
    { field: 'Source', headerName: 'Source', width: 130 },
    { field: 'delete', headerName: 'Delete', width: 70, renderCell:(params)=> <UserActions title="prospects" user={params.row} action="delete"/>  },
    { field: 'modify', headerName: 'Modify', width: 70, renderCell:(params)=> <UserActions title="prospects" user={params.row} action="modify"/>},
    { field: 'show', headerName: 'show', width: 70, renderCell:(params)=> <UserActions title="prospects" user={params.row} action="show" /> },
  ];
  
/*  const rows = [
    { id: 1, lastName: 'abdou', firstName: 'yagoub', society: 'SOGERHWIT',fonction:'General Director',Email:'abdelwahed.yagoub@gmail.com',telephone:'043 22 82 46',Adress:' B.P 869 Abou Tachfine Tlemcen 13000, Tlemcen, Algeria',Website:'http://www.sogerhwit.net/',Status:'Hot',Source:'Client'},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', society: 'SAA',fonction:'manager',Email:'market.sa.tlm@gmail.com',telephone:'043 26 71 65',Adress:'05, rue Belhadi Boucif,Tlemcen,Algérie',Website:'https://www.saa.dz/',Status:'Cold',Source:'announcement'},
    { id: 3, lastName: 'Arslane', firstName: 'Chakib', society: 'SARL CYLEXX',fonction:'general manager',Email:'/',telephone:'0542 28 83 85',Adress:' Bd Ain Sbaa Ali, Tlemcen 13000, Tlemcen, Algeria',Website:'http://cylexx-tlemcen.com/',Status:'Hot',Source:'Client' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', society: 'DHL',fonction:'manager',Email:'/',telephone:'043 27 35 80',Adress:' Boulevard Colonel Lotfi, Tlemcen, Algeria',Website:'www.dhl.fr/fr.html',Status:'Hot',Source:'Client' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', society: 'SARLPROCARTON',fonction:'Director',Email:'sarlprocartonemballage@gmail.com',telephone:'0550 67 26 01',Adress:'Zone industrielle desserte n4, Tlemcen 13000, Algeria',Website:'/',Status:'Hot',Source:'Client' },
     ];
*/


  //const [open,setOpen]=useState(false);

useEffect(()=>{
  console.log(prospects)
  // hide modal and the backdrop
   $('#scrollable-modal').hide();
  $('.modal-backdrop').remove(); 
  prospects.map((prc)=> allProspects.push(prc))
  setPageLoaded(true)
},[prospects])


const getAllProspects = () =>{
  console.log(allProspects)
}


if(pageLoaded){
  return (
    <div className='wrapper' >
        <SideBar />
        <Header />
        <div className="content-page">
          <div  className="content">
            {/* Start Content*/}
            <div  className="container-fluid">
              {/* start page title */}
              <PageTitle title={title} />
              {/* end page title */} 
              {/* ------------------------ edit modal ------------------ 
              <EditModalProspect type="edit" object={editedObject} />*/}
             <AddModalProspect />
{/*               <ShowProspect/>*/}             
  {/* ------------------------ show datagrid table search ------------------ */}
              <DataGridTable title={title} columns={columns} rows={allProspects}  />
              {/* end row */}
            </div> {/* container */}
          </div> {/* content */}
        </div> 
    </div>
  )
}
else
return(
  <div></div>
)
}




