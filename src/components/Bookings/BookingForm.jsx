import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../UI/Inputs/TextInput";
import SelectInput from "../UI/Inputs/SelectInput";
import { BookingContext } from "../../context/BookingContext";
import Button from "../UI/Buttons/Button";
import DialogConfirm from "../UI/Dialogs/DialogConfirm";

const BookingForm = () => {
  const { addBooking } = useContext(BookingContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    people: 1,
    date: "",
    time: "",
    occasion: "",
    seating: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.occasion) newErrors.occasion = "Occasion is required";
    if (!formData.seating) newErrors.seating = "Seating preference is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      addBooking(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        people: 1,
        date: "",
        time: "",
        occasion: "",
        seating: "",
      });
      setErrors({});
      setShowSuccessModal(true);
    } else {
      setErrors(validationErrors);
    }
  };
  const handleCloseModal = () => setShowSuccessModal(false);

  const handleGoToProfile = () => {
    setShowSuccessModal(false);
    navigate("/profile");
  };

  return (
    <section className="section">
      <div className="container">
        <div><h1>Reservation</h1></div>
        <div className="reservation-form-container">
          <form
            className="reservation-form-box-container"
            onSubmit={handleSubmit}
          >
            <div className="reservation-form-box">
              <TextInput
                label="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <TextInput
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
              <TextInput
                label="Email"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <TextInput
                label="Phone number"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
              <TextInput
                label="Numberof people"
                name="people"
                type="number"
                value={formData.people}
                onChange={handleChange}
                error={errors.people}
                min="1"
                max="50"
              />
              <TextInput
                label="Select date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                error={errors.date}
              />
              <SelectInput
                classDiv="reservation-sub-box"
                label="Select Time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                options={[
                  "12:00 PM",
                  "12:30 PM",
                  "1:00 PM",
                  "1:30 PM",
                  "2:00 PM",
                  "2:30 PM",
                  "3:00 PM",
                  "3:30 PM",
                  "4:00 PM",
                  "4:30 PM",
                  "5:00 PM",
                  "5:30 PM",
                  "6:00 PM",
                  "6:30 PM",
                  "7:00 PM",
                  "7:30 PM",
                  "8:00 PM",
                  "8:30 PM",
                  "9:00 PM",
                ]}
                error={errors.time}
                disabled={!formData.date}
              />
              <SelectInput
                classDiv="reservation-sub-box"
                label="Occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                options={["Birthday", "Anniversary", "Other"]}
                error={errors.occasion}
              />
              <SelectInput
                classDiv="reservation-sub-box"
                label="Seating preferences"
                name="seating"
                value={formData.seating}
                onChange={handleChange}
                options={["Indoor", "Outdoor"]}
                error={errors.seating}
              />
            </div>
            <div className="reservation-form-submit-btn-box">
              <Button className="reservation-form-submit-btn">Make your reservation</Button>
            </div>
          </form>
        </div>
        {showSuccessModal && (
          <DialogConfirm
            isOpen={showSuccessModal}
            onClose={handleCloseModal}
            title="Thank You for Reservation.."
            message="You can browse for more items or you can see your Reservations in your profile."
            onPrimaryAction={handleGoToProfile}
            primaryActionLabel="Go to reservation"
            onSecondaryAction={handleCloseModal}
            secondaryActionLabel="Close"
          />
        )}
      </div>
    </section>
  );
};

export default BookingForm;
