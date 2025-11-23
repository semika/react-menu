import React from "react";
import { useEffect, useState } from 'react';
import Category from './component/category/Category';
import { toast, ToastContainer } from "react-toastify";
import items from './data';
import Menu from './Menu';

const allCategories = ['all', ... new Set(items.map((item) => item.category))];

const Home  = () => {

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
      
    return(
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

export default Home;