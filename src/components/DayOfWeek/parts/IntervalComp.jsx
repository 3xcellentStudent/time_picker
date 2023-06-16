import React from "react";
import Context from "../../../Context/Context";

export default function IntervalComp({idx, itemIdx, interval}){
   const {setColumnIdx, columnIdx} = React.useContext(Context)

   const btnRef = React.useRef()
   // const minutes = interval.getMinutes()
   const hoursFrom = interval.from.getHours()
   const minutesFrom = interval.from.getMinutes()
   const hoursTo = interval.to.getHours()
   const minutesTo = interval.to.getMinutes()

   function setActive(){
      const parent = btnRef.current.parentElement
      const nodes = parent.querySelectorAll('.interval-btn')
      const activeNodes = document.querySelectorAll('.interval-btn.active')
      const len = activeNodes.length
      const columnCond = idx === columnIdx
      const nodesCond = nodes[itemIdx - 1]?.getAttribute('class').includes('active') || nodes[itemIdx + 1]?.getAttribute('class').includes('active')
      if(len === 0){
         setColumnIdx(idx)
         btnRef.current.classList.toggle('active')
      }
      else if(len > 2 && columnCond){
         activeNodes.forEach(node => node.classList.remove('active'))
         btnRef.current.classList.toggle('active')
      }
      else if(columnCond && nodesCond){
         btnRef.current.classList.toggle('active')
      }
      else {
         setColumnIdx(idx)
         activeNodes.forEach(node => node.classList.remove('active'))
         btnRef.current.classList.toggle('active')
      }
   }

   return(
      <button ref={btnRef} onClick={setActive} className="interval-btn">
         {/* {interval.getHours()} : {minutes === 0 ? `${minutes}0` : minutes} */}
         {hoursFrom} : {minutesFrom === 0 ? `${minutesFrom}0` : minutesFrom} - {hoursTo} : {minutesTo === 0 ? `${minutesTo}0` : minutesTo}
      </button>
   )
}