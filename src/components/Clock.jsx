import React,{useState,useEffect} from 'react'

const Clock = () => {
const [time,setTime]=useState(new Date())

useEffect(()=>{
const intervalId=setInterval(() => {
    setTime(new Date())
}, 1000);
return ()=>{
    clearInterval(intervalId)
}
},[])
function formateTime(){
    var hours = time.getHours()
    var minutes= time.getMinutes()
    var seconds= time.getSeconds()
    const meridiem=hours>=12? "PM":"AM"
    hours = hours % 12 || 12;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    const formate_time =`${hours}:${minutes}:${seconds} ${meridiem}`
    return formate_time
}

  return (
    <div className='clock-container'>
      <div className="clock">
        <span>{formateTime()}</span>
      </div>
    </div>
  )
}

export default Clock
