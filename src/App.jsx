import "./styles/App.css";
import data from "./data/data.json";
import jeremyImg from "./assets/image-jeremy.png";
import { useState } from "react";
import Card from "./components/card";


function App() {
  const [period, setPeriod] = useState("weekly");

  return (
    <div className="App">
      <div className="side-bar">
        <div className="top-container">
          <img src={jeremyImg} alt="Person called jeremy" />
          <div>
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div className="bottom-cotainer">
          <button
            style={{
              color:
                period === "daily" ? "hsl(0, 0%, 100%)" : "hsl(235, 45%, 61%)",
            }}
            onClick={() => setPeriod("daily")}
          >
            Daily
          </button>
          <button
            style={{
              color:
                period === "weekly" ? "hsl(0, 0%, 100%)" : "hsl(235, 45%, 61%)",
            }}
            onClick={() => setPeriod("weekly")}
          >
            Weekly
          </button>
          <button
            style={{
              color:
                period === "monthly"
                  ? "hsl(0, 0%, 100%)"
                  : "hsl(235, 45%, 61%)",
            }}
            onClick={() => setPeriod("monthly")}
          >
            Monthly
          </button>
        </div>
      </div>

      {data.map((item) => {
      
        return (
          <Card
            key={item.id}
            title={item.title}
            timeframes={item.timeframes[period]}
            index={item.id}
            color={item.color}
          />
        );
      })}
    </div>
  );
}

export default App;
