import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import LandingPage from "pages/LandingPage"
import InputNumber from "pages/ExampleInputNumber"
import InputDate from "pages/ExampleInputDate"
import "assets/scss/style.scss"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/exampleinputnumber" component={InputNumber} />
        <Route exact path="/exampleinputdate" component={InputDate} />
      </Router>
    </div>
  );
}

export default App;
