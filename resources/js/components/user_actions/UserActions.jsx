import React from 'react'

export default function UserActions(props) {
  const handleDeleteOneItem = () =>{
      const titrePage= props.title;
   
  
      if(titrePage =="Prospects"){
 
        Inertia.delete(`/adcom/prospects/${id}`);
      
    }else if(props.title =="Produits"){
  
    
        Inertia.delete(`/adcom/produits/${id}`);
      
    }else if(props.title =="contact"){
  
    
        Inertia.delete(`/adcom/contact/${id}`);
    
    }else if(props.title =="Clients"){
  
        Inertia.delete(`/adcom/clients/${id}`);
      
    }
  }


    
  return(
    <div>
 {props.action==="delete" && <button className='btn  btn-sm' onClick={handleDeleteOneItem} ><i className='mdi mdi-delete'></i> </button>}

 {props.action==="modify" && <button className='btn  btn-sm'  data-bs-toggle="modal" data-bs-target="#scrollable-modal"><i className='mdi mdi-square-edit-outline'></i></button>}
 {props.action==="show" && <button type="button" class="btn btn-sm" data-bs-toggle="modal" data-bs-target="#bs-example-modal-lg"><i className='mdi mdi-eye'></i> </button>}
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
      

