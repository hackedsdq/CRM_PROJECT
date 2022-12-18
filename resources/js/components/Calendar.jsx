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


let localData = [{
  Id: 1,
  Subject: 'Explosion of Betelgeuse Star',
  StartTime: new Date(2018, 1, 15, 9, 30),
  EndTime: new Date(2018, 1, 15, 11, 0)
}, {
  Id: 2,
  Subject: 'Thule Air Crash Report',
  StartTime: new Date(2018, 1, 12, 12, 0),
  EndTime: new Date(2018, 1, 12, 14, 0)
}, {
  Id: 3,
  Subject: 'Blue Moon Eclipse',
  StartTime: new Date(2018, 1, 13, 9, 30),
  EndTime: new Date(2018, 1, 13, 11, 0)
}, {
  Id: 4,
  Subject: 'Meteor Showers in 2018',
  StartTime: new Date(2018, 1, 14, 13, 0),
  EndTime: new Date(2018, 1, 14, 14, 30)
}];

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
              <ScheduleComponent  selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: localData }}>
                  <Inject services={[Day, Week, Agenda, Month]}/>
              </ScheduleComponent>
              {/* end row */}
            </div> {/* container */}
          </div> {/* content */}
        </div>

    </div>
  )
}

