import React from "react"
import ReactDOM from "react-dom"

function App() {

  const firstName = "Alberto"
  const lastName = "Cruzado"

  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }


  return (
    <div>

      <h1>Hello {firstName + " " + lastName}</h1>
      <h1>Hello {`${firstName} ${lastName}`}</h1>

      <h1>Good {timeOfDay + " Mr. " + firstName + " " + lastName}</h1>
      <h1>Good {`${timeOfDay} Mr. ${firstName} ${lastName}`}</h1>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))