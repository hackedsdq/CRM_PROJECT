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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { usePage } from '@inertiajs/inertia-react'

export default function Prospects({prospects}) {



  let title = "Prospects"
  let[allProspects, setProspects]=useState([]);

  const columns = [
   
    { field: 'nom', headerName: 'nom', width: 130 },
    { field: 'prenom', headerName: 'prenom', width: 130 },
     { field: 'société', headerName: 'société', width: 130 },
/*     { field: 'email', headerName: 'email', width: 250 },*/
/*     { field: 'adresse', headerName: 'adresse', width: 120 },*/
/*     { field: 'site_web', headerName: 'site_web', width: 200 },*/
    { field: 'delete', headerName: 'supprimer', width: 100, renderCell:(params)=> <UserActions title="prospects" user={params.row} action="delete"/>  },
    { field: 'modify', headerName: 'modifier', width: 100, renderCell:(params)=> <UserActions title="prospects" user={params.row} action="modify"/>},
    { field: 'show', headerName: 'afficher', width: 100, renderCell:(params)=> <UserActions title="prospects" user={params.row} action="show" /> },
  ];
  

useEffect(()=>{

},[])



const getAllProspects = () =>{
  console.log(allProspects)
}


  return (
    <div className='wrapper' >

      <ToastContainer />
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
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="rounded-0 p-0 mb-0">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/adcom">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Prospects</li>
          </ol>
        </nav>
      </div>
    </div>
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




