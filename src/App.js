import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login";
import Register from "./components/login/Register";
import ApplicationForm from "./components/user/ApplicationForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login></Login>}/>
        <Route exact path="/register" element={<Register></Register>}/>
        <Route exact path="/apply" element={<ApplicationForm/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
