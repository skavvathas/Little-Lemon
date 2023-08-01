import React from 'react';
import {useState, useEffect} from "react";
import { BookingContextProvider, useBookingContext } from "../context/BookingContext";
import image1 from "../images/restaurant.jpg";
import image2 from "../images/greek-salad.jpg";
import image3 from "../images/pasta.jpg";
import { Text, Image, Button, ButtonGroup, Input, Textarea, FormLabel } from '@chakra-ui/react';

const BookingSecondStep = ({handleSubmit}) => {
    const {
        radioGroup,
        date,
        time,
        numberOfGuests,
        occasion,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        specialRequests,
        setSpecialRequests,
    } = useBookingContext();


 
    

    return (
    <div>
        <div className="main-step-2">
            <div className="booking-step-2">
                <div className="input-group">

                    <FormLabel htmlFor="firstName" color="white">
                        First Name
                    </FormLabel>
                    <Input 
                        isInvalid
                        errorBorderColor='rgb(253, 255, 240)'
                        placeholder='medium size' 
                        onChange={(e) => {setFirstName(e.target.value)}}
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        required
                        bg="white"
                        width="46vh"
                    />

                    <FormLabel htmlFor="email" color="white">
                        Email
                    </FormLabel>
                    <Input 
                        isInvalid
                        errorBorderColor='rgb(253, 255, 240)'
                        placeholder='medium size' 
                        size='md' 
                        onChange={(e) => {setEmail(e.target.value)}}
                        name="email"
                        placeholder="you@company.com"
                        value={email}
                        required
                        type="email"
                        className="form-control"
                        bg="white"
                        width="46vh"
                    />                   

                    <div className="">
                        <div className="booking-dates">
                            <div className="input-group booking-elements">
                                <Text fontSize='xl'>{time}</Text>
                                <Text fontSize='xl'>{date}</Text>
                            </div>
                            <div className="input-group booking-elements">
                                <Text fontSize='xl'>{occasion}</Text>
                                <Text fontSize='xl'>{numberOfGuests} guests</Text>
                            </div>  
                        </div>
                        <Text fontSize='xl'>{radioGroup}</Text>
                        
                    </div>
                </div>

                <div className="input-group" style={{ marginLeft: '30px' }}>
                    <FormLabel htmlFor="lastName" color="white">
                        Last Name
                    </FormLabel>
                    <Input
                        isInvalid
                        errorBorderColor='rgb(253, 255, 240)'
                        placeholder='Here is a sample placeholder'
                        onChange={(e) => {setLastName(e.target.value)}}
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        required
                        className=""
                        bg="white"
                        width="46vh"
                    />

                    <FormLabel htmlFor="phone" color="white">
                        Phone
                    </FormLabel>
                    <Input
                        isInvalid
                        errorBorderColor='rgb(253, 255, 240)'
                        placeholder='Here is a sample placeholder'
                        onChange={(e) => {setPhoneNumber(e.target.value)}}
                        name="phoneNumber"
                        placeholder="Phone"
                        value={phoneNumber}
                        required
                        className=""
                        bg="white"
                        width="46vh"
                    />

                    <FormLabel htmlFor="specialRequests" color="white">
                        Special Requests
                    </FormLabel>
                    <Textarea 
                        isInvalid 
                        errorBorderColor='rgb(253, 255, 240)'
                        placeholder='Here is a sample placeholder' 
                        onChange={(e) => {setSpecialRequests(e.target.value)}}
                        name="specialRequests"
                        placeholder="Special Requests"
                        value={specialRequests}
                        required
                        className=""
                        bg="white"
                        width="46vh"
                        height="15vh"
                    />

                </div>
            </div>
        
        </div>
        {/*error && <div className="">{error}</div>*/}

        <div className="icons-step-2">
            <Image src={image1} alt="" borderRadius='lg' boxSize='220px' className="icons"/>
            <Image src={image2} alt="" borderRadius='lg' boxSize='220px' className="icons"/>
            <Image src={image3} alt="" borderRadius='lg' boxSize='220px' className="icons"/>
        </div>

        <div className="parent-container">
            <Button onClick={handleSubmit} colorScheme='yellow' className="buttonM">Confirm Reservation</Button>
        </div>

    </div>
    )
}

export default BookingSecondStep


