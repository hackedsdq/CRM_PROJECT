import React, { useEffect } from 'react';
import Main from './static_components/Main';
import SideBar from './static_components/SideBar';


 
function Home({name}) {


    return (
        <div className="wrapper">
            <SideBar />
            <Main />
        </div>
    );
}

export default Home;
