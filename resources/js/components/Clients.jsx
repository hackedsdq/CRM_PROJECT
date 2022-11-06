import React, { useState, useEffect } from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import { Box, Modal, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import PageTitle from './static_components/PageTitle'
import EditModalClient from './static_components/EditModal'
import UserActions from './user_actions/UserActions'
import DataGridTable from './static_components/DataGridTable'

export default function Clients() {

  let title = "Clients"

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Society', headerName: 'Society', width: 130 },
    { field: 'Adress', headerName: 'Adress', width: 400 },
    {
      field: 'Telephone',
      headerName: 'Telephone',
      type: 'number',
      width: 150,
    },
    { field: 'Website', headerName: 'Website', width: 200 },
    { field: 'delete', headerName: 'Delete', width: 70, renderCell: (params) => <UserActions user={params.row} action="delete" /> },
    { field: 'modify', headerName: 'Modify', width: 70, renderCell: (params) => <UserActions user={params.row} action="modify" /> },
  ];

  const rows = [
    { id: 1, Society: 'SOGERHWIT', Adress: 'B.P 869 Abou Tachfine Tlemcen 13000, Tlemcen, Algeria', Telephone: '043 22 82 46', Website: 'http://www.sogerhwit.net/' },
    { id: 2, Society: 'SAA', Adress: '05, rue Belhadi Boucif,Tlemcen,Algérie', Telephone: '043 26 71 65', Website: 'https://www.saa.dz/' },
    { id: 3, Society: 'SARL CYLEXX', Adress: 'Bd Ain Sbaa Ali, Tlemcen 13000, Tlemcen, Algeria', Telephone: '0542 28 83 85', Website: 'http://cylexx-tlemcen.com/' },
    { id: 4, Society: 'DHL', Adress: ' Boulevard Colonel Lotfi, Tlemcen, Algeria', Telephone: '043 27 35 80', Website: 'www.dhl.fr/fr.html' },
    { id: 5, Society: 'SARLPROCARTON', Adress: 'Zone industrielle desserte n4, Tlemcen 13000, Algeria', Telephone: '0550 67 26 01', Website: '/' },

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

            {/* ------------------------ edit modalClient ------------------ */}
            <EditModalClient />
            {/* ------------------------ show datagrid table search ------------------ */}
            <DataGridTable title={title} columns={columns} rows={rows} />
            {/* end row */}
          </div> {/* container */}
        </div> {/* content */}
      </div>

    </div>
  )
}




