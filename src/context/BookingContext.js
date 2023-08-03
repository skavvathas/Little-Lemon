import React, { createContext, useContext, useState, useReducer} from "react";

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

/*const BookingContext = createContext();

const initialState = {
  radioGroup: "Indoor seating",
  date: "",
  time: "",
  numberOfGuests: "",
  occasion: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  specialRequests: "",
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case "SET_RADIO_GROUP":
      return { ...state, radioGroup: action.payload };
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_TIME":
      return { ...state, time: action.payload };
    case "SET_NUMBER_OF_GUESTS":
      return { ...state, numberOfGuests: action.payload };
    case "SET_OCCASION":
      return { ...state, occasion: action.payload };
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONE_NUMBER":
      return { ...state, phoneNumber: action.payload };
    case "SET_SPECIAL_REQUESTS":
      return { ...state, specialRequests: action.payload };
    default:
      return state;
  }
};

const BookingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error(
      "useBookingContext must be used within a BookingContextProvider"
    );
  }
  return context;
};

export { BookingContextProvider, useBookingContext };*/