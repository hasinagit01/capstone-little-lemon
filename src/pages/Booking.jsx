import React, { useEffect, useState } from "react";
import { useHero } from "../hooks/useHero";
import heroImage from "../assets/table3.jpeg";
import BookingForm from "../components/Bookings/BookingForm";
import "../components/Bookings/Booking.css";

const paramsHero = {
  heading: "Make Your Reservation Today!",
  sub_text: `Whether you're planning a festive holiday meal or a casual get-together, 
            our restaurant is the perfect backdrop for any occasion. 
            Reserve your table now to secure your spot and indulge in a culinary 
            experience that will leave you coming back for more.`,
  image: { heroImage },
  type_for_sub_text: "p",
};

const Booking = () => {
  const { setHeroParams } = useHero();

  const [availableTimes, setAvailableTimes] = useState([
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
    "9:00 PM"
  ]);

  useEffect(() => {
    setHeroParams(paramsHero);
  }, [setHeroParams]);
  return (
    <main className="mainSection">
      <BookingForm availableTimes={availableTimes} />
    </main>
  );
};

export default Booking;
