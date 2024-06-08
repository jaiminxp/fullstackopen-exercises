import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : (good / all) * 100

  const handleGoodBtnClick = () => setGood(good + 1)
  const handleNeutralBtnClick = () => setNeutral(neutral + 1)
  const handleBadBtnClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={handleGoodBtnClick}>good</button>
      <button onClick={handleNeutralBtnClick}>neutral</button>
      <button onClick={handleBadBtnClick}>bad</button>

      <h2>Statistics</h2>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

export default App
