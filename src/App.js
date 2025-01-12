import './App.css';
import items from './data';
import { useEffect, useState } from 'react';
import Menu from './Menu';
import Category from './Category';
import { getToken } from "firebase/messaging";
import { messaging, analytics } from "./firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import Message from "./Message";
import "react-toastify/dist/ReactToastify.css";
// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.
import { onMessage } from "firebase/messaging";
import { logEvent } from 'firebase/analytics';

const allCategories = ['all', ... new Set(items.map((item) => item.category))];

function App() {
  
  const[menuItems, setMenuItems] = useState(items);
  const[categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const filteredItems = items.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  }

  useEffect(() => {
    requestPermission();
  }, []);


  onMessage(messaging, (payload) => {
    toast(<Message notification={payload.notification} />);
    console.log(payload);
  });

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Category categories={categories} filterItemsMethod={filterItems}></Category>
        <Menu menuItems={menuItems}></Menu>
        <ToastContainer />
      </section>
    </main>
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
