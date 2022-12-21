import React,{useEffect,useState} from 'react'
import {useForm}  from "@inertiajs/inertia-react"
import MasterDetailClientContacts from "./master_details_components/MasterDetailClientContacts"
import MasterDetailClientOpportunities from "./master_details_components/MasterDetailClientOpportunities"
import SideBar from './static_components/SideBar'
import Header from './static_components/Header'

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


const handleSetContacts = () =>{
  console.log(clientContacts)
   clientContacts?.map((data)=>rows.push(
    {
      id: data.id,
      nom:data.nom,
      prenom:data.prenom,
      fonction:data.fonction,
      email:data.email,
      telephone:data.telephone

    }
  )) 
}

const handleSetOpportunities = () =>{
  console.log(clientOpportunities)
   clientOpportunities?.map((data)=>rows2.push(
    {
      id: data.id,
      nom:data.nom,
      montant:data.montant,
      étape:data.étape,
      date_de_clôture:data.date_de_clôture
    }
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
<div className='wrapper' >
<SideBar />
<Header />
    <div className="container-login100">
      <div className="wrap-login100">
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
      <MasterDetailClientContacts rows={rows}/>
      <br/>
      <MasterDetailClientOpportunities rows={rows2} />
          </div>
          <div className="modal-footer">
            <button onClick={()=>console.log(rows2)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Save changes</button>
          </div>


        </div>{/* /.modal-content */}

          </form>
        </div>
      </div>
</div>
)
}