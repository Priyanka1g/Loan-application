import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Userinfo from "./components/admin/Userinfo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/userinfo" element={<Userinfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
