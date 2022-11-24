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
  const [pageLoaded, setPageLoaded]=useState(false)
  const [allClients, setProspects]=useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'société', headerName: 'société', width: 130 },
    { field: 'téléphone', headerName: 'téléphone', width: 400 },
    { field: 'adresse',headerName: 'adresse',type: 'number',width: 150},
    { field: 'site_web', headerName: 'site_web', width: 200 },
    { field: 'delete', headerName: 'Delete', width: 70, renderCell: (params) => <UserActions title="clients" user={params.row} action="delete" /> },
    { field: 'modify', headerName: 'Modify', width: 70, renderCell: (params) => <UserActions title="clients" user={params.row} action="modify" /> },
    { field: 'show', headerName: 'show', width: 70, renderCell:(params)=> <UserActions title="clients" user={params.row} action="show"/> },
  ];

  //const [open,setOpen]=useState(false);

useEffect(()=>{
  console.log(clients)
  clients.map((prc)=> allClients.push(prc))
  setPageLoaded(true)
},[])



if(pageLoaded){
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
            {/* end page title */}

            {/* ------------------------ edit modalClient ------------------ 
            <AddModalClient />*/}
            {/* ------------------------ show datagrid table search ------------------ */}
            <DataGridTable title={title} columns={columns} rows={allClients} />
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




