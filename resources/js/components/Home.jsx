import React, { useEffect } from 'react';
import Header from './static_components/Header';
import Main from './static_components/Main';
import SideBar from './static_components/SideBar';
import { usePage } from '@inertiajs/inertia-react';
import { useState } from 'react';




function Home({user_id, user_nom, user_prenom, user_pic, user_role}) {
let [rendred, setRendreded]=useState(false)
useEffect(()=>{
console.log("yoyoyoyoyoyoy")
localStorage.setItem('user_id',user_id)
localStorage.setItem('user_pic',user_pic)
localStorage.setItem('user_nom',user_nom)
localStorage.setItem('user_prenom',user_prenom)
localStorage.setItem('user_role',user_role)
setRendreded(true)
},[])


    return (
        <div className="wrapper">
            { rendred && <> <Header />
            <SideBar /> 
            <Main /> </> }
        </div>
    );
}

export default Home;
