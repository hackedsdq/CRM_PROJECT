// import { render } from 'react-dom';
// import './index.css';
// import * as React from 'react';
// import {
//   ScheduleComponent,
//   ViewsDirective,
//   ViewDirective,
//   Day,
//   Week,
//   WorkWeek,
//   Month,
//   Inject,
//   Resize,
//   DragAndDrop
// } from '@syncfusion/ej2-react-schedule';
// import { Button } from '@syncfusion/ej2-buttons';

// import {
//   SplitButtonComponent,
//   ItemModel,
//   MenuEventArgs
// } from '@syncfusion/ej2-react-splitbuttons';

// import {
//   DropDownButtonComponent,
//   ItemModel
// } from '@syncfusion/ej2-react-splitbuttons';

// import { extend } from '@syncfusion/ej2-base';
// import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
// import { SampleBase } from './sample-base';
// import * as dataSource from './datasource.json';
// /**
//  * Schedule editor template sample
//  */
// export class EditorTemplate extends SampleBase {
//   constructor() {
//     super(...arguments);
//     this.data = extend([], dataSource.doctorsEventData, null, true);
//     this.items = [
//       {
//         text: 'Paste',
//         iconCss: 'e-btn-icons e-paste'
//       },
//       {
//         text: 'Paste Special',
//         iconCss: 'e-btn-icons e-paste-special'
//       },
//       {
//         text: 'Paste as Formula',
//         iconCss: 'e-btn-icons e-paste-formula'
//       },
//       {
//         text: 'Paste as Hyperlink',
//         iconCss: 'e-btn-icons e-paste-hyperlink'
//       }
//     ];
//     this.flag = true;
//     this.currentEvent = [];
//   }

//   onEventRendered(args) {
//     switch (args.data.EventType) {
//       case 'Requested':
//         args.element.style.backgroundColor = '#F57F17';
//         break;
//       case 'Confirmed':
//         args.element.style.backgroundColor = '#7fa900';
//         break;
//       case 'New':
//         args.element.style.backgroundColor = '#8e24aa';
//         break;
//     }
//   }
//   onActionBegin(args) {
//     if (
//       args.requestType === 'eventCreate' ||
//       args.requestType === 'eventChange'
//     ) {
//       let data = args.data instanceof Array ? args.data[0] : args.data;
//       if (!this.scheduleObj.isSlotAvailable(data.StartTime, data.EndTime)) {
//         args.cancel = true;
//       }
//     }
//   }
//   editorTemplate(props) {
//     return props !== undefined ? (
//       <div>
//         <table
//           className="custom-event-editor"
//           style={{ width: '100%', cellpadding: '5' }}
//         >
//           <tbody>
//             <tr>
//               <td className="e-textlabel">Summary</td>
//               <td style={{ colspan: '4' }}>
//                 <input
//                   id="Summary"
//                   className="e-field e-input"
//                   type="text"
//                   name="Subject"
//                   style={{ width: '100%' }}
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td className="e-textlabel">Status</td>
//               <td style={{ colspan: '4' }}>
//                 <DropDownListComponent
//                   id="EventType"
//                   placeholder="Choose status"
//                   data-name="EventType"
//                   className="e-field"
//                   style={{ width: '100%' }}
//                   dataSource={['New', 'Requested', 'Confirmed']}
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td className="e-textlabel">From</td>
//               <td style={{ colspan: '4' }}>
//                 <DateTimePickerComponent
//                   id="StartTime"
//                   format="dd/MM/yy hh:mm a"
//                   data-name="StartTime"
//                   value={new Date(props.startTime || props.StartTime)}
//                   className="e-field"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td className="e-textlabel">To</td>
//               <td style={{ colspan: '4' }}>
//                 <DateTimePickerComponent
//                   id="EndTime"
//                   format="dd/MM/yy hh:mm a"
//                   data-name="EndTime"
//                   value={new Date(props.endTime || props.EndTime)}
//                   className="e-field"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td className="e-textlabel">Reason</td>
//               <td style={{ colspan: '4' }}>
//                 <textarea
//                   id="Description"
//                   className="e-field e-input"
//                   name="Description"
//                   rows={3}
//                   cols={50}
//                   style={{
//                     width: '100%',
//                     height: '60px !important',
//                     resize: 'vertical'
//                   }}
//                 />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         {/* <div className="footer-buttons">
//           <span>
//             <DropDownButtonComponent items={this.items}>
//               Profile
//             </DropDownButtonComponent>
//           </span>
//           <span>
//             <SplitButtonComponent items={this.items} content="Paste" />
//           </span>
//         </div> */}
//       </div>
//     ) : (
//       <div />
//     );
//   }
//   eventAdd(e) {
    
