import React from 'react';
import {useForm}  from "@inertiajs/inertia-react"

export default function AddModalContacts(props) { 
  const { data, setData, post, processing, errors } = useForm({
    nom: "",
    prenom :"",  
    password:'', 
    email : "" , 
    telephone:'',
    fonction:""
})
const  handleSubmit = (e) => {
  e.preventDefault()
  console.log(data)
  post('/adcom/contacts')
  }
const handleChange = (e) =>{
  let inputType = e.target.name
  let inputValue = e.target.value

  if( inputType === "nom")
  setData(data.nom = inputValue )

  else if(inputType === "prenom")
  setData(data.prenom = inputValue)

  else if(inputType === "fonction")
  setData(data.fonction = inputValue)

  else if(inputType === "email")
  setData(data.email = inputValue)

  else if(inputType === "telephone")
  setData(data.telephone = inputValue)

  else if(inputType === "password")
  setData(data.password = inputValue)

}

  return (
<form onSubmit={(e)=>handleSubmit(e)} >
<div className="modal fade" id="scrollable-modal" tabIndex={-1} role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="scrollableModalTitle">Contacts</h5>
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

           <div className="mb-3">
                <label htmlFor="example-email" className="form-label">Email</label>
                <input onChange={(e)=>handleChange(e)} value={data.email} name="email" type="email" className="form-control" placeholder="Email" />
                {errors.email && <h6 style={{color:"red"}}>{errors.email}</h6>}
            </div>
            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Password</label>
                <input onChange={(e)=>handleChange(e)} value={data.password} name="password" type="text"  className="form-control" />
                {errors.password && <h6 style={{color:"red"}}>{errors.password}</h6>}




            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Fonction</label>
                <input onChange={(e)=>handleChange(e)} value={data.fonction} name="fonction" type="text"  className="form-control" />
                {errors.fonction && <h6 style={{color:"red"}}>{errors.fonction}</h6>}
            </div>

            <div className="mb-3">
                <label htmlFor="example-palaceholder" className="form-label">Telephone</label>
                <input onChange={(e)=>handleChange(e)} value={data.telephone} name="telephone" type="text" className="form-control" placeholder="Telephone" />
                {errors.telephone && <h6 style={{color:"red"}}>{errors.telephone}</h6>}
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
