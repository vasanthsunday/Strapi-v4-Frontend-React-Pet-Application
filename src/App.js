import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import PetList from "./pets/PetList";
import AddPet from "./pets/AddPet";
import EditPet from "./pets/EditPet";
import React from "react";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add-pet" element={<AddPet />}>
        </Route>
        <Route path="/edit-pet/:id" element={<EditPet />}>
        </Route>
        <Route path="/" element={<PetList />}>
        </Route>
      </Routes>
    </Router>
  );
}