//     const data = this.scheduleObj.getCellDetails(
//       this.scheduleObj.getSelectedElements()
//     );
//     const eventData = this.scheduleObj.eventWindow.getObjectFromFormData(
//       'e-schedule-dialog'
//     );
//     this.scheduleObj.eventWindow.convertToEventData(data, eventData);
//     eventData.Id = this.scheduleObj.eventBase.getEventMaxID() + 1;
//     this.scheduleObj.addEvent(eventData);
//     this.dialogClose();
//   }
//   eventDelete(e) {
//     const eventData = this.scheduleObj.activeEventData.event;
//     this.scheduleObj.deleteEvent(eventData);
//     this.dialogClose();
//   }
//   editEvent(e) {
//     const eventData = this.scheduleObj.eventWindow.getObjectFromFormData(
//       'e-schedule-dialog'
//     );
//     eventData.Id = this.currentEvent.Id;
//     this.scheduleObj.saveEvent(eventData);
//     this.dialogClose();
//   }
//   dialogClose() {
//     let dialogObj = document.querySelector('.e-schedule-dialog')
//       .ej2_instances[0];
//     dialogObj.hide();
//   }
//   onPopupOpen(args) {
//     if (args.type === 'Editor') {
//       if (this.flag) {
//         let dialogObj = args.element.ej2_instances[0];
//         dialogObj.footerTemplate =
//           '<input id="add" type="button" value="Add" /><input id="save" type="button" value="Save" /> <input id="print" type="button" value="Print" /> <input id="delete" type="button" value="Delete" /> <input id="cancel" type="button" value="Cancel" />';
//         dialogObj.dataBind();
//         let addButtonObj = new Button();
//         addButtonObj.appendTo('#add');
//         addButtonObj.element.onclick = () => {
//           this.eventAdd();
//         };
//         let saveButtonObj = new Button();
//         saveButtonObj.appendTo('#save');
//         saveButtonObj.element.onclick = () => {
//           this.editEvent();
//         };
//         let printButtonObj = new Button();
//         printButtonObj.appendTo('#print');
//         printButtonObj.element.onclick = () => {
//           alert('Print button called');
//         };
//         let deleteButtonObj = new Button();
//         deleteButtonObj.appendTo('#delete');
//         deleteButtonObj.element.onclick = () => {
//           this.eventDelete();
//         };
//         let cancelButtonObj = new Button();
//         cancelButtonObj.appendTo('#cancel');
//         cancelButtonObj.element.onclick = () => {
//           this.dialogClose();
//         };
//         this.flag = false;
//       }
//       if (!this.flag) {
//         var isApp = args.target.classList.contains('e-appointment');
//         if (isApp) {
//           this.currentEvent = this.scheduleObj.getEventDetails(args.target);
//         }
//         args.element.querySelector('#save').style.display = isApp ? '' : 'none';
//         args.element.querySelector('#delete').style.display = isApp
//           ? ''
//           : 'none';
//         args.element.querySelector('#add').style.display = isApp ? 'none' : '';
//       }
//     }
//   }
//   render() {
//     return (
//       <div className="schedule-control-section">
//         <div className="col-lg-12 control-section">
//           <div className="control-wrapper">
//             <ScheduleComponent
//               width="100%"
//               height="650px"
//               selectedDate={new Date(2018, 1, 15)}
//               ref={schedule => (this.scheduleObj = schedule)}
//               eventSettings={{ dataSource: this.data }}
//               editorTemplate={this.editorTemplate.bind(this)}
//               actionBegin={this.onActionBegin.bind(this)}
//               showQuickInfo={false}
//               eventRendered={this.onEventRendered.bind(this)}
//               popupOpen={this.onPopupOpen.bind(this)}
//             >
//               <ViewsDirective>
//                 <ViewDirective option="Day" />
//                 <ViewDirective option="Week" />
//                 <ViewDirective option="WorkWeek" />
//                 <ViewDirective option="Month" />
//               </ViewsDirective>
//               <Inject
//                 services={[Day, Week, WorkWeek, Month, Resize, DragAndDrop]}
//               />
//             </ScheduleComponent>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// render(<EditorTemplate />, document.getElementById('sample'));


import React, { useState, useRef } from "react";
import "./styles.css";

// import "@fullcalendar/common";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { nanoid } from "nanoid";
import {
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Container
} from "reactstrap";
import Select from "react-select";
import DateRangePicker from "react-bootstrap-daterangepicker";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

