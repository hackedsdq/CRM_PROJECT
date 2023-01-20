import React,{useState,useEffect} from 'react'
import Header from './static_components/Header'
import SideBar from './static_components/SideBar'
import {Box,Modal,Button} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import PageTitle from './static_components/PageTitle'
import UserActions from './user_actions/UserActions'
import DataGridTable from './static_components/DataGridTable'
import AddModalProduits from './static_components/AddModalProduits'
import ShowEditProduit from './ShowEditProduit'
export default function Produits({produits}) {

let title = "Produits"
const [pageLoaded, setPageLoaded]=useState(false)

//const [allProduits, setProduits]=useState([]);

const columns = [

{ field: 'nom', headerName: 'nom', width: 130 },
/* { field: 'description', headerName: 'description', width: 130},*/
{
field: 'quantité',
headerName: 'quantité',
width: 90,
},
{
field: 'prix',
headerName: 'prix',
width: 90,
},
{ field: 'delete', headerName: 'supprimer', width: 100, renderCell:(params)=> <UserActions title="produits" user={params.row} action="delete"/> },
{ field: 'modify', headerName: 'modifier', width: 100, renderCell:(params)=> <UserActions title="produits" user={params.row} action="modify"/> },
{ field: 'show', headerName: 'afficher', width: 100, renderCell:(params)=> <UserActions title="produits" user={params.row} action="show"/> },
];
// const rows = [
// { id: 2, nom: 'Lannister', description: 'Cersei',photo:""
// , quantité: 4 ,prix:'4000dA' },
// { id: 3, nom: 'Lannister', description: 'Jaime', quantité: 5,prix:'4000dA' },
// { id: 4, nom: 'Stark', description: 'Arya', quantité: 16, prix:'4000dA' },
// { id: 5, nom: 'Targaryen', description: 'Daenerys', quantité: null,prix:'4000dA' },
// { id: 6, nom: 'Melisandre', description: null, quantité: 10, prix:'4000dA' },
// { id: 7, nom: 'Clifford', description: 'Ferrara', quantité: 4, prix:'4000dA' },
// { id: 8, nom: 'Frances', description: 'Rossini', quantité: 3, prix:'4000dA' },
// { id: 9, nom: 'Roxie', description: 'Harvey', quantité: 65, prix:'4000dA' },
// ];


//const [open,setOpen]=useState(false);

useEffect(()=>{
    console.log("salam khoti")
//produits.map((prc)=> allProduits.push(prc))
setPageLoaded(true)
},[])

// const getAllProduits = () =>{
// console.log(allProduits)
// }


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
<PageTitle title={title} />
{/* end page title */} 
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="rounded-0 p-0 mb-0">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/adcom">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Produits</li>
          </ol>
        </nav>
      </div>
    </div>

{/* ------------------------ edit modal ------------------ */}
<AddModalProduits/>

{/* ------------------------ show datagrid table search ------------------ */}
<DataGridTable title={title} columns={columns} rows={produits}/>
{/* end row */}
</div> {/* content */}
</div>
</div>
</div>
</div>
)
}