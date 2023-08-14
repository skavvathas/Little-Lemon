import React from 'react';
import {useState, useEffect} from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Radio, RadioGroup, VStack, Select, Image, Input, FormLabel, Stack, Text } from '@chakra-ui/react';
import { Box, DatePicker } from '@chakra-ui/react'
import { BookingContextProvider, useBookingContext } from "../context/BookingContext";
import image1 from "../images/restaurant.jpg";
import image2 from "../images/restaurant-chef-B.jpg";
import image3 from "../images/restauranfood.jpg";

const BookingFirstStep = ({handleSubmit}) => {
    const { radioGroup, setRadioGroup, date, setDate, time, setTime, numberOfGuests, setNumberOfGuests, occasion, setOccasion } = useBookingContext();

    const handleRadioChange = (value) => {
        setRadioGroup(value);
    };
    

    return (
        <div>

            <div className="booking-step-1-reservations">
                
                <Text fontSize='5xl' style={{marginBottom: '40px', marginLeft: '50px'}}>Reservations</Text>

                <div className="radio">
                    <RadioGroup onChange={handleRadioChange} value={radioGroup}>
                        <Stack direction='row' spacing={48}>
                            <Radio value="Indoor seating" >Indoor seating</Radio>
                            <Radio value="Outdoor seating">Outdoor seating</Radio>
                        </Stack>
                    </RadioGroup>
                </div>
                
                <div className="booking-step-1">
                    <div className="input-group">

                        <FormLabel htmlFor="res-date" color="white">
                            Choose date
                        </FormLabel>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="date"
                            onChange={(e) => {setDate(e.target.value)}}
                            bg="white"
                            width="46vh"
                        />

        
                        <FormLabel htmlFor="occasion" color="white">
                            Occasion
                        </FormLabel>
                        <Select 
                            placeholder='Select option' 
                            onChange={(e) => {setOccasion(e.target.value)}} 
                            bg="white"
                            width="46vh"
                        >
                            <option value='birthday'>Birthday</option>
                            <option value='anniversary'>Anniversary</option>
                            <option value='engagement'>Engagement</option>
                        </Select>
                        
                    </div>

                    <div className="input-group" style={{ marginLeft: '30px' }}>
                        <FormLabel htmlFor="guests" color="white">
                            Number of guests
                        </FormLabel>
                        <Input 
                            placeholder='1' 
                            min="1" 
                            max="10" 
                            id="guests" 
                            onChange={(e) => {setNumberOfGuests(e.target.value)}}
                            bg="white"
                            width="46vh"
                        />

                        <FormLabel htmlFor="res-time" color="white">
                            Time
                        </FormLabel>
                        <Select 
                            placeholder='Select time' 
                            onChange={(e) => {setTime(e.target.value)}} 
                            bg="white" 
                            width="46vh"
                        >
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </Select>

                    </div>
                </div>
            </div>
            
            <div className="icons-step-2">
                <Image src={image1} alt="" borderRadius='lg' boxSize='220px' className="icons"/>
                <Image src={image2} alt="" borderRadius='lg' boxSize='220px' className="icons"/>
                <Image src={image3} alt="" borderRadius='lg' boxSize='220px' className="icons"/>
            </div>

            <div className="parent-container">
                <Button onClick={handleSubmit} colorScheme='yellow' className="buttonM">Make a reservation</Button>
            </div>

        </div>
    )
}

export default BookingFirstStep;

/*const BookingFirstStep = ({handleSubmit}) => {
    //const { radioGroup, setRadioGroup, date, setDate, time, setTime, numberOfGuests, setNumberOfGuests, occasion, setOccasion } = useBookingContext();

    //const handleRadioChange = (value) => {
    //    setRadioGroup(value);
    //};
    const {radioGroup, date, time, numberOfGuests, occasion, dispatch} = useBookingContext();

    const handleRadioChange = (value) => {
        dispatch({
          type: "SET_RADIO_GROUP",
          payload: value,
        });
      };


    return (
        <div>

            <div className="booking-step-1-reservations">
                
                <Text fontSize='5xl' style={{marginBottom: '40px'}}>Reservations</Text>

                <div className="radio">
                    <RadioGroup onChange={handleRadioChange} value={radioGroup}>
                        <Stack direction='row' spacing={48}>
                            <Radio value="Indoor seating" >Indoor seating</Radio>
                            <Radio value="Outdoor seating">Outdoor seating</Radio>
                        </Stack>
                    </RadioGroup>
                </div>
                
                <div className="booking-step-1">
                    <div className="input-group">

                        <FormLabel htmlFor="res-date" color="white">
                            Choose date
                        </FormLabel>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="date"
                            onChange={(e) => dispatch({ type: "SET_DATE", payload: e.target.value })}
                            bg="white"
                            width="46vh"
                        />

        
                        <FormLabel htmlFor="occasion" color="white">
                            Occasion
                        </FormLabel>
                        <Select 
                            placeholder='Select option' 
                            onChange={(e) => dispatch({ type: "SET_OCCASION", payload: e.target.value })}
                            bg="white"
                            width="46vh"
                        >
                            <option value='birthday'>Birthday</option>
                            <option value='anniversary'>Anniversary</option>
                            <option value='engagement'>Engagement</option>
                        </Select>
                        
                    </div>

                    <div className="input-group" style={{ marginLeft: '30px' }}>
                        <FormLabel htmlFor="guests" color="white">
                            Number of guests
                        </FormLabel>
                        <Input 
                            placeholder='1' 
                            min="1" 
                            max="10" 
                            id="guests" 
                            onChange={(e) => dispatch({ type: "SET_NUMBER_OF_GUESTS", payload: e.target.value })}
                            bg="white"
                            width="46vh"
                        />

                        <FormLabel htmlFor="res-time" color="white">
                            Time
                        </FormLabel>
                        <Select 
                            placeholder='Select time' 
                            onChange={(e) => dispatch({ type: "SET_TIME", payload: e.target.value })}
                            bg="white" 
                            width="46vh"
                        >
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </Select>

                    </div>
                </div>
            </div>
            
            <div className="icons-step-2">
                <Image src={image1} alt="" borderRadius='lg' boxSize='220px' className="icons"/>
                <Image src={image2} alt="" borderRadius='lg' boxSize='220px' className="icons"/>
                <Image src={image3} alt="" borderRadius='lg' boxSize='220px' className="icons"/>
            </div>

            <div className="parent-container">
                <Button onClick={handleSubmit} colorScheme='yellow' className="buttonM">Make a reservation</Button>
            </div>

        </div>
    )
}

export default BookingFirstStep;*/
