import React,{useEffect} from 'react'

import { ScheduleComponent, Inject, Day, Month, Week, Agenda } from '@syncfusion/ej2-react-schedule'
import PageTitle from './static_components/PageTitle';
import Header from './static_components/Header';
import SideBar from './static_components/SideBar';



export default function Calendar() {

let title = "Calendar"

useEffect(()=>{
  document.getElementById('js-licensing').style.display = 'none';
},[])


  return (
<div className='wrapper' >
        <SideBar />
        <Header />
        
        <div className="content-page">
          <div className="content">
            {/* Start Content*/}
            <div className="container-fluid">
              {/* start page title */}
              <PageTitle title={title} />
              {/* end page title */} 

              {/* ------------------------ calendar ------------------ */}
              <ScheduleComponent>
                  <Inject services={[Day, Week, Agenda, Month]}/>
              </ScheduleComponent>
              {/* end row */}
            </div> {/* container */}
          </div> {/* content */}
        </div>

    </div>
  )
}

