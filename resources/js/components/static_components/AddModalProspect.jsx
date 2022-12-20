import React from 'react'
import {useForm}  from "@inertiajs/inertia-react"
import { Inertia } from '@inertiajs/inertia'



export default function AddModalProspect(props) {

  const { data, setData, post, processing, errors } = useForm({
    nom: "",
    prenom :"", 
    société: '', 
    fonction:'', 
    email : "" , 
    téléphone:'', 
    adresse:'', 
    site_web:'', 
    Statut:"0", 
    Source:""
})


const  handleSubmit = (e) => {
e.preventDefault()
console.log(data)
post('/adcom/prospects')
}


const handleChange = (e) =>{
  let inputType = e.target.name
  let inputValue = e.target.value

  if( inputType === "nom")
  setData(data.nom = inputValue )

  else if(inputType === "prenom")
  setData(data.prenom = inputValue)

  else if(inputType === "société")
  setData(data.société = inputValue)

  else if(inputType === "fonction")
  setData(data.fonction = inputValue)

  else if(inputType === "email")
  setData(data.email = inputValue)

  else if(inputType === "téléphone")
  setData(data.téléphone = inputValue)

  else if(inputType === "adresse")
  setData(data.adresse = inputValue)

  else if(inputType === "site_web")
  setData(data.site_web = inputValue)

  else if(inputType === "Statut")
  setData(data.Statut = `${e.target.selectedIndex}`)

  else if(inputType === "Source")
  setData(data.Source = inputValue)
}


return (
<form onSubmit={(e)=>handleSubmit(e)} >
<div className="modal fade" id="scrollable-modal" tabIndex={-1} role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="scrollableModalTitle">Add Prospects</h5>
        <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>


      <div className="modal-body">
 
 {/*   bodyyyyy of the modal    */}

            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">First Name</label>
                <input onChange={(e)=>handleChange(e)} value={data.nom} name="nom"  type="text" className="form-control" />
                {errors.nom && <h6 style={{color:"red"}}>{errors.nom}</h6>}
            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Last Name</label>
                <input onChange={(e)=>handleChange(e)} value={data.prenom} name="prenom" type="text" className="form-control" />
                {errors.prenom && <h6 style={{color:"red"}}>{errors.prenom}</h6>}

            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Society</label>
                <input onChange={(e)=>handleChange(e)} value={data.société} name="société" type="text"  className="form-control" />
                {errors.société && <h6 style={{color:"red"}}>{errors.société}</h6>}

            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Fonction</label>
                <input onChange={(e)=>handleChange(e)} value={data.fonction} name="fonction" type="text"  className="form-control" />
                {errors.fonction && <h6 style={{color:"red"}}>{errors.fonction}</h6>}
            </div>

           <div className="mb-3">
                <label htmlFor="example-email" className="form-label">Email</label>
                <input onChange={(e)=>handleChange(e)} value={data.email} name="email" type="email" className="form-control" placeholder="Email" />
                {errors.email && <h6 style={{color:"red"}}>{errors.email}</h6>}
            </div>
            <div className="mb-3">
                <label htmlFor="example-palaceholder" className="form-label">Telephone</label>
                <input onChange={(e)=>handleChange(e)} value={data.téléphone} name="téléphone" type="text" className="form-control" placeholder="Telephone" />
                {errors.téléphone && <h6 style={{color:"red"}}>{errors.téléphone}</h6>}
            </div>
            <div className="mb-3">
                <label htmlFor="example-textarea" className="form-label">Adresse</label>
                <input onChange={(e)=>handleChange(e)} value={data.adresse} name="adresse" type="text" className="form-control" placeholder="Adresse" />
                {errors.adresse && <h6 style={{color:"red"}}>{errors.adresse}</h6>}
            </div>
            <div className="mb-3">
                <label htmlFor="example-Website" className="form-label">Website</label>
                <input onChange={(e)=>handleChange(e)} value={data.site_web} name="site_web" type="text" className="form-control" placeholder="Https://" />
                {errors.site_web && <h6 style={{color:"red"}}>{errors.site_web}</h6>}
            </div>

            <div className="mb-3">
                <label htmlFor="example-Website" className="form-label">Source</label>
                <input onChange={(e)=>handleChange(e)} value={data.Source} name="Source" type="text" className="form-control" placeholder="Source" />
                {errors.Source && <h6 style={{color:"red"}}>{errors.Source}</h6>}
            </div>
            
            <div className="mb-3">
                <label htmlFor="example-select" className="form-label">Statut</label>
                <select onChange={e => handleChange(e)} value={data.Statut} name="Statut" className="form-select" id="example-select">
                  <option value="0">Hot</option>
                  <option value="1">Cold</option>
                </select>
            </div>
    
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
