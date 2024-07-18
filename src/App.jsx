import React from "react";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Event from "./pages/Event.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Booking from "./pages/Booking.jsx";
import Payment from "./pages/Payment.jsx";
import Profile from "./pages/Profile.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import MyBooking from "./pages/MyBooking.jsx";
import MyWhislist from "./pages/MyWhislist.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  // component
  return (
    <div>
      {/* <Navbar /> */}
      {/* <RouterProvider router={router} /> */}
      <Profile />
      <ChangePassword />
      {/* <Footer /> */}
      <MyWhislist />
      <MyBooking />
      <CreateEvent />
      <Home />
    </div>
  );
}

export default App;
