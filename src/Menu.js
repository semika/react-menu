import React from "react";
const Menu = ({menuItems}) => {
    return(
        <div className="section-center">
        {
            menuItems.map((menuItem) => {
                return (
                    <article key={menuItem.id} className="menu-item">
                        <img src={menuItem.img} className="photo" alt={menuItem.title}></img>
                        <div className="item-info">
                            <header>
                                <h4>{menuItem.title}</h4>
                                <h4 className="price">${menuItem.price}</h4>
                            </header>
                            <p className="item-text">{menuItem.desc}</p>
                        </div>
                    </article>
                );    
            })
        }
        </div>
    );
}

export default Menu;