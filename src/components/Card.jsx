import "../styles/Card.css";
import ellipsisIcon from "../assets/icon-ellipsis.svg";
import exercise from "../assets/icon-exercise.svg";
import play from "../assets/icon-play.svg";
import selfCare from "../assets/icon-self-care.svg";
import social from "../assets/icon-social.svg";
import study from "../assets/icon-study.svg";
import work from "../assets/icon-work.svg";

function Card(props) {
  const { current, previous } = props.timeframes;
  const images = [work, play, study, exercise, social, selfCare];

  return (
    <div className="Card" style={{backgroundImage: `linear-gradient(to bottom, ${props.color} 30%, hsl(226, 43%, 10%) 30%)`}}>
      <img src={images[props.index]} alt="" />

      <div className="inner-container">
        <div>
          <h3>{props.title}</h3>
          <img src={ellipsisIcon} alt="" style={{width:'30px',cursor: 'pointer'}}/>
        </div>
        <div>
          <h1>{current}hrs</h1>
          <p>Last Week - {previous}hrs</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
