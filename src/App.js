import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applyforloan from "./components/user/Applyforloan";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login></Login>}/>
        <Route exact path="/register" element={<Register></Register>}/>
        <Route exact path="/applyloan" element={<Applyforloan></Applyforloan>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
