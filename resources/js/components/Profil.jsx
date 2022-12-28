import React, { useEffect, useRef, useState } from 'react';
import'../../css/ProfileP.css'
import'../../css/ContactUs.css'
import { useForm } from '@inertiajs/inertia-react';


import MasterDetailClientOpportunities from './master_details_components/MasterDetailClientOpportunities';
function Profil({contact, client,opportunity}) {
    const { data, setData, post, processing, errors } = useForm({
        nom:"test",
        prenom :"",  
        client_id:"", 
        fonction:"", 
        email :"" , 
        telephone:"", 
        photo:"https://res.cloudinary.com/dbttd3n1v/image/upload/v1671478713/snernvqpxpnxpjt3owmn.jpg",
        societe : ""

    
    })

    const [rows2, setRows2] = useState([])

    useEffect(()=>{
      handleGetContact()
      handleSetOpportunities()
    },[])
  
    
const handleSetOpportunities = () =>{
  console.log(opportunity)
  opportunity?.map((data)=>rows2.push(
    {
      id: data.id,
      nom:data.nom,
      montant:data.montant,
      étape:data.étape,
      date_de_clôture:data.date_de_clôture
    }
  )) 
}

    const  handleSubmit = (e) => {
     e.preventDefault()
    //console.log(data)
    post(`/home/profil/${contact.id}`) 
    }

const cloudinaryRef = useRef();
const widgetRef = useRef();
let photo;
// uploading the image
cloudinaryRef.current = window.cloudinary;
widgetRef.current = cloudinaryRef.current.createUploadWidget({
cloudName: 'dbttd3n1v', 
uploadPreset: 'j5xeceeh'
}
, (error, result) => { 
if (!error && result && result.event === "success") { 
photo = result.info.thumbnail_url
//data.photo = photo;
data.photo=photo
// setData('photo',photo) 
setData('photo', photo)
console.log(result.info)
}
}
)


  
  const handleGetContact = ()=>{
    setData(data.societe = client.société)
    setData(data.nom = contact.nom)
    setData(data.prenom = contact.prenom)
    setData(data.fonction = contact.fonction.toString())
    setData(data.telephone = contact.telephone)
    setData(data.email= contact.email)
    // setData(data.societe= client.societe)
    // setData(data.client_id = client.id)
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
    else if(inputType === "societe")
    setData(data.societe = inputValue)
  
  }
console.log( client.société)

return (
  <div>
 <header class="header_section">
      
      <div class="header_bottom">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <img src="../../../assets/images/logo.png" alt=""/>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ">
                <li class="nav-item active">
                
                {/* <InertiaLink href={`/homeOffice`}> */}
                    <a class="nav-link">
                      Home
                    </a><span class="sr-only">(current)</span>
                    {/* </InertiaLink>  */}
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html"> About</a>
                </li>
                <li class="nav-item">
                {/* <InertiaLink href={`/Products`}> */}
                    <a class="nav-link">
                      Products
                    </a>
                    {/* </InertiaLink> */}
                </li>
                <li class="nav-item">
                {/* <InertiaLink href={`/ContactUs`}> */}
                    <a class="nav-link">
                     Contact Us
                    </a>
                    {/* </InertiaLink> */}
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="why.html">Why Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="testimonial.html">Testimonial</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>

<div class="wrapper bg-white mt-sm-5">
  


<h4 class="pb-4 border-bottom">Account settings</h4>
<div class="d-flex align-items-start py-3 border-bottom">
  <img src= {data.photo} style={{
    width:"200px",
    height:"200px",
    borderRadius:"50%",
    objectFit:"cover",
    border:"4px solid #2d5070"

  }}></img>
<div class="col-xl-6" >
<div class="mb-3 mt-3 mt-xl-0"style={{marginLeft:"30px"}}>
<label for="projectname" class="mb-0">
photo 
</label>
<p class="text-muted font-14">
Recommended thumbnail size 800x400 (px).
</p>


<div onClick={()=> widgetRef.current.open()} class="dz-message needsclick">
  
<button class="btn btn-success"  >

<i class=" dripicons-cloud-upload">Upload</i>
</button>
</div>

</div>
</div>
</div>
<div class="row py-2">
<div class="col-md-6">
<label for="firstname">First Name</label><br/>
<span id ="textffil">{data?.nom}</span>
</div>
<div class="col-md-6 pt-md-0 pt-3">
<label for="lastname">Last Name</label>
<br/>
<span id ="textffil">{data.prenom}</span>

</div>
</div>
<div class="row py-2">
<div class="col-md-6">
<label for="email">Email Address</label><br/>
<span id ="textffil">{data.email}</span>
</div>
<div class="col-md-6 pt-md-0 pt-3">
<label for="phone">Phone Number</label><br/>
<span id ="textffil">{data.telephone}</span>
</div>
</div>
<div class="row py-2">
<div class="col-md-6">
<label for="email">Fonction</label><br/>
<span id ="textffil">{data.fonction}</span>
</div>
<div class="col-md-6 pt-md-0 pt-3">
<label for="phone"> Société </label><br/>
 <span id ="textffil"> {data.societe}</span>
</div>
</div>
<div class="row py-2">
<div class="col-md-6">
<label for="email">Telephone societe</label><br/>
<span id ="textffil">{client.téléphone}</span>
</div>
<div class="col-md-6 pt-md-0 pt-3">
<label for="phone"> Adresse </label><br/>
 <span id ="textffil"> {client.adresse}</span>
</div>
</div>
<div class="row py-2">
<div class="col-md-6">
</div>

<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#signup-modal">voir les rendez-vous</button>

</div>
<hr/>
<div id="signup-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-body">
<div class="text-center mt-2 mb-4">
                  <h1>Edit Profil</h1>
</div>

<form class="ps-3 pe-3" action="#" onSubmit={(e)=>handleSubmit(e)} >

<div class="py-2" >
<div class="row py-2">
  
<div class="col-md-6">
<label for="firstname">First Name</label>
<input type="text" class="bg-light form-control"id ="textffil"onChange={(e)=>handleChange(e)} value={data.nom} name="nom" placeholder="Steve"/>
</div>
<div class="col-md-6 pt-md-0 pt-3">
<label for="lastname">Last Name</label>
<input type="text" class="bg-light form-control" id ="textffil"onChange={(e)=>handleChange(e)} value={data.prenom} name="prenom" placeholder="Smith"/>
</div>
</div>
<div class="row py-2">
<div class="col-md-6">
<label for="email">Email Address</label>
<input type="email" class="bg-light form-control" id ="textffil"onChange={(e)=>handleChange(e)} value={data.email} name="email" placeholder="steve_@email.com"/>
</div>
<div class="col-md-6 pt-md-0 pt-3">
<label for="phone">Phone Number</label>
<input type="text" class="bg-light form-control"id ="textffil"onChange={(e)=>handleChange(e)} value={data.telephone} name="telephone" placeholder="+1 213-548-6015"/>
</div>
</div>
<div class="row py-2">
<div class="col-md-6">
<label for="email">Fonction</label>
<input type="text" class="bg-light form-control" id ="textffil"onChange={(e)=>handleChange(e)} value={data.fonction} name="fonction" />
</div>
<div class="col-md-6 pt-md-0 pt-3">
<label>Société</label>
<input type="text" class="bg-light form-control" id ="textffil"onChange={(e)=>handleChange(e)} value={data.societe} name="societe" />
</div>
</div>
<div class="py-3 pb-4 border-bottom">
<button class="btn btn-primary mr-3" type="submit" >Save Changes</button> 
<button class="btn border button" >Cancel</button>
</div>
<div class="d-sm-flex align-items-center pt-3" id="deactivate">
<div>
<b>Deactivate your account</b>
<p>Details about your company account and password</p>
</div>
<div class="ml-auto">
<button type="button"   class="btn btn-danger" >Edit Profil</button>

</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
 <MasterDetailClientOpportunities rows={rows2}/>
 <button type="button"   class="headerchang" data-bs-toggle="modal" data-bs-target="#signup-modal">Edit Profil</button>

</div>
</div>



);
}
export default Profil;