import React from 'react';
import {useState, useEffect} from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { Radio, RadioGroup, VStack } from '@chakra-ui/react';
import { BookingContextProvider, useBookingContext } from "../context/BookingContext";
import BookingFirstStep from "../components/BookingFirstStep";
import BookingSecondStep from "../components/BookingSecondStep";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";

const ReservationsPage = () => {
  const { radioGroup, date, time, numberOfGuests, occasion, firstName, lastName, email, phoneNumber, specialRequests} = useBookingContext();
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  const handleSubmit1 = (event) => {
    //await isAllValid1();
    if(date.length === 0 || time.length === 0 || numberOfGuests.length === 0 || occasion.length === 0){
      alert("Check the fields!");
      event.preventDefault();
    }
    else{
      setFlag(true);
      console.log("Flag!");
    }
  }

  const handleSubmit2 = (event) => {
    
    if(firstName.length === 0 || lastName.length === 0){
      alert("Check the fields!");
      event.preventDefault();
    }

    if(!email.includes("@")){
      alert("The email must conclude '@'");
      event.preventDefault();
    }

    if(phoneNumber.length < 8){
      alert("The length of phoneNumber must be > 8");
      event.preventDefault();
    }

    if(specialRequests.length < 2){
      alert("Add a request");
      event.preventDefault();
    }

    console.log("Flag!");

    const serviceId = 'service_2b7ywx4';
    const templateId = 'template_ixr3fcl';

    // Replace these with your own values
    const userId = 'hQrK0Y2d4VCdTh6jT';
    const emailParams = {
      from_name: "Spiros",
      to_email: `${email}`,
      reply_to: `${email}`,  // Replace with the recipient's name
      firstName: `${firstName}`,
      time: `${time}`,
      date: `${date}` ,
      occasion: `${occasion}`,
      numberOfGuests: `${numberOfGuests}`,
      radioGroup: `${radioGroup}` 
    };

    emailjs.send(serviceId, templateId, emailParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('Email sent successfully, check your email!');
        navigate("/");
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  /*async function isAllValid2(event){
    //lastname firstname email->@ password->one number and 8 letter minimum
    if(firstName.length === 0 || lastName.length === 0 || regUser.username.length < 4){
      alert("Check the fields!");
      event.preventDefault();
    }

    if(email.includes("@")){
      alert("The email must conclude '@'");
      event.preventDefault();
    }

    if(phoneNumber.length < 8){
      alert("The length of phoneNumber must be > 8");
      event.preventDefault();
    }

    if(specialRequests.length < 2){
      alert("Add a request");
      event.preventDefault();
    }    
  }*/

  /*async function isAllValid1(event){
    //lastname firstname email->@ password->one number and 8 letter minimum
    if(date.length === 0 || time.length === 0 || numberOfGuests.length === 0 || occasion.length === 0){
      alert("Check the fields!");
      event.preventDefault();
    }
  }*/

  useEffect(() => {
    console.log(time);
  },[date, time, occasion, numberOfGuests]);

  return (
    <div>
      <Nav />
      <div style={{display: !flag ? "block" : "none"}}>
        <BookingFirstStep handleSubmit={handleSubmit1} />
      </div>

      <div style={{display: flag ? "block" : "none"}}>
        <BookingSecondStep handleSubmit={handleSubmit2} />
      </div>
      <Footer />
    </div>
  )
}

export default ReservationsPage;
