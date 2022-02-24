import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Apply from "./components/user/ApplicationForm";
import Applyforloan from "./components/user/Applyforloan";
import Admin from "./components/admin/Admin";
import { UserContextProvider } from "./store/userContext";


function App() {
  return (
    <UserContextProvider>
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login></Login>}/>
        <Route exact path="/register" element={<Register></Register>}/>
        <Route exact path="/applyloan" element={<Apply></Apply>}/>
        <Route path="/admin/*" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </UserContextProvider>
  );
}

export default App;
