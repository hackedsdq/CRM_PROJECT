import React from 'react'
import {useForm}  from "@inertiajs/inertia-react"
import { Inertia } from '@inertiajs/inertia'



export default function EditModalProduits(props) {
  const { data, setData, post, processing, errors } = useForm({
    nom: "",
    description :"", 
    prix: "",
    quantité:""
   
   
})

const  handleSubmit = (e) => {
e.preventDefault()
console.log(data)
post('/adcom/produits')
}


const handleChange = (e) =>{
  let inputType = e.target.name
  let inputValue = e.target.value

  if( inputType === "nom")
  setData(data.nom = inputValue )

  else if(inputType === "description")
  setData(data.description = inputValue)

  else if(inputType === "prix")
  setData(data.prix = inputValue)

  else if(inputType === "quantité")
  setData(data.quantité = inputValue)
}
  return (
<form onSubmit={(e)=>handleSubmit(e)} >
<div className="modal fade" id="scrollable-modal" tabIndex={-1} role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="scrollableModalTitle">Add Products</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>
      <div className="modal-body">
 
 {/*   bodyyyyy of the modal    */}

        
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Name</label>
                <input  onChange={(e)=>handleChange(e)} value={data.nom} name="nom" type="text"   className="form-control" />
                {errors.nom && <h6 style={{color:"red"}}>{errors.nom}</h6>}
            </div>
          
            <div className="mb-3">
                <label htmlFor="example-textarea" className="form-label">Description</label>
                <textarea  onChange={(e)=>handleChange(e)} value={data.description} name="description" className="form-control" id="example-textarea" rows={5} defaultValue={""} placeholder="Adress..."  />
                  {errors.description && <h6 style={{color:"red"}}>{errors.description}</h6>}
            </div>   
          
            <div class="col-xl-6">
              <div class="mb-3 mt-3 mt-xl-0">
                  <label for="projectname" class="mb-0">Photo</label>
                  <p  class="text-muted font-14">Recommended thumbnail size 800x400 (px).</p>

                  <div class="dropzone"  data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                      <div>
                          <input   name="file" type="file"/>
                      </div>

                      <div class="dz-message needsclick">
                          <i class="h3 text-muted dripicons-cloud-upload"></i>
                          <h4>Drop files here or click to upload.</h4>
                      </div>
            </div>
                </div></div>
           
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Price</label>
                <input   onChange={(e)=>handleChange(e)} value={data.prix} name="prix" type="text"  className="form-control"/>
                {errors.prix && <h6 style={{color:"red"}}>{errors.prix}</h6>}

            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Quantity</label>
                <input  onChange={(e)=>handleChange(e)} value={data.quantité} name="quantité" type="text"  className="form-control"  />
                {errors.quantité && <h6 style={{color:"red"}}>{errors.quantité}</h6>}

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