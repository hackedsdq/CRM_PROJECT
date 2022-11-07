import React,{useState,useEffect} from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import {Box,Modal,Button} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import PageTitle from './static_components/PageTitle'
import EditModalProduits from './static_components/EditModalProduits'
import UserActions from './user_actions/UserActions'
import DataGridTable from './static_components/DataGridTable'

export default function Produits() {

  let title = "Produits"

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nom', headerName: 'Nom', width: 130 },
    { field: 'description', headerName: 'Description', width: 130},
    { field: 'photo', headerName: 'Photo',type:Image, width: 130 },
    {
      field: 'quantité',
      headerName: 'Quantité',
      type: 'number',
      width: 90,
    },
    {
        field: 'prix',
        headerName: 'Prix',
       
        width: 90,
      },
    { field: 'delete', headerName: 'Delete', width: 70, renderCell:(params)=> <UserActions user={params.row} action="delete"/>  },
    { field: 'modify', headerName: 'Modify', width: 70, renderCell:(params)=> <UserActions user={params.row} action="modify"/> },
  ];
  
  const rows = [
    { id: 2, nom: 'Lannister', description: 'Cersei', quantité: 4 ,prix:'4000dA' },
    { id: 3, nom: 'Lannister', description: 'Jaime', quantité: 5,prix:'4000dA' },
    { id: 4, nom: 'Stark', description: 'Arya', quantité: 16, prix:'4000dA' },
    { id: 5, nom: 'Targaryen', description: 'Daenerys', quantité: null,prix:'4000dA' },
    { id: 6, nom: 'Melisandre', description: null, quantité: 10, prix:'4000dA' },
    { id: 7, nom: 'Clifford', description: 'Ferrara', quantité: 4, prix:'4000dA' },
    { id: 8, nom: 'Frances', description: 'Rossini', quantité: 3, prix:'4000dA' },
    { id: 9, nom: 'Roxie', description: 'Harvey', quantité: 65, prix:'4000dA' },
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
              <EditModalProduits />
               {/* ------------------------ show datagrid table search ------------------ */}
              <DataGridTable title={title} columns={columns} rows={rows}  />
              {/* end row */}
            </div> {/* container */}
          </div> {/* content */}
        </div>

    </div>
  )
}