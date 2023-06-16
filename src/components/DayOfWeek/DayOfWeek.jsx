import React from "react"
import IntervalComp from './parts/IntervalComp'
import './DayOfWeek.scss'

export default function DayOfWeek({time, idx}){

   const daysOfWeek = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

   const dayIdx = new Date(time)

   const [intervals, setIntervals] = React.useState([])

   React.useEffect(() => {
      const array = []
      for(let i = 10; i <= 19.5; i += .5){
         const timeObj = {from: new Date(time), to: new Date(time),}
         if(Number.isInteger(i)){
            timeObj.from.setHours(i)
            timeObj.from.setMinutes(0)
            timeObj.to.setHours(i)
            timeObj.to.setMinutes(30)
         }
         else {
            timeObj.from.setHours(i)
            timeObj.from.setMinutes(30)
            timeObj.to.setHours(i + .5)
            timeObj.to.setMinutes(0)
         }
         array.push(timeObj)
      }
      setIntervals(array)
   }, [])

   return(
      <div className="day-of-week">
         <p className="day">{daysOfWeek[dayIdx.getDay()]}</p>
         <p className="date">{dayIdx.getDate()}</p>

         <div className="intervals-container">
            {intervals.map((time, itemIdx) => {
               return <IntervalComp key={`${time}${itemIdx}`} idx={idx} itemIdx={itemIdx} interval={time} />
            })}
         </div>
      </div>
   )
}