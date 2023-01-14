import React,{useEffect,useState,useRef} from 'react'
import {useForm}  from "@inertiajs/inertia-react"
import MasterDetailClientContacts from "./master_details_components/MasterDetailClientContacts"
import MasterDetailClientOpportunities from "./master_details_components/MasterDetailClientOpportunities"
import SideBar from './static_components/SideBar'
import Header from './static_components/Header'

export default function ShowEditClient({client, type, clientContacts, clientOpportunities})  {
  const [rows, setRows] = useState([])
  const [rows2, setRows2] = useState([])

  const { data, setData, post, processing, errors } = useForm({
    société: '',
    téléphone:'',
    adresse:'',
    site_web:'',
    logo:''
})



const cloudinaryRef = useRef();
const widgetRef = useRef();
 // uploading the image
 cloudinaryRef.current =  window.cloudinary;
 widgetRef.current = cloudinaryRef.current.createUploadWidget({
   cloudName: 'dbttd3n1v', 
   uploadPreset: 'j5xeceeh'
 }
   , (error, result) => { 
     if (!error && result && result.event === "success") { 
     let logo = result.info.thumbnail_url
     setData(data.logo = logo) 
     console.log(result.info)
     }
   }
 )


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
  setData(data.logo = client.logo)
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
      telephone:data.telephone,
      photo:data.photo
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
            <div style={{textAlign:"center"}}>
              {type==="edit" && <i onClick={()=> widgetRef.current.open()} style={{position:"relative", top:-10,right:10 }} className='mdi mdi-square-edit-outline'></i>}             
              <img  className="me-3 rounded-circle" style={{objectFit:'contain'}} width={80} height={80} src={data.logo} alt='' />
              </div>

                <div className="mb-3">
                    <label htmlFor="simpleinput" className="form-label">Société</label>
                    <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.société} name="société" type="text"  className="form-control" />
                    {errors.société && <h6 style={{color:"red"}}>{errors.société}</h6>}

                </div>

                <div className="mb-3">
                    <label htmlFor="example-palaceholder" className="form-label">Téléphone</label>
                    <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.téléphone} name="téléphone" type="text" className="form-control" placeholder="Telephone" />
                    {errors.téléphone && <h6 style={{color:"red"}}>{errors.téléphone}</h6>}
                </div>
                <div className="mb-3">
                    <label htmlFor="example-textarea" className="form-label">Adresse</label>
                    <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.adresse} name="adresse" type="text" className="form-control" placeholder="Adresse" />
                    {errors.adresse && <h6 style={{color:"red"}}>{errors.adresse}</h6>}
                </div>
                <div className="mb-3">
                    <label htmlFor="example-Website" className="form-label">Site_Web</label>
                    <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.site_web} name="site_web" type="text" className="form-control" placeholder="Https://" />
                    {errors.site_web && <h6 style={{color:"red"}}>{errors.site_web}</h6>}
                </div>
    <br/>
    <br/>
    {/*   end  of the modal  body    */}
      <MasterDetailClientContacts rows={rows}/>
      <br/>
      <MasterDetailClientOpportunities rows={rows2} />
          </div>
          <div className="modal-footer">
            { type==="edit" && <button type="submit" className="btn btn-primary">Mise à jour</button>}
          </div>


        </div>{/* /.modal-content */}

          </form>
        </div>
      </div>
</div>
)
}