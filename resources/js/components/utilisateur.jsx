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
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    { field: 'delete', headerName: 'Delete', width: 70, renderCell:(params)=> <UserActions user={params.row} action="delete"/>  },
    { field: 'modify', headerName: 'Modify', width: 70, renderCell:(params)=> <UserActions user={params.row} action="modify"/> },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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