import "./custom.css";

import events from "./events";
import CustomModal from "./components/CustomModal";

let todayStr = new Date().toISOString().replace(/T.*$/, "");

export default function App() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [modal, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const calendarRef = useRef(null);

  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const handleCloseModal = () => {
    handleClose();
    setModal(false);
  };

  // function handleWeekendsToggle() {
  //   setWeekendsVisible(!weekendsVisible);
  // }
  function handleDateClick(arg) {
    // bind with an arrow function
    // console.log(arg.dateStr);
  }
  // function renderSidebar() {
  //   return (
  //     <div className="demo-app-sidebar">
  //       <div className="demo-app-sidebar-section">
  //         <h2>Instructions</h2>
  //         <ul>
  //           <li>Select dates and you will be prompted to create a new event</li>
  //           <li>Drag, drop, and resize events</li>
  //           <li>Click an event to delete it</li>
  //         </ul>
  //       </div>
  //       <div className="demo-app-sidebar-section">
  //         <label>
  //           <input
  //             type="checkbox"
  //             checked={weekendsVisible}
  //             onChange={handleWeekendsToggle}
  //           />
  //           toggle weekends
  //         </label>
  //       </div>
  //       <div className="demo-app-sidebar-section">
  //         <h2>All Events ({currentEvents.length})</h2>
  //         <ul>{currentEvents.map(renderSidebarEvent)}</ul>
  //       </div>
  //     </div>
  //   );
  // }
  // function renderSidebarEvent(event) {
  //   return (
  //     <li key={event.id}>
  //       <b>
  //         {formatDate(event.start, {
  //           year: "numeric",
  //           month: "short",
  //           day: "numeric"
  //         })}
  //       </b>
  //       <i>{event.title}</i>
  //     </li>
  //   );
  // }
  function handleDateSelect(selectInfo) {
    // console.log(selectInfo.view.type);
    if (
      selectInfo.view.type === "timeGridWeek" ||
      selectInfo.view.type === "timeGridDay"
    ) {
      selectInfo.view.calendar.unselect();
      setState({ selectInfo, state: "create" });
      // Open modal create
      console.log("open modal create");
      // console.log(selectInfo);
      setStart(selectInfo.start);
      setEnd(selectInfo.end);
      setModal(true);
    }

    // let calendarApi = selectInfo.view.calendar;

    // let title = prompt("Please enter a new title for your event");

    // if (title) {
    //   calendarApi.addEvent({
    //     id: nanoid(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay
    //   });
    // }
  }
  function renderEventContent(eventInfo) {
    return (
      <div>
        {/* <b>{eventInfo.timeText}</b> */}
        <i
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {eventInfo.event.title}
        </i>
      </div>
    );
  }
  function handleEventClick(clickInfo) {
    // console.log("open modal update, delete");
    setState({ clickInfo, state: "update" });
    // set detail
    setTitle(clickInfo.event.title);
    setStart(clickInfo.event.start);
    setEnd(clickInfo.event.end);

    setModal(true);
    // if (
    //   confirm(
    //     `Are you sure you want to delete the event '${clickInfo.event.title}'`
    //   )
    // ) {
    //   clickInfo.event.remove();
    // }
  }
  function handleEvents(events) {
    setCurrentEvents(events);
  }
  function handleEventDrop(checkInfo) {
    // console.log(checkInfo.event.start.toISOString());
    // checkInfo.revert();
    setState({ checkInfo, state: "drop" });
    setConfirmModal(true);
  }
  function handleEventResize(checkInfo) {
    // console.log(checkInfo);
    setState({ checkInfo, state: "resize" });
    setConfirmModal(true);
  }
  function handleEdit() {
    // console.log(start, end);
    // state.clickInfo.event.setAllDay(true);

    state.clickInfo.event.setStart(start);
    state.clickInfo.event.setEnd(end);
    state.clickInfo.event.mutate({
      standardProps: { title }
    });
    handleClose();
  }
  function handleSubmit() {
    // console.log(state.selectInfo.view.calendar);
    const newEvent = {
      id: nanoid(),
      title,
      start: state.selectInfo?.startStr || start.toISOString(),
      end: state.selectInfo?.endStr || end.toISOString(),
      allDay: state.selectInfo?.allDay || false
    };
    // console.log(newEvent);

    let calendarApi = calendarRef.current.getApi();
    // let calendarApi = selectInfo.view.calendar

    calendarApi.addEvent(newEvent);
    handleClose();
  }
  function handleDelete() {
    // console.log(JSON.stringify(state.clickInfo.event));
    // console.log(state.clickInfo.event.id);
    state.clickInfo.event.remove();
    handleClose();
  }
  function handleClose() {
    setTitle("");
    setStart(new Date());
    setEnd(new Date());
    setState({});
    setModal(false);
  }
  const [state, setState] = useState({});

  const [departments, setDepartments] = useState([
    { value: "1", label: "All" },
    { value: "2", label: "BPA Technical" },
    { value: "3", label: "Aqua 2 Cleaning" }
  ]);

  function onFilter(element) {
    console.log(element.value);
  }

  return (
    <div className="App">
      <h1>Hello FullCalendar</h1>
      {/* {renderSidebar()} */}
      <Container>
        <Row style={{ marginBottom: 20 }}>
          <Col
            sm={{ size: 3 }}
            md={{ size: 3 }}
            style={{
              paddingLeft: 15
            }}
          >
            <Select
              style={{ float: "left" }}
              defaultValue={departments[0]}
              options={departments}
              onChange={(element) => onFilter(element)}
            />
          </Col>
          <Col
            sm={{ size: 3, offset: 6 }}
            md={{ size: 3, offset: 6 }}
            style={{
              paddingRight: 15
            }}
          >
            <Button
              style={{ float: "right" }}
              color="secondary"
              onClick={() => setModal(true)}
            >
              Add schedule
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FullCalendar
              ref={calendarRef}
              // customButtons={{
              //   myCustomButton: {
              //     text: "custom!",
              //     click: function() {
              //       alert("clicked the custom button!");
              //     }
              //   }
              // }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                // left: "myCustomButton prev,today,next",
                left: "prev,today,next",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
              }}
              buttonText={{
                today: "current",
                month: "month",
                week: "week",
                day: "day",
                list: "list"
              }}
              initialView="timeGridWeek"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={weekendsVisible}
              //
              initialEvents={[
                {
                  id: nanoid(),
                  title: "All-day event",
                  start: todayStr
                  // date: "2020-07-29"
                },
                {
                  id: nanoid(),
                  title: "Timed event",
                  start: todayStr + "T12:00:00",
                  end: todayStr + "T12:30:00"
                  // date: "2020-07-30"
                }
              ]} // alternatively, use the `events` setting to fetch from a feed
              select={handleDateSelect}
              eventContent={renderEventContent} // custom render function
              eventClick={handleEventClick}
              eventsSet={() => handleEvents(events)}
              eventDrop={handleEventDrop}
              eventResize={handleEventResize}
              //
              dateClick={handleDateClick}
              eventAdd={(e) => {
                console.log("eventAdd", e);
              }}
              eventChange={(e) => {
                console.log("eventChange", e);
              }}
              eventRemove={(e) => {
                console.log("eventRemove", e);
              }}
            />
          </Col>
        </Row>
      </Container>

      <CustomModal
        title={state.state === "update" ? "Update Event" : "Add Event"}
        isOpen={modal}
        toggle={handleCloseModal}
        onCancel={handleCloseModal}
        onSubmit={state.clickInfo ? handleEdit : handleSubmit}
        submitText={state.clickInfo ? "Update" : "Save"}
        onDelete={state.clickInfo && handleDelete}
        deleteText="Delete"
      >
        <FormGroup>
          <Label for="exampleEmail">Title</Label>
          <Input
            type="text"
            name="title"
            placeholder="with a placeholder"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">From - End</Label>
          <DateRangePicker
            initialSettings={{
              locale: {
                format: "M/DD hh:mm A"
              },
              startDate: start,
              endDate: end,
              timePicker: true
            }}
            onApply={(event, picker) => {
              // console.log(
              //   "picker",
              //   picker.startDate.toISOString(),
              //   picker.endDate.toISOString()
              // );
              setStart(new Date(picker.startDate));
              setEnd(new Date(picker.endDate));
            }}
          >
            <input className="form-control" type="text" />
          </DateRangePicker>
        </FormGroup>
      </CustomModal>

      <CustomModal
        title={state.state === "resize" ? "Resize Event" : "Drop Event"}
        isOpen={confirmModal}
        toggle={() => {
          state.checkInfo.revert();
          setConfirmModal(false);
        }}
        onCancel={() => {
          state.checkInfo.revert();
          setConfirmModal(false);
        }}
        cancelText="Cancel"
        onSubmit={() => setConfirmModal(false)}
        submitText={"OK"}
      >
        Do you want to {state.state} this event?
      </CustomModal>
    </div>
  );
}
