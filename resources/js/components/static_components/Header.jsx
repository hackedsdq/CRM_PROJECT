import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Inertia } from '@inertiajs/inertia';
import {InertiaLink} from '@inertiajs/inertia-react'

export default function Header({}) {
let [user_pic, setUserPic]=useState("");
let [user_nom, setUserNom]=useState("");
let [user_prenom, setUserPrenom]=useState("");
let [user_role, setUserRole]=useState("");
let [user_id, setUserId]=useState("");

const [open, setOpen] = useState(false);

const handleSignOut = () =>{
  Inertia.post('http://localhost:8000/adcom/logout')
}

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  useEffect(()=>{
  let photo = localStorage.getItem('user_pic')
  let nom = localStorage.getItem('user_nom')
  let prenom = localStorage.getItem('user_prenom')
  let role = localStorage.getItem('user_role')
  let id = localStorage.getItem('user_id')

  setUserPic(photo)
  setUserNom(nom)
  setUserPrenom(prenom)
  setUserRole(role)
  setUserId(id)
  },[])

  return (
    <div>
                  {/* Topbar Start */}
                  <div className="navbar-custom">
              <ul className="list-unstyled topbar-menu float-end mb-0">

                <li className="dropdown notification-list ">
                  <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <span className="account-user-avatar"> 
                      <img src={user_pic} alt="" className="rounded-circle" />
                    </span>
                    <span>
                      <span className="account-user-name">{user_nom} {user_prenom}</span>
                      <span className="account-position">{user_role}</span>
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                    <div className=" dropdown-header noti-title">
                      <h6 className="text-overflow m-0">Welcome !</h6>
                    </div>
                    <div  className="dropdown-item notify-item">
                    <InertiaLink href={`/adcom/users/edit/${user_id}`} /* className="side-nav-link" */ >
                      <i className="mdi mdi-account-circle me-1" />
                      <span>My Account</span>
                    </InertiaLink>
                    </div>
                    {/* <a href="" className="dropdown-item notify-item">
                      <i className="mdi mdi-account-edit me-1" />
                      <span>Settings</span>
                    </a>
                    <a href="" className="dropdown-item notify-item">
                      <i className="mdi mdi-lifebuoy me-1" />
                      <span>Support</span>
                    </a>
                    <a href="" className="dropdown-item notify-item">
                      <i className="mdi mdi-lock-outline me-1" />
                      <span>Lock Screen</span>
                    </a> */}
                    <div onClick={handleClickOpen} className="dropdown-item notify-item btn">
                      <i className="mdi mdi-logout me-1" />
                      <span>Logout</span>
                    </div>
                  </div>
                </li>
              </ul>
              <button className="button-menu-mobile open-left">
                <i className="mdi mdi-menu" />
              </button>
              {/*
              <div className="app-search dropdown d-none d-lg-block">
                <form>
                  <div className="input-group">
                    <input type="text" className="form-control dropdown-toggle" placeholder="Search..." id="top-search" />
                    <span className="mdi mdi-magnify search-icon" />
                    <button className="input-group-text btn-primary" type="submit">Search</button>
                  </div>
                </form>
                <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">

                  {/* <div className="dropdown-header noti-title">
                    <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
                  </div>
                  <a href="" className="dropdown-item notify-item">
                    <i className="uil-notes font-16 me-1" />
                    <span>Analytics Report</span>
                  </a>
                  <a href="" className="dropdown-item notify-item">
                    <i className="uil-life-ring font-16 me-1" />
                    <span>How can I help you?</span>
                  </a>
                  <a href="" className="dropdown-item notify-item">
                    <i className="uil-cog font-16 me-1" />
                    <span>User profile settings</span>
                  </a>
                  <div className="dropdown-header noti-title">
                    <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                  </div>
                  <div className="notification-list">
                    
                    <a href="" className="dropdown-item notify-item">
                      <div className="d-flex">
                        <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height={32} />
                        <div className="w-100">
                          <h5 className="m-0 font-14">Jacob Deo</h5>
                          <span className="font-12 mb-0">Developer</span>
                        </div>
                      </div>
                    </a>
                  </div> 
                </div>
              </div>*/}
            </div>
            {/* end Topbar */}

            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Deconnexion ?"}
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
  )
}
