import React,{useState,useEffect} from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import {Box,Modal,Button} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import PageTitle from './static_components/PageTitle'
import UserActions from './user_actions/UserActions'
import DataGridTable from './static_components/DataGridTable'
import AddModalContacts from './static_components/AddModalContacts'





export default function Contacts({contacts}) {
  let title = "contacts"
/*   const [pageLoaded, setPageLoaded]=useState(false)
  const [allContacts, setContacts]=useState([]);
  const [editedObject,setEditedObject]=useState(null); */


  
  const columns = [
    { field: 'nom', headerName: 'nom', width: 130 },
    { field: 'prenom', headerName: 'prenom', width: 130 },
    { field: 'fonction', headerName: 'fonction', width: 130 },
/*     { field: 'password', headerName: 'password', width: 130 },  
 { field: 'telephone', headerName: 'télephone', width: 130 },*/ 
    { field: 'delete', headerName: 'supprimer', width: 100, renderCell:(params)=> <UserActions user={params.row} action="delete" title='contacts'/>  },
    { field: 'modify', headerName: 'modifier', width: 100, renderCell:(params)=> <UserActions user={params.row} action="modify" title='contacts'/> },
    { field: 'show', headerName: 'afficher', width: 100, renderCell:(params)=> <UserActions user={params.row} action="show" title='contacts'/> },
  ];

  /*const rows = [
    { id: 1, lastName: 'abdelwahed', firstName: 'yagoub', Telephone:"043 22 82 46",Email:"abdelwahed.yagoub@gmail.com",Password:"1A2Z3E4R",Client:"/" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', Telephone:"043 26 71 65",Email:"market.sa.tlm@gmail.com",Password:"4R5T6Y7U",Client:"/"  },
    { id: 3,  lastName: 'Arslane', firstName: 'Chakib', Telephone:"0542 28 83 85",Email:"/",Password:"7U8I9O0P",Client:"/"},
    { id: 4, lastName: 'Stark', firstName: 'Arya', Telephone:"043 27 35 80",Email:"/",Password:"0P1A2Z7U",Client:"/" },
    { id: 5, lastName: 'Frances', firstName: 'Rossini', Telephone:"0550 67 26 01",Email:"sarlprocartonemballage@gmail.com",Password:"8I5T0P3E",Client:"/" },
   
  ];*/

  useEffect(()=>{

  },[])
  

  
return (
    <div className='wrapper' >
        <SideBar />
        <Header />
        
        <div className="container-login100">
    <div className="wrap-login100">
      <div className="modal-content">
         <div className="modal-body">
              {/* start page title 
              <PageTitle title={title} />
              {/* end page title */} 
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="rounded-0 p-0 mb-0">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Contacts</li>
          </ol>
        </nav>
      </div>
    </div>
              {/* ------------------------ edit modal ------------------ */}
              <AddModalContacts />
               {/* ------------------------ show datagrid table search ------------------ */}
              <DataGridTable title={title} columns={columns} rows={contacts}/>
              {/* end row */}
            </div> {/* container */}
          </div> {/* content */}
        </div>

    </div>
</div>

  )

}