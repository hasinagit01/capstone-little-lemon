import Star from "../../../assets/star.png";
import './TestimonialCard.css'
import Card from "../../UI/Cards/Card";

const TestimonialCard = ({ name, description }) => {
  return (
    <Card className="testimonial-card">
      <img src={Star} alt="delivery Icon"></img>
      <h3>{name}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default TestimonialCard;
