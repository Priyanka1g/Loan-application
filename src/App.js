import React from 'react' 
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    {/* navbar will be common for all pages */}
      <Navbar />
      {/* add routes here  */}
    </Router>
  )
}

export default App