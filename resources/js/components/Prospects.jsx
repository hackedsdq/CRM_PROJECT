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
/*     { field: 'société', headerName: 'société', width: 130 },*/
    { field: 'fonction', headerName: 'fonction', width: 130 },
/*     { field: 'email', headerName: 'email', width: 250 },*/
    {field: 'téléphone',headerName: 'téléphone',width: 120,},
/*     { field: 'adresse', headerName: 'adresse', width: 120 },*/
/*     { field: 'site_web', headerName: 'site_web', width: 200 },*/
    { field: 'Statut', headerName: 'statut', width: 100 },
    { field: 'Source', headerName: 'source', width: 130 },
    { field: 'delete', headerName: 'supprimer', width: 70, renderCell:(params)=> <UserActions title="prospects" user={params.row} action="delete"/>  },
    { field: 'modify', headerName: 'modifier', width: 70, renderCell:(params)=> <UserActions title="prospects" user={params.row} action="modify"/>},
    { field: 'show', headerName: 'afficher', width: 70, renderCell:(params)=> <UserActions title="prospects" user={params.row} action="show" /> },
  ];
  

useEffect(()=>{
  console.log(prospects)
/*   // hide modal and the backdrop
   $('#scrollable-modal').hide();
  $('.modal-backdrop').remove(); 
  //prospects.map((prc)=> allProspects.push(prc))
  setPageLoaded(true) */
},[])


const getAllProspects = () =>{
  console.log(allProspects)
}


  return (
    <div className='wrapper' >
        <SideBar />
        <Header />
        <div className="container-login100">
    <div className="wrap-login100">
        <div className="modal-content">
          <div className="modal-body">
              {/* start page title 
              <PageTitle title={title} />*/}
              {/* end page title */} 
              {/* ------------------------ edit modal ------------------ 
              <EditModalProspect type="edit" object={editedObject} />*/}

{/*               <ShowProspect/>*/}  
              <AddModalProspect />
  {/* ------------------------ show datagrid table search ------------------ */}
              <DataGridTable title={title} columns={columns} rows={prospects}  />
              {/* end row */}
            </div> {/* container */}
          </div> {/* content */}
        </div> 
    </div>
  </div> 
  )
}




