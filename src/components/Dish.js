import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Heading, Stack, StackDivider, Box, Text, Image, Divider, ButtonGroup, Button } from '@chakra-ui/react';

const Dish = ({ title, price, description, imageSrc }) => {
  return (
    <Card maxW='md' w="300px" h="520px" border="1px solid black">
        <CardBody>
            <Image
            src={imageSrc}
            alt=""
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text color="#EE9972" fontSize='2xl'>
                {price}
            </Text>
            <Text>
                {description}
            </Text>
            
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            Order a delivery
        </CardFooter>
    </Card>
  )
}

export default Dish
