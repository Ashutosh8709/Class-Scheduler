import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login, AdminDashboard } from "./pages";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default App;
