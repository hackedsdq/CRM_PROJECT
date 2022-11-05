import React,{useState,useEffect} from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import {Box,Modal,Button} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import PageTitle from './static_components/PageTitle'
import EditModal from './static_components/EditModal'
import UserActions from './user_actions/UserActions'
import DataGridTable from './static_components/DataGridTable'

export default function Utilisateur() {

  let title = "Utilisateur"

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nom', headerName: 'Nom', width: 130 },
    { field: 'prenom', headerName: 'Prenom', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'password', headerName: 'Password', width: 130 },

    { field: 'delete', headerName: 'Delete', width: 70, renderCell:(params)=> <UserActions user={params.row} action="delete"/>  },
    { field: 'modify', headerName: 'Modify', width: 70, renderCell:(params)=> <UserActions user={params.row} action="modify"/> },
  ];
  
  const rows = [
    { id: 1, nom: 'Snow', prenom: 'Jon', email: 'nihelnb@gmail.com', password:'' },
    { id: 2, nom: 'Lannister', prenom: 'Cersei', email: null,password:'' },
    { id: 3, nom: 'Lannister', prenom: 'Jaime', email:null,password:'' },
    { id: 4, nom: 'Stark', prenom: 'Arya', email: null,password:'' },
    { id: 5, nom: 'Targaryen', prenom: 'Daenerys', email: null,password:'' },
    { id: 6, nom: 'Melisandre', prenom: null, email: null, password:'' },
    { id: 7, nom: 'Clifford', prenom: 'Ferrara', email: null, password:'' },
    { id: 8, nom: 'Frances', prenom: 'Rossini', email: null, password:'' },
    { id: 9, nom: 'Roxie', prenom: 'Harvey', email: null, password:'' },
  ];

  //const [open,setOpen]=useState(false);


  useEffect(()=>{
    var loadScript = function (src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(tag);
      }
    loadScript('./assets/js/vendor.min.js')
},[])



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
              <EditModal />
               {/* ------------------------ show datagrid table search ------------------ */}
              <DataGridTable title={title} columns={columns} rows={rows}  />
              {/* end row */}
            </div> {/* container */}
          </div> {/* content */}
        </div>

    </div>
  )
}