import React, { useEffect } from "react";
import { useHero } from "../hooks/useHero";
import heroImage from "../assets/table3.jpeg";
import BookingForm from "../components/Bookings/BookingForm";
import  "../components/Bookings/Booking.css"

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

  useEffect(() => {
    setHeroParams(paramsHero);
  }, [setHeroParams]);
  return <div className="mainSection">
    <BookingForm />
  </div>;
};

export default Booking;
