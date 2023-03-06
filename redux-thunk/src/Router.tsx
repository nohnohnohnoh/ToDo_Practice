import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import ToDo from "./pages/ToDo/ToDo";
import ToDoDetail from "./pages/ToDoDetail/ToDoDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/todos" element={<ToDo />} />
        <Route path="/todos/:id" element={<ToDoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
