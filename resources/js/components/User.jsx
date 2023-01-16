import React,{useState,useEffect} from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import {Box,Modal,Button} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import PageTitle from './static_components/PageTitle'
import UserActions from './user_actions/UserActions'
import DataGridTable from './static_components/DataGridTable'
import AddModalUser from './static_components/AddModalUser'

export default function User({users}) {

  let title = "utilisateur"

//let [pageLoaded, setPageLoaded]=useState(false)
//let [allUsers, setUsers]=useState([]);
let [deleteConfirmation, setDeleteConfirmation]=useState(false);

  let columns = [
   
    { field: 'name', headerName: 'nom', width: 130 },
    { field: 'prenom', headerName: 'prenom', width: 130 },
    { field: 'email', headerName: 'email', width: 230 },
    { field: 'delete', headerName: 'supprimer', width: 70, renderCell:(params)=> <UserActions  title="users" user={params.row} action="delete"/>  },
    { field: 'modify', headerName: 'modifier', width: 70, renderCell:(params)=> <UserActions  title="users" user={params.row} action="modify"/> },
    { field: 'show', headerName: 'afficher', width: 70, renderCell:(params)=> <UserActions title="users" user={params.row} action="show" /> },
  ];
  

 useEffect(()=>{
  //users.map((prc)=> allUsers.push(prc))
  //setPageLoaded(true)
  },[])

  //const [open,setOpen]=useState(false);




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
              <AddModalUser/>

              {/* ------------------------ delete modal ------------------ */}
 
               {/* ------------------------ show datagrid table search ------------------ */}
              <DataGridTable title={title} columns={columns} rows={users}  />
              {/* end row */}
          </div> {/* content */}
        </div>
      </div>
      </div>
    </div>
  )
}