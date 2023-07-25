import React from 'react';
import image1 from "../images/restauranfood.jpg";
import { Text, Image, Button, ButtonGroup } from '@chakra-ui/react';

export default function Main() {
  return (
    <div className="main-div">
      <div className="main-div-title">
        <Text color="#F4CE14" fontSize='4xl'>Little Lemon</Text>
        <Text fontSize='3xl'>Chicago</Text>
        <p>We are a family owned 
            Mediterranean restaurant, 
            focused on traditional 
            recipes served with a modern 
            twist.
        </p>
        <Button bg="#F4CE14">Reserve a table</Button>
        
      </div>
      <div>
        <Image src={image1} alt="" borderRadius='lg' boxSize='350px'/>
      </div>
    </div>
  )
}
