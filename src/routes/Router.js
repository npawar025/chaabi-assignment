import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Trainings from "../pages/Trainings";
import Users from "../pages/Users";
import MyAccount from "../pages/MyAccount";
import Analytics from "../pages/Analytics";
import Support from "../pages/Support";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/trainings" element={<Trainings />} />
      <Route path="/users" element={<Users />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
};

export default Router;
