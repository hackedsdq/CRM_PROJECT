import React, { useState } from 'react'
import {useForm}  from "@inertiajs/inertia-react"
import { Inertia } from '@inertiajs/inertia'

import { Autocomplete, TextField } from '@mui/material'
import { useEffect } from 'react';

export default function AddModalOpportunity(props) {

let ClientProp = props.clients;


 useEffect(()=>{
},[]) 


  let { data, setData, post, processing, errors, } = useForm({
    nom: "",
    //montant :"", 
    //étape:"first", 
    client_id:"",
    date_de_clôture:""
})



const handleSubmit = (e) => {
  console.log(data)
e.preventDefault()
if(data.client_id !== undefined)
post('/adcom/opportunities/add',{
  preserveState:true,
  preserveScroll:true,
  onSuccess:page=>{
      Inertia.reload({only:['opportunities_one','opportunities_two','opportunities_three','opportunities_four']})
      $('#scrollable-modal').hide();
      $('.modal-backdrop').remove(); 
      document.body.style.overflow = 'scroll'
  },
})
}




const handleChange = (e) =>{
  let inputType = e.target.name
  let inputValue = e.target.value
  if( inputType === "nom")
  setData(data.nom = inputValue )

   else if(inputType === "date_de_clôture")
  setData(data.date_de_clôture = inputValue)
 
  else if(inputType === "étape")
  setData(data.étape = `${e.target.value}`)

}

const handleSearchClient= (client) =>{
  if(client !== "")
  Inertia.post('/adcom/opportunities/',{
      client:client,
  })
}
const handleChangeAutoComplete = (value) =>{
let client_id = value.id.toString();
setData(data.client_id = `${client_id}`)
//console.log(client_id)
}


return (
<form  onSubmit={(e)=>handleSubmit(e)} >
<div className="modal fade" id="scrollable-modal" tabIndex={-1} role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="scrollableModalTitle">Ajouter une opportunité</h5>
        <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>


      <div className="modal-body">
 
 {/*   bodyyyyy of the modal    */}

            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">nom d'opportunité</label>
                <input onChange={(e)=>handleChange(e)} value={data.nom} name="nom"  type="text" className="form-control" />
                {errors.nom && <h6 style={{color:"red"}}>{errors.nom}</h6>}
            </div>

            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">date de cloture</label>
                <input onChange={(e)=>handleChange(e)} value={data.date_de_clôture} name="date_de_clôture" type="date" className="form-control" />
                {errors.date_de_clôture && <h6 style={{color:"red"}}>{errors.date_de_clôture}</h6>}
            </div>


            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">clients</label>
                <Autocomplete
                id="combo-box-demo"
                onInputChange={(e)=>handleSearchClient(e.target.value)}
                options={ClientProp}
                sx={{ width: 300,height:100 }}
                onChange={(event, value)=> handleChangeAutoComplete(value)}
                renderInput={(params) => <TextField {...params}/>}
            />
                {errors.client_id && <h6 style={{color:"red"}}>{errors.client_id}</h6>}
            </div>


            
{/*             <div className="mb-3">
                <label htmlFor="example-select" className="form-label">étape</label>
                <select onChange={e => handleChange(e)} value={data.étape} name="étape" className="form-select" id="example-select">
                  <option value="one">prospection</option>
                  <option value="two">proposition/devis</option>
                  <option value="three">cloturé perdue</option>
                  <option value="four">cloturé gagnée</option>

                </select>
            </div> */}
    
 {/*   end  of the modal  body    */}

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>


    </div>{/* /.modal-content */}
  </div>{/* /.modal-dialog */}

</div>
</form>

  )
}