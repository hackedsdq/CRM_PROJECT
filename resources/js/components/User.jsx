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

  let title = "Utilisateur"

let [pageLoaded, setPageLoaded]=useState(false)
let [allUsers, setUsers]=useState([]);
let [deleteConfirmation, setDeleteConfirmation]=useState(false);

  let columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nom', width: 130 },
    { field: 'prenom', headerName: 'Prenom', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'password', headerName: 'Password', width: 130 },
    { field: 'delete', headerName: 'Delete', width: 70, renderCell:(params)=> <UserActions  title="users" user={params.row} action="delete"/>  },
    { field: 'modify', headerName: 'Modify', width: 70, renderCell:(params)=> <UserActions  title="users" user={params.row} action="modify"/> },
    { field: 'show', headerName: 'show', width: 70, renderCell:(params)=> <UserActions title="users" user={params.row} action="show" /> },
  ];
  

 useEffect(()=>{
  users.map((prc)=> allUsers.push(prc))
  setPageLoaded(true)
  },[])

  //const [open,setOpen]=useState(false);




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
              <AddModalUser/>

              {/* ------------------------ delete modal ------------------ */}
 
               {/* ------------------------ show datagrid table search ------------------ */}
              <DataGridTable title={title} columns={columns} rows={allUsers}  />
              {/* end row */}
            </div> {/* container */}
          </div> {/* content */}
        </div>

    </div>
  )
}else
return(
<div></div>
)
}