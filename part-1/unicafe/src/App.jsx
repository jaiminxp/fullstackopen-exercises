import { useState } from 'react'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodBtnClick = () => setGood(good + 1)
  const handleNeutralBtnClick = () => setNeutral(neutral + 1)
  const handleBadBtnClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={handleGoodBtnClick}>good</button>
      <button onClick={handleNeutralBtnClick}>neutral</button>
      <button onClick={handleBadBtnClick}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
