import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, useForm } from '@inertiajs/inertia-react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react'
import'../../../css/HeaderProfil.css'
export default function HeaderContact({}) {
  let [contact_pic, setUserPic]=useState("");
  let [contact_nom, setUserNom]=useState("");
  let [contact_prenom, setUserPrenom]=useState("");
  let [contact_role, setUserRole]=useState("");
  let [contact_id, setUserId]=useState("");
  
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    let photo = localStorage.getItem('contact_pic')
    let nom = localStorage.getItem('contact_nom')
    let prenom = localStorage.getItem('contact_prenom')
    let role = localStorage.getItem('contact_role')
    let id = localStorage.getItem('contact_id')
  
    setUserPic(photo)
    setUserNom(nom)
    setUserPrenom(prenom)
    setUserRole(role)
    setUserId(id)
    },[])

    const handleSignOut = () =>{
      Inertia.get('/logout')
    }
    
const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
setOpen(false);
};

  return (
    <header class="header_section">
    <div class="header_top">
      <div class="container-fluid">
        <div class="top_nav_container">
     
          <from class="search_form"></from>

          <div >
           
              <i class="fa fa-user" aria-hidden="true"></i>
              {/* <InertiaLink href={`/login`}> */}
              <ul className="list-unstyled topbar-menu float-end mb-0">
              <li className="dropdown notification-list">
                  <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <span className="account-user-avatar"> 
                      <img src={contact_pic} alt="user-image" style={{objectFit:'contain'}} className="rounded-circle" />
                    </span>
                    <span>
                      <span className="account-user-name">{contact_nom}</span>
                      <span className="account-position">{contact_prenom}</span>
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                    {/* item*/}
                    <div className=" dropdown-header noti-title">
                      <h6 className="text-overflow m-0">Welcome !</h6>
                    </div>
                    {/* item*/}
                    <div  className="dropdown-item notify-item">
                    <InertiaLink href={`/Profile`}>
                      <i className="mdi mdi-account-circle me-1" />
                      <span>My Account</span>
                      </InertiaLink>
                      </div>
                    {/* item*/}
                 
                    {/* item*/}
                
                    {/* item*/}
                   
                    {/* item*/}
                    <div onClick={handleClickOpen} className="dropdown-item notify-item">
                      <i className="mdi mdi-logout me-1" />
                      <span>Logout</span>
                    </div>
                  </div>
                </li>
              </ul>
           
              {/* </InertiaLink> */}
           
          </div>
        </div>

      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation de Suppression?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Est-ce-que vous voullez déconnecté.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleSignOut} autoFocus>
            Confirmer
          </Button>
        </DialogActions>
  </Dialog>
    </div>
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
              <li class="nav-item">
              <a class="nav-link" href="about.html"> Home</a>
                  </li>
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
  )
}
