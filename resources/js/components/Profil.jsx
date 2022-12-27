import React, { useEffect, useRef, useState } from 'react';
import'../../css/ProfileP.css'
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
    post(`/adcom/contacts/update/${contact.id}`) 
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
setData('photo',photo) 
console.log(result.info)
}
}
)


  
  const handleGetContact = ()=>{
    // setData(data.nom = contact.nom)
    // setData(data.prenom = contact.prenom)
    // setData(data.fonction = contact.fonction)
    // setData(data.email = contact.email)
    // setData(data.telephone = contact.telephone.toString())
    setData(data.nom = contact.nom)
    setData(data.prenom = contact.prenom)
    setData(data.fonction = contact.fonction.toString())
    setData(data.telephone = contact.telephone)
    setData(data.email= contact.email)
    // setData(data.societe= client.societe)
    // setData(data.client_id = client.id)
  }
  // const fonctionAAletre= ()=>{
  //   alert("vos modifications ont eté enregistrée ")
  // }
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
  
    else if(inputType === "téléphone")
    setData(data.telephone = inputValue)
  
  
  }
console.log(data.nom)

return (
  <div>
  <nav id="nav">
  <a class="navbar-brand" ihref="#">
  <button class="btn btn-success" id="butto"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span >Retour </span>
   
  </button>
  </a>
</nav>
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
 <span id ="textffil"> {client.société}</span>
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
<a href="index.html" class="text-success">
<span><img src="assets/images/logo-dark.png" alt="" height="18"/></span>
</a>
</div>
<form class="ps-3 pe-3" action="#"onSubmit={(e)=>handleSubmit(e)} >
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
<input type="tel" class="bg-light form-control"id ="textffil"onChange={(e)=>handleChange(e)} value={data.telephone} name="téléphone" placeholder="+1 213-548-6015"/>
</div>
</div>
<div class="row py-2">
<div class="col-md-6">
<label for="country">Country</label>
<select name="country" id="country" class="bg-light">
<option value="india" selected>India</option>
<option value="usa">USA</option>
<option value="uk">UK</option>
<option value="uae">UAE</option>
</select>
</div>
<div class="col-md-6 pt-md-0 pt-3" id="lang">
<label for="language">Language</label>
<div class="arrow">
<select name="language" id="language" class="bg-light">
<option value="english" selected>English</option>
<option value="english_us">English (United States)</option>
<option value="enguk">English UK</option>
<option value="arab">Arabic</option>
</select>
</div>
</div>
</div>
<div class="py-3 pb-4 border-bottom">
<button class="btn btn-primary mr-3" type="submit" >Save Changes</button>
<button class="btn border button">Cancel</button>
</div>
<div class="d-sm-flex align-items-center pt-3" id="deactivate">
<div>
<b>Deactivate your account</b>
<p>Details about your company account and password</p>
</div>
<div class="ml-auto">

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