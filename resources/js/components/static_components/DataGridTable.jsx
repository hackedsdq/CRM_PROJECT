import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import { Inertia } from '@inertiajs/inertia';

export default function DataGridTable(props) {

  const [selectedRows,setSelectedRows]=useState([]);

  const getId = (id) =>{
    console.log("this is the mf " + id)
  }

  const handleDelete = () =>{
    console.log(props.title)
    if(selectedRows.length > 0){
      selectedRows.map((id)=>{
       if(props.title==='contacts')
        Inertia.delete(`/adcom/contacts/${id}`);
        else if(props.title==='Prospects')
        Inertia.delete(`/adcom/prospects/${id}`);
        //else if(props.title==='produits')
        //Inertia.delete(`/adcom/produits/${id}`);
      })
    }
    }
  /*  const titrePage= props.title;
   if(selectedRows.length > 0){

    if(titrePage =="Prospects"){
    selectedRows.map((id)=>{
      Inertia.delete(`/adcom/prospects/${id}`);
    })
  }else if(props.title =="Produits"){

    selectedRows.map((id)=>{
      Inertia.delete(`/adcom/produits/${id}`);
    })
  }else if(props.title =="contact"){

    selectedRows.map((id)=>{
      Inertia.delete(`/adcom/contact/${id}`);
    })
  }else if(props.title =="Clients"){

    selectedRows.map((id)=>{
      Inertia.delete(`/adcom/clients/${id}`);
    })
  }
  } */


  const handleConversion = () =>{
    console.log(selectedRows)
    if(selectedRows.length > 0){
      selectedRows.map((id)=>{
        Inertia.post(`/adcom/prospects/convert/${id}`);
      })
    }
  }

  return (
    <div className="row">
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <div className="row mb-2">
            <div className="col-sm-4">
                <button  className="btn btn-danger mb-2" data-bs-toggle="modal" data-bs-target="#scrollable-modal">
                  <i className="mdi mdi-plus-circle me-2" /> Add {props.title}
                </button>
            </div>
            <div className="col-sm-8">
              <div className="text-sm-end">
                <button type="button" className="btn btn-success mb-2 me-1"><i className="mdi mdi-cog" /></button>
                <button type="button" className="btn btn-light mb-2 me-1" onClick={handleDelete} >Delete</button>
                <button onClick={handleConversion} type="button" className="btn btn-light mb-2 me-1" disabled={props.title ==="Prospects" ? false : true } >convert</button>

                <button  type="button" className="btn btn-light mb-2" data-bs-toggle="modal" data-bs-target="#scrollable-modal">export</button>
<div><button class="btn  btn-sm" data-bs-toggle="modal" data-bs-target="#scrollable-modal"><i class="mdi mdi-square-edit-outline"></i></button></div>
              </div>
            </div>{/* end col*/}
          </div>

          <div><button class="btn  btn-sm" data-bs-toggle="modal" data-bs-target="#scrollable-modal"><i class="mdi mdi-square-edit-outline"></i></button></div>
          <div className="table-responsive">
            {/* ----------------------------------------   DATA GRID TABLE ADDED ------------------------------------------ */}
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                      rows={props.rows}
                      columns={props.columns}
                      pageSize={6}
                      rowsPerPageOptions={[5]}
                      checkboxSelection
                      onSelectionModelChange={(selectedRow)=> setSelectedRows(selectedRow)}
                />  
            </div>
          </div>
        </div> {/* end card-body*/}
      </div> {/* end card*/}
    </div> {/* end col */}
  </div>
  )
}
