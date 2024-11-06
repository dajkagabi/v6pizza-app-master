import React from "react";
import '../styles/MenuItem.css' // Ha külön CSS-t használsz

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div className="menuItemImage" style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
  );
}

export default MenuItem;
