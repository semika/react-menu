import logo from './logo.svg';
import './App.css';
import items from './data';
import { useState } from 'react';
import Menu from './Menu';
import Category from './Category';
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

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Category categories={categories} filterItemsMethod={filterItems}></Category>
        <Menu menuItems={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
