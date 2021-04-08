import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

export default function App() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (   
    <>
    <div className="calender-header">
      <div className="rainbow-button">
        <h3>GODWIN Calendar</h3>
      <Calendar 
      value={dateState}
      onChange={changeDate}
      />
      </div>
    <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
    </div>
    </>
  )
}

