import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia';
export default function UserActions(props) {
const title= props.title;
const user= props.user;


const handleDelete = () =>{
  Inertia.delete(`/adcom/${title}/${user.id}`);
}
 
return(
  <div>
 {props.action==="delete" && <button className='btn  btn-sm'  onClick={handleDelete}><i className='mdi mdi-delete'></i> </button>}
 {props.action==="modify" && <InertiaLink href={`/adcom/${title}/edit/${user.id}`}><i className='mdi mdi-square-edit-outline'></i></InertiaLink>}
 {props.action==="show" && <InertiaLink href={`/adcom/${title}/show/${user.id}`}><i className='mdi mdi-eye'></i> </InertiaLink>}
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
      

