import React,{useEffect} from 'react'
import {useForm}  from "@inertiajs/inertia-react"

export default function ShowEditClient({client})  {

  const { data, setData, post, processing, errors } = useForm({
    société: '',
    téléphone:'',
    adresse:'',
    site_web:'',
})


const  handleSubmit = (e) => {
 e.preventDefault()
 console.log(data)
 post(`/adcom/clients/update/${client.id}`)
}

useEffect(()=>{
  console.log(client)
  handleGetContact()
},[])


const handleGetContact = ()=>{
  setData(data.société = client.société)
  setData(data.téléphone = client.téléphone)
  setData(data.adresse = client.adresse)
  setData(data.site_web = client.site_web)

}

const handleChange = (e) =>{
  let inputType = e.target.name
  let inputValue = e.target.value

  if(inputType === "société")
  setData(data.société = inputValue)

  else if(inputType === "téléphone")
  setData(data.téléphone = inputValue)

  else if(inputType === "adresse")
  setData(data.adresse = inputValue)

  else if(inputType === "site_web")
  setData(data.site_web = inputValue)
}


return (
<form onSubmit={(e)=>handleSubmit(e)} >
    <div className="modal-content">
      <div className="modal-body">

 {/*   bodyyyyy of the modal    */}

            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Society</label>
                <input onChange={(e)=>handleChange(e)} value={data.société} name="société" type="text"  className="form-control" />
                {errors.société && <h6 style={{color:"red"}}>{errors.société}</h6>}

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

 {/*   end  of the modal  body    */}

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>


    </div>{/* /.modal-content */}

</form>

  )
}