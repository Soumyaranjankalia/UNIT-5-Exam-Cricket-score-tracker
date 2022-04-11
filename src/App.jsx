
import './App.css';
import {useState} from "react"



function App() {
  const [score, setScore] = useState(76)
  const [wicket, setWicket] = useState(2)
  const [balls, setBall] = useState(50)

  const scoreInc1 = () =>{
    setScore(score+1)
    
  }

  const scoreInc4 = () => {
    setScore(score+4)
  }
  const scoreInc6 = () => {
    setScore(score+6)
    
  }

 

  const wicketsInc = () => {
    setWicket(wicket+1)
    if(wicket===12){
      setWicket(12)
    }
  }

  const ballsInc =() => {
    setBall(balls+(.1))
    if(balls === balls+.6){
      setBall(balls+1)
    }
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{""}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
             
            }
          </h1>
        </div>
        <div>
          Wicket:{""}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{""}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              balls
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={scoreInc1}>Add 1</button>
        <button className="addScore4" onClick={scoreInc4}>Add 4</button>
        <button className="addScore6" onClick={scoreInc6}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={wicketsInc}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={ballsInc}>Add 1</button>
      </div>

      {  /* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1 className='status'>{score>100 ? "India Won" : null}</h1>
    </div>
  );
}

export default App;


