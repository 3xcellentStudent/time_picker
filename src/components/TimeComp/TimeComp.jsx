import React from "react";
import DayOfWeek from "../DayOfWeek/DayOfWeek";
import Context from "../../Context/Context";

import './TimeComp.scss'

export default function TimeComp(){

   const {month, year, date, setDateApp, setMonthApp, setYearApp} = React.useContext(Context)

   const [dates, setDates] = React.useState([])

   React.useEffect(() => {
      const array = []
      const today = new Date().getDate()
      for(let i = 0; i < 7; i++) array.push(new Date(new Date().setDate(today + i)))
      setDates(array)
   }, [])

   return(
      <div className="time-component">
         {dates?.map((time, idx) => {
            return <DayOfWeek key={idx} time={time} idx={idx}/>
         })}
      </div>
   )
}