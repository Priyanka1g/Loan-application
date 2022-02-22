import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Userinfo from "./components/admin/Userinfo";
import Userpage from "./components/user/Userpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/userinfo" element={<Userinfo />} />
          <Route exact path="/userpage" element={<Userpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
