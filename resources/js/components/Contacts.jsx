import React,{useState,useEffect} from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import {Box,Modal,Button} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import PageTitle from './static_components/PageTitle'
import EditModalContacts from './static_components/EditModalContacts'
import UserActions from './user_actions/UserActions'
import DataGridTable from './static_components/DataGridTable'


export default function Contacts() {

  let title = "contact"

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
<<<<<<< HEAD
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'Telephone',
      headerName: 'Telephone',
      type: 'number',
      width: 150,
    },
    { field: 'Email', headerName: 'Email', width: 200 },
    { field: 'Password', headerName: 'Password', width: 150 },
    { field: 'Client', headerName: 'Client', width: 150 },
    
=======
    { field: 'nom', headerName: 'Nom', width: 130 },
    { field: 'prenom', headerName: 'Prenom', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'password', headerName: 'Password', width: 130 },
    { field: 'telephone', headerName: 'Telephone', width: 130 },
    { field: 'fonction', headerName: 'Fonction', width: 130 },
>>>>>>> 7eb4c45225b1a2ee002bbce51c1f88b773263b8b
    { field: 'delete', headerName: 'Delete', width: 70, renderCell:(params)=> <UserActions user={params.row} action="delete"/>  },
    { field: 'modify', headerName: 'Modify', width: 70, renderCell:(params)=> <UserActions user={params.row} action="modify"/> },
  ];
  
  const rows = [
<<<<<<< HEAD
    { id: 1, lastName: 'abdelwahed', firstName: 'yagoub', Telephone:"043 22 82 46",Email:"abdelwahed.yagoub@gmail.com",Password:"1A2Z3E4R",Client:"/" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', Telephone:"043 26 71 65",Email:"market.sa.tlm@gmail.com",Password:"4R5T6Y7U",Client:"/"  },
    { id: 3,  lastName: 'Arslane', firstName: 'Chakib', Telephone:"0542 28 83 85",Email:"/",Password:"7U8I9O0P",Client:"/"},
    { id: 4, lastName: 'Stark', firstName: 'Arya', Telephone:"043 27 35 80",Email:"/",Password:"0P1A2Z7U",Client:"/" },
    { id: 5, lastName: 'Frances', firstName: 'Rossini', Telephone:"0550 67 26 01",Email:"sarlprocartonemballage@gmail.com",Password:"8I5T0P3E",Client:"/" },
   
=======
    { id: 1, nom: 'Snow', prenom: 'Jon', email: 'nihelnb@gmail.com', password:'',telephone:'', fonction:'' },
    { id: 2, nom: 'Lannister', prenom: 'Cersei', email: null,password:'' },
    { id: 3, nom: 'Lannister', prenom: 'Jaime', email:null,password:'' },
    { id: 4, nom: 'Stark', prenom: 'Arya', email: null,password:'' },
    { id: 5, nom: 'Targaryen', prenom: 'Daenerys', email: null,password:'' },
    { id: 6, nom: 'Melisandre', prenom: null, email: null, password:'' },
    { id: 7, nom: 'Clifford', prenom: 'Ferrara', email: null, password:'' },
    { id: 8, nom: 'Frances', prenom: 'Rossini', email: null, password:'' },
    { id: 9, nom: 'Roxie', prenom: 'Harvey', email: null, password:'' },
>>>>>>> 7eb4c45225b1a2ee002bbce51c1f88b773263b8b
  ];

  //const [open,setOpen]=useState(false);




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

              {/* ------------------------ edit modal ------------------ */}
              <EditModalContacts />
               {/* ------------------------ show datagrid table search ------------------ */}
              <DataGridTable title={title} columns={columns} rows={rows}  />
              {/* end row */}
            </div> {/* container */}
          </div> {/* content */}
        </div>

    </div>
  )
}