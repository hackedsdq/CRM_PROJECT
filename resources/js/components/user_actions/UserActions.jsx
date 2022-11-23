import React from 'react'
import { useState } from 'react'
import { Inertia } from '@inertiajs/inertia';

export default function UserActions(props) {
  const handleDelete = () =>{
    console.log(selectedRows)
    if(selectedRows.length > 0){
      selectedRows.map((id)=>{
        if( props.title==='contact')
        Inertia.delete(`/adcom/contacts/${id}`);
        //else if(props.title==='prospects')
        //Inertia.delete(`/adcom/prospects/${id}`);
        //else if(props.title==='produits')
       // Inertia.delete(`/adcom/produits/${id}`);
      })
    }
    }
  return(
    <div>
 {props.action==="delete" && <button className='btn  btn-sm' ><i className='mdi mdi-delete'></i> </button>}

 {props.action==="modify" && <button className='btn  btn-sm' data-bs-toggle="modal" data-bs-target="#scrollable-modal"><i className='mdi mdi-square-edit-outline'></i></button>}
 {props.action==="show" && <button type="button" class="btn btn-sm" data-bs-toggle="modal" data-bs-target="#scrollable-modal"><i className='mdi mdi-eye'></i> </button>}
</div>
  )
}
  
  /*return (
    
    <div>
        {
            props.action==="delete"?
          
             <button className='btn  btn-sm' ><i className='mdi mdi-delete'></i> </button>
             :
             <button className='btn  btn-sm' data-bs-toggle="modal" data-bs-target="#scrollable-modal"><i className='mdi mdi-square-edit-outline'></i></button> 
              
        }
       
    </div>
    
  )}*/
      

