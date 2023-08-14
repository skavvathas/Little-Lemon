import React from 'react';
import { Text, Button, ButtonGroup } from '@chakra-ui/react';
import Dish from "./Dish"


const dishes = [
    {
      title: "Greek salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosomary croutons.",
      getImageSrc: () => require("../images/greek-salad.jpg"),
      url: "https://github.com/skavvathas/Social-Media-App-React.js",
    },
    {
      title: "Bruchetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      getImageSrc: () => require("../images/bruchetta.webp"),
      url: "https://github.com/skavvathas/Login-Register-with-Authentication-built-with-React.js",
    },
    {
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comos straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      getImageSrc: () => require("../images/lemon-dessert.jpg"),
      url:"https://github.com/skavvathas/To-Do-List",
    },
  ];

const Main2 = () => {
  return (
    <div>
      <div className="main2-div1">
        <Text fontSize='5xl'>This weeks specials!</Text>
        <div className="button-menu">
          <Button bg="#F4CE14">Online menu</Button>
        </div>
      </div>
      <div className="main2-div2">
        {dishes.map((dish) => (
            <Dish
              key={dish.title}
              title={dish.title}
              price={dish.price}
              description={dish.description}
              imageSrc={dish.getImageSrc()}
            />
          ))}
      </div>
    </div>
  )
}

export default Main2
