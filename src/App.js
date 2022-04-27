import "./App.css";
import Grid from "./components/Grid/Grid";
import ParticlesWrapper from "./components/Particles/ParticlesWrapper";
import { useEffect, useState } from "react";

function App() {

  //Настройка выбора даты
  const [startDate, setStartDate] = useState('2022-01-01');
  const nowDate = new Date();
  const plusNull = (number) => (number < 10 ? "0" + number : number);
  let year = nowDate.getFullYear();
  let month = nowDate.getMonth() + 1;
  let day = nowDate.getDate();
  month = plusNull(month);
  day = plusNull(day);
  const [endDate, setEndDate] = useState([year, month, day].join("-"));

  useEffect(()=>{
    console.log(startDate, endDate)
  }, [startDate, endDate])
  return (
    <div className="App">
      <ParticlesWrapper />
      <div className="App__content">
        <h1 className="App__h1">CodeWars Stats</h1>
        <div className="date_wrapper">
          <input type="date" className="date startDate" 
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}/>
          <input
            type="date"
            className="date endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <Grid startDate= {startDate} endDate = {endDate}/>
      </div>
    </div>
  );
}

export default App;
