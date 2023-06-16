import React from "react";
import './Header.scss'
import Context from '../../Context/Context'

export default function Header(){

   const {setYearApp, year, setMonthApp, month, setDateApp} = React.useContext(Context)
   const months = ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень']

   function createSevenDays(localMonth, localYear){
      const array = []
      for(let i = 0; i < 7; i++){
         array.push(new Date(localYear, localMonth, 1 + i).getTime())
      }
      setDateApp(array)
   }

   class ChooseMonth{

      static prevMonth(){
         if(month - 1 >= 0){
            setMonthApp(month - 1)
            createSevenDays(month - 1, year)
         }
         else {
            setMonthApp(11)
            setYearApp(year - 1)
            createSevenDays(11, year - 1)
         }
      }

      static nextMonth(){
         if(month + 1 <= 11){
            setMonthApp(month + 1)
            createSevenDays(month + 1, year)
         }
         else {
            setMonthApp(0)
            setYearApp(year + 1)
            createSevenDays(0, year + 1)
         }
      }
   }

   return(
         <header className="header">
            <h1 className="header-h1">Забронювати Час</h1>
            
            <div className="choose-month_year">
               <span className="header-month">{months[month]} ,</span>
               <span className="header-year">{year}</span>
               <button onClick={ChooseMonth.prevMonth} className="arrow-item prev">
                  <div className="arrow-polygon"></div>
               </button>
               <button onClick={ChooseMonth.nextMonth} className="arrow-item next">
                  <div className="arrow-polygon next"></div>
               </button>
            </div>
         </header>
   )
}