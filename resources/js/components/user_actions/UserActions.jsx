import React from 'react'

export default function UserActions(props) {



  return (
    <div>
        {
            props.action==="delete"?
             <button className='btn  btn-sm' ><i className='mdi mdi-delete'></i> </button>
             : 
             <button className='btn  btn-sm' data-bs-toggle="modal" data-bs-target="#scrollable-modal"><i className='mdi mdi-square-edit-outline'></i></button> 
        }
    </div>
  )
}
