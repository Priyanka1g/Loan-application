import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoGraphic from "./adminComponents/InfoGraphic";
import UsersList from "./adminComponents/UsersList";
import Navbar from "./Navbar";

function Admin() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="info" element={<InfoGraphic />} />
        <Route path="requests" element={<UsersList listName="requests" />} />
        <Route path="borrowers" element={<UsersList listName="borrowers" />} />
      </Routes>
    </>
  );
}

export default Admin;
