import React, { useEffect } from 'react';
import Main from './static_components/Main';
import SideBar from './static_components/SideBar';


 
function Home({name}) {

  useEffect(()=>{
        var loadScript = function (src) {
            var tag = document.createElement('script');
            tag.async = false;
            tag.src = src;
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(tag);
          }
        loadScript('./assets/js/ui/component.todo.js')
        loadScript('./assets/js/vendor/apexcharts.min.js')
        loadScript('./assets/js/pages/demo.dashboard-crm.js')
        //loadScript('./assets/js/app.min.js')
        loadScript('./assets/js/vendor.min.js')
    },[])

    return (
        <div className="wrapper">
            <SideBar />
            <Main />
        </div>
    );
}

export default Home;
