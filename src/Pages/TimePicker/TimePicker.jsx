import React from "react";
import Header from "../../components/Header/Header";
import TimeComp from "../../components/TimeComp/TimeComp";
import Context from "../../Context/Context";

import './TimePicker.scss'

export default function TimePicker(){

   const [year, setYearApp] = React.useState(new Date().getFullYear())
   const [month, setMonthApp] = React.useState(new Date().getMonth())
   const [date, setDateApp] = React.useState([])
   const [columnIdx, setColumnIdx] = React.useState(0)

   return(
      <Context.Provider value={{
         setYearApp, year, setMonthApp, month, 
         setDateApp, date, setColumnIdx, columnIdx
      }}>
         <div className="main-wrapper">
            <Header/>
            <TimeComp/>
         </div>
      </Context.Provider>
   )
}