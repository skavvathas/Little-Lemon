import React from 'react';
import image from "../images/little-lemon.png";
import { Image, Button, ButtonGroup } from '@chakra-ui/react';

export default function Nav() {
  return (
    <div className="nav">
        <img src={image} alt="" className="image"/>
        <ul className="list">
            <li><Button bg="#F4CE14"><a href="/">Home</a></Button></li>
            <li><Button bg="#F4CE14"><a href="/about">About</a></Button></li>
            <li><Button bg="#F4CE14"><a href="/menu">Menu</a></Button></li>
            <li><Button bg="#F4CE14"><a href="/reservations">Reservations</a></Button></li>
            <li><Button bg="#F4CE14"><a href="">Order Online</a></Button></li>
            <li><Button bg="#F4CE14"><a href="">Login</a></Button></li>
        </ul>
    </div>
  )
}
