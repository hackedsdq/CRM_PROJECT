import React,{useEffect,useState} from 'react'
import {useForm}  from "@inertiajs/inertia-react"
import MasterDetailClientContacts from "./master_details_components/MasterDetailClientContacts"
import MasterDetailClientOpportunities from "./master_details_components/MasterDetailClientOpportunities"

export default function ShowEditClient({client, type, clientContacts, clientOpportunities})  {

  const { data, setData, post, processing, errors } = useForm({
    société: '',
    téléphone:'',
    adresse:'',
    site_web:'',
})

const [rows, setRows] = useState([])
const [rows2, setRows2] = useState([])


const  handleSubmit = (e) => {
 e.preventDefault()
 console.log(data)
 post(`/adcom/clients/update/${client.id}`)
}

useEffect(()=>{
  //console.log(clientContacts)
  handleSetClient()
  handleSetContacts()
  handleSetOpportunities()
},[])


const handleSetClient = ()=>{
  setData(data.société = client.société)
  setData(data.téléphone = client.téléphone)
  setData(data.adresse = client.adresse)
  setData(data.site_web = client.site_web)
}

const  createData = (id, nom, prenom, fonction, email, telephone) => {
  return{
    id,
    nom,
    prenom,
    fonction,
    email,
    telephone,
  };
}


const handleSetContacts = () =>{
  console.log(clientContacts)
   clientContacts?.map((data)=>rows.push(
    createData(data.id,data.nom, data.prenom, data.fonction, data.email, data.telephone)
  )) 
}

const handleSetOpportunities = () =>{
  console.log(clientOpportunities)
   clientOpportunities?.map((data)=>rows2.push(
    createData(data.id,data.nom, data.montant, data.étape, data.date_de_clôture)
  )) 
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
  <div className="row justify-content-center">
  <div className="col-xxl-6 col-lg-5">
    <div className="card">
      <div className="card-header pt-4 pb-4 text-center bg-primary">
            <h4 style={{color:"#fff"}}>editclient</h4>
      </div>
<form onSubmit={(e)=>handleSubmit(e)} >
    <div className="modal-content">
      <div className="modal-body">

 {/*   bodyyyyy of the modal    */}

            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Society</label>
                <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.société} name="société" type="text"  className="form-control" />
                {errors.société && <h6 style={{color:"red"}}>{errors.société}</h6>}

            </div>

            <div className="mb-3">
                <label htmlFor="example-palaceholder" className="form-label">Telephone</label>
                <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.téléphone} name="téléphone" type="text" className="form-control" placeholder="Telephone" />
                {errors.téléphone && <h6 style={{color:"red"}}>{errors.téléphone}</h6>}
            </div>
            <div className="mb-3">
                <label htmlFor="example-textarea" className="form-label">Adresse</label>
                <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.adresse} name="adresse" type="text" className="form-control" placeholder="Adresse" />
                {errors.adresse && <h6 style={{color:"red"}}>{errors.adresse}</h6>}
            </div>
            <div className="mb-3">
                <label htmlFor="example-Website" className="form-label">Website</label>
                <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.site_web} name="site_web" type="text" className="form-control" placeholder="Https://" />
                {errors.site_web && <h6 style={{color:"red"}}>{errors.site_web}</h6>}
            </div>

 {/*   end  of the modal  body    */}
 <h1>contacts</h1>
  <MasterDetailClientContacts rows={rows}/>
 <h1>opportunities</h1>
  <MasterDetailClientOpportunities rows={rows2} />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>


    </div>{/* /.modal-content */}

      </form>
    </div>
  </div>
</div>
)
}