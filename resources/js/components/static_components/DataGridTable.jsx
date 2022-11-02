import React from 'react'
import { DataGrid } from '@mui/x-data-grid'


export default function DataGridTable(props) {
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
                <button type="button" className="btn btn-light mb-2 me-1">Import</button>
                <button type="button" className="btn btn-light mb-2" data-bs-toggle="modal" data-bs-target="#scrollable-modal">Export</button>

              </div>
            </div>{/* end col*/}
          </div>
          <div className="table-responsive">
            {/* ----------------------------------------   DATA GRID TABLE ADDED ------------------------------------------ */}
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                      rows={props.rows}
                      columns={props.columns}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      checkboxSelection
                />  
            </div>
          </div>
        </div> {/* end card-body*/}
      </div> {/* end card*/}
    </div> {/* end col */}
  </div>
  )
}
