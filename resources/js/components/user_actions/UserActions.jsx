import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
export default function UserActions(props) {
  let action = props.action;
  let title = props.title;
  let user = props.user
  
return(
<div>
 {action==="delete" && <button className='btn  btn-sm' ><i className='mdi mdi-delete'></i> </button>}
 {action==="modify" && <InertiaLink href={`/adcom/${title}/edit/${user.id}`}> <i className='mdi mdi-square-edit-outline'></i></InertiaLink>}
 {action==="show" && <InertiaLink href={`/adcom/${title}/show/${user.id}`}> <i className='mdi mdi-square-edit-outline'></i></InertiaLink>}
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
      

