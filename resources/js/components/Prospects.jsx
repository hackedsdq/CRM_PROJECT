import React,{useState,useEffect} from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import {Box,Modal,Button} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import PageTitle from './static_components/PageTitle'
import EditModal from './static_components/EditModal'
import UserActions from './user_actions/UserActions'
import DataGridTable from './static_components/DataGridTable'

export default function Prospects() {

  let title = "Prospects"

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'society', headerName: 'society', width: 130 },
    { field: 'fonction', headerName: 'fonction', width: 130 },
    { field: 'Email', headerName: 'Email', width: 250 },
    {
      field: 'telephone',
      headerName: 'telephone',
      type: 'number',
      width: 120,
    },
    { field: 'Adress', headerName: 'Adress', width: 400 },
    { field: 'Website', headerName: 'Website', width: 200 },
    { field: 'Status', headerName: 'Status', width: 100 },
    { field: 'Source', headerName: 'Source', width: 130 },

    { field: 'delete', headerName: 'Delete', width: 70, renderCell:(params)=> <UserActions user={params.row} action="delete"/>  },
    { field: 'modify', headerName: 'Modify', width: 70, renderCell:(params)=> <UserActions user={params.row} action="modify"/> },
  ];
  
  const rows = [
    { id: 1, lastName: 'abdelwahed', firstName: 'yagoub', society: 'SOGERHWIT',fonction:'General Director',Email:'abdelwahed.yagoub@gmail.com',telephone:'043 22 82 46',Adress:' B.P 869 Abou Tachfine Tlemcen 13000, Tlemcen, Algeria',Website:'http://www.sogerhwit.net/',Status:'Hot',Source:'Client'},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', society: 'SAA',fonction:'manager',Email:'market.sa.tlm@gmail.com',telephone:'043 26 71 65',Adress:'05, rue Belhadi Boucif,Tlemcen,Algérie',Website:'https://www.saa.dz/',Status:'Cold',Source:'announcement'},
    { id: 3, lastName: 'Arslane', firstName: 'Chakib', society: 'SARL CYLEXX',fonction:'general manager',Email:'/',telephone:'0542 28 83 85',Adress:' Bd Ain Sbaa Ali, Tlemcen 13000, Tlemcen, Algeria',Website:'http://cylexx-tlemcen.com/',Status:'Hot',Source:'Client' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', society: 'DHL',fonction:'manager',Email:'/',telephone:'043 27 35 80',Adress:' Boulevard Colonel Lotfi, Tlemcen, Algeria',Website:'www.dhl.fr/fr.html',Status:'Hot',Source:'Client' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', society: 'SARLPROCARTON',fonction:'Director',Email:'sarlprocartonemballage@gmail.com',telephone:'0550 67 26 01',Adress:'Zone industrielle desserte n4, Tlemcen 13000, Algeria',Website:'/',Status:'Hot',Source:'Client' },
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




