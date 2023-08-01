import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext();

const BookingContextProvider = ({ children }) => {
  const [radioGroup, setRadioGroup] = useState("Indoor seating");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  return (
    <BookingContext.Provider
      value={{
        radioGroup,
        setRadioGroup,
        date,
        setDate,
        time,
        setTime,
        numberOfGuests,
        setNumberOfGuests,
        occasion,
        setOccasion,
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
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingContext must be used within a BookingContextProvider");
  }
  return context;
};

export { BookingContextProvider, useBookingContext };