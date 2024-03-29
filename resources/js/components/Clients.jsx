import React, { useState, useEffect } from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import { Box, Modal, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import PageTitle from './static_components/PageTitle'
import UserActions from './user_actions/UserActions'
import DataGridTable from './static_components/DataGridTable'
import AddModalClient from './static_components/AddModalClient'

export default function Clients({clients}) {

  let title = "Clients"
/*   const [pageLoaded, setPageLoaded]=useState(false)
  const [allClients, setProspects]=useState([]); */

  const columns = [
    
    { field: 'société', headerName: 'société', width: 130 },
    { field: 'téléphone', headerName: 'téléphone', width:130 },
    { field: 'adresse',headerName: 'adresse',width: 130},
    { field: 'delete', headerName: 'supprimer', width: 100, renderCell: (params) => <UserActions title="clients" user={params.row} action="delete" /> },
    { field: 'modify', headerName: 'modifier', width: 100, renderCell: (params) => <UserActions title="clients" user={params.row} action="modify" /> },
    { field: 'show', headerName: 'afficher', width: 100, renderCell:(params)=> <UserActions title="clients" user={params.row} action="show"/> },
  ];

  //const [open,setOpen]=useState(false);

useEffect(()=>{
/*   console.log(clients)
  clients.map((prc)=> allClients.push(prc))
  setPageLoaded(true) */
},[])



  return (
    <div className='wrapper' >
      <SideBar />
      <Header />

  <div className="container-login100">
    <div className="wrap-login100">
      <div className="modal-content">
         <div className="modal-body">
          {/* Start Content*/}
            {/* start page title 
            <PageTitle title={title} />*/}
            {/* end page title */}
            <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="rounded-0 p-0 mb-0">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/adcom">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Clients</li>
          </ol>
        </nav>
      </div>
    </div>
            {/* ------------------------ edit modalClient ------------------ 
            <AddModalClient />*/}
            {/* ------------------------ show datagrid table search ------------------ */}
            <DataGridTable title={title} columns={columns} rows={clients} />
            {/* end row */}
        </div> {/* content */}
      </div>

    </div>
    </div>
</div>

  )

}




