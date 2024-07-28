import React from "react";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
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
import EventHome from "./components/EventHome.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const arrayRouter = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Event",
    element: <Event />,
  },
  {
    path: "/Booking",
    element: <Booking />,
  },
  {
    path: "/Payment",
    element: <Payment />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/MyWhislist",
    element: <MyWhislist />,
  },
  {
    path: "/MyBooking",
    element: <MyBooking />,
  },
  {
    path: "/CreateEvent",
    element: <CreateEvent />,
  },
  {
    path: "/ChangePassword",
    element: <ChangePassword />,
  },
  {
    path: "/EventHome",
    element: <EventHome />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
];

const router = createBrowserRouter(arrayRouter);

function App() {
  // component

  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
