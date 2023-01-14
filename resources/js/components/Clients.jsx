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
    { field: 'id', headerName: 'ID', width: 130 },
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
          <div className="container-fluid">
            {/* start page title 
            <PageTitle title={title} />*/}
            {/* end page title */}

            {/* ------------------------ edit modalClient ------------------ 
            <AddModalClient />*/}
            {/* ------------------------ show datagrid table search ------------------ */}
            <DataGridTable title={title} columns={columns} rows={clients} />
            {/* end row */}
          </div> {/* container */}
        </div> {/* content */}
      </div>

    </div>
    </div>
</div>

  )

}




