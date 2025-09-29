import './App.css';
import items from './data';
import { useEffect, useState } from 'react';
import Menu from './Menu';
import Category from './Category';
import GoogleLoginButton from './GoogleLoginButton';
import AppleLoginButton from './AppleLoginButton';
import GoogleLoginCallBack from './GoogleLoginCallBack';
import AppleLoginCallBack from './AppleLoginCallBack';
import Home from './Home';
import { getToken } from "firebase/messaging";
import { messaging, analytics } from "./firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import Message from "./Message";
import "react-toastify/dist/ReactToastify.css";
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.
import { onMessage } from "firebase/messaging";
import { logEvent } from 'firebase/analytics';

function App() {
  
  const[menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const filteredItems = items.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  }
  
  const About = () => {
    return <h1>About Page</h1>;
  }
  
  const Contact = () => {
    return <h1>Contact Page</h1>;
  }

  useEffect(() => {
    requestPermission();
  }, []);


  onMessage(messaging, (payload) => {
    toast(<Message notification={payload.notification} />);
    console.log(payload);
  });

  return (

    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/google-login">Google Login</Link> |{" "}
        <Link to="/apple-login">Apple Login</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/google-login" element={<GoogleLoginButton />} />
        <Route path="/apple-login" element={<AppleLoginButton />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/google-callback" element={<GoogleLoginCallBack />} />
        <Route path="/apple-callback" element={<AppleLoginCallBack/>} />

      </Routes>
    </BrowserRouter>
  );


}

async function requestPermission() {
  console.log("Requesting permission....")
  //requesting permission using Notification API
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey: "BFYaXGDlnUN1W7xiQKPEw6kj4Z63aYg-3jo_RDboHNu1D1sHvYHvdhPzbpf9Wz0vZIUYJquJF6mpiz7li5R7AZE",
    });

    //We can send token to server
    console.log("Token generated : ", token);
    logEvent(analytics, "Subscribe for Notification");
  } else if (permission === "denied") {
    //notifications are blocked
    alert("You denied for the notification");
  }
}

export default App;
