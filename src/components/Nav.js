import React from 'react';
import image from "../images/little-lemon.png";

export default function Nav() {
  return (
    <div>
        <img src={image} alt="" />
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Reservations</a></li>
            <li><a href="">Order Online</a></li>
            <li><a href="">Login</a></li>
        </ul>
    </div>
  )
}
