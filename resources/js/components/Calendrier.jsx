import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Inject,
  Resize,
  DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import { Button } from '@syncfusion/ej2-buttons';

import {
  SplitButtonComponent,
  ItemModel,
  MenuEventArgs
} from '@syncfusion/ej2-react-splitbuttons';

import {
  DropDownButtonComponent,
  ItemModel
} from '@syncfusion/ej2-react-splitbuttons';

import { extend } from '@syncfusion/ej2-base';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from './sample-base';
import * as dataSource from './datasource.json';
/**
 * Schedule editor template sample
 */
export class EditorTemplate extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSource.doctorsEventData, null, true);
    this.items = [
      {
        text: 'Paste',
        iconCss: 'e-btn-icons e-paste'
      },
      {
        text: 'Paste Special',
        iconCss: 'e-btn-icons e-paste-special'
      },
      {
        text: 'Paste as Formula',
        iconCss: 'e-btn-icons e-paste-formula'
      },
      {
        text: 'Paste as Hyperlink',
        iconCss: 'e-btn-icons e-paste-hyperlink'
      }
    ];
    this.flag = true;
    this.currentEvent = [];
  }

  onEventRendered(args) {
    switch (args.data.EventType) {
      case 'Requested':
        args.element.style.backgroundColor = '#F57F17';
        break;
      case 'Confirmed':
        args.element.style.backgroundColor = '#7fa900';
        break;
      case 'New':
        args.element.style.backgroundColor = '#8e24aa';
        break;
    }
  }
  onActionBegin(args) {
    if (
      args.requestType === 'eventCreate' ||
      args.requestType === 'eventChange'
    ) {
      let data = args.data instanceof Array ? args.data[0] : args.data;
      if (!this.scheduleObj.isSlotAvailable(data.StartTime, data.EndTime)) {
        args.cancel = true;
      }
    }
  }
  editorTemplate(props) {
    return props !== undefined ? (
      <div>
        <table
          className="custom-event-editor"
          style={{ width: '100%', cellpadding: '5' }}
        >
          <tbody>
            <tr>
              <td className="e-textlabel">Summary</td>
              <td style={{ colspan: '4' }}>
                <input
                  id="Summary"
                  className="e-field e-input"
                  type="text"
                  name="Subject"
                  style={{ width: '100%' }}
                />
              </td>
            </tr>
            <tr>
              <td className="e-textlabel">Status</td>
              <td style={{ colspan: '4' }}>
                <DropDownListComponent
                  id="EventType"
                  placeholder="Choose status"
                  data-name="EventType"
                  className="e-field"
                  style={{ width: '100%' }}
                  dataSource={['New', 'Requested', 'Confirmed']}
                />
              </td>
            </tr>
            <tr>
              <td className="e-textlabel">From</td>
              <td style={{ colspan: '4' }}>
                <DateTimePickerComponent
                  id="StartTime"
                  format="dd/MM/yy hh:mm a"
                  data-name="StartTime"
                  value={new Date(props.startTime || props.StartTime)}
                  className="e-field"
                />
              </td>
            </tr>
            <tr>
              <td className="e-textlabel">To</td>
              <td style={{ colspan: '4' }}>
                <DateTimePickerComponent
                  id="EndTime"
                  format="dd/MM/yy hh:mm a"
                  data-name="EndTime"
                  value={new Date(props.endTime || props.EndTime)}
                  className="e-field"
                />
              </td>
            </tr>
            <tr>
              <td className="e-textlabel">Reason</td>
              <td style={{ colspan: '4' }}>
                <textarea
                  id="Description"
                  className="e-field e-input"
                  name="Description"
                  rows={3}
                  cols={50}
                  style={{
                    width: '100%',
                    height: '60px !important',
                    resize: 'vertical'
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className="footer-buttons">
          <span>
            <DropDownButtonComponent items={this.items}>
              Profile
            </DropDownButtonComponent>
          </span>
          <span>
            <SplitButtonComponent items={this.items} content="Paste" />
          </span>
        </div> */}
      </div>
    ) : (
      <div />
    );
  }
  eventAdd(e) {
    
    const data = this.scheduleObj.getCellDetails(
      this.scheduleObj.getSelectedElements()
    );
    const eventData = this.scheduleObj.eventWindow.getObjectFromFormData(
      'e-schedule-dialog'
    );
    this.scheduleObj.eventWindow.convertToEventData(data, eventData);
    eventData.Id = this.scheduleObj.eventBase.getEventMaxID() + 1;
    this.scheduleObj.addEvent(eventData);
    this.dialogClose();
  }
  eventDelete(e) {
    const eventData = this.scheduleObj.activeEventData.event;
    this.scheduleObj.deleteEvent(eventData);
    this.dialogClose();
  }
  editEvent(e) {
    const eventData = this.scheduleObj.eventWindow.getObjectFromFormData(
      'e-schedule-dialog'
    );
    eventData.Id = this.currentEvent.Id;
    this.scheduleObj.saveEvent(eventData);
    this.dialogClose();
  }
  dialogClose() {
    let dialogObj = document.querySelector('.e-schedule-dialog')
      .ej2_instances[0];
    dialogObj.hide();
  }
  onPopupOpen(args) {
    if (args.type === 'Editor') {
      if (this.flag) {
        let dialogObj = args.element.ej2_instances[0];
        dialogObj.footerTemplate =
          '<input id="add" type="button" value="Add" /><input id="save" type="button" value="Save" /> <input id="print" type="button" value="Print" /> <input id="delete" type="button" value="Delete" /> <input id="cancel" type="button" value="Cancel" />';
        dialogObj.dataBind();
        let addButtonObj = new Button();
        addButtonObj.appendTo('#add');
        addButtonObj.element.onclick = () => {
          this.eventAdd();
        };
        let saveButtonObj = new Button();
        saveButtonObj.appendTo('#save');
        saveButtonObj.element.onclick = () => {
          this.editEvent();
        };
        let printButtonObj = new Button();
        printButtonObj.appendTo('#print');
        printButtonObj.element.onclick = () => {
          alert('Print button called');
        };
        let deleteButtonObj = new Button();
        deleteButtonObj.appendTo('#delete');
        deleteButtonObj.element.onclick = () => {
          this.eventDelete();
        };
        let cancelButtonObj = new Button();
        cancelButtonObj.appendTo('#cancel');
        cancelButtonObj.element.onclick = () => {
          this.dialogClose();
        };
        this.flag = false;
      }
      if (!this.flag) {
        var isApp = args.target.classList.contains('e-appointment');
        if (isApp) {
          this.currentEvent = this.scheduleObj.getEventDetails(args.target);
        }
        args.element.querySelector('#save').style.display = isApp ? '' : 'none';
        args.element.querySelector('#delete').style.display = isApp
          ? ''
          : 'none';
        args.element.querySelector('#add').style.display = isApp ? 'none' : '';
      }
    }
  }
  render() {
    return (
      <div className="schedule-control-section">
        <div className="col-lg-12 control-section">
          <div className="control-wrapper">
            <ScheduleComponent
              width="100%"
              height="650px"
              selectedDate={new Date(2018, 1, 15)}
              ref={schedule => (this.scheduleObj = schedule)}
              eventSettings={{ dataSource: this.data }}
              editorTemplate={this.editorTemplate.bind(this)}
              actionBegin={this.onActionBegin.bind(this)}
              showQuickInfo={false}
              eventRendered={this.onEventRendered.bind(this)}
              popupOpen={this.onPopupOpen.bind(this)}
            >
              <ViewsDirective>
                <ViewDirective option="Day" />
                <ViewDirective option="Week" />
                <ViewDirective option="WorkWeek" />
                <ViewDirective option="Month" />
              </ViewsDirective>
              <Inject
                services={[Day, Week, WorkWeek, Month, Resize, DragAndDrop]}
              />
            </ScheduleComponent>
          </div>
        </div>
      </div>
    );
  }
}

render(<EditorTemplate />, document.getElementById('sample'));
