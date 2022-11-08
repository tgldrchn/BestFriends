import Star from "./Star";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = ({ image, firstName, lastName, paragraph, star }) => {
  return (
    <div className='contentVlog'>
      <div>
        {star.map((e) => {
          return <Star />;
        })}
      </div>
      <p className='paragraphContent'>{paragraph}</p>
      <div className='profileContent'>
        <img src={image} alt={lastName} className='imgContent' />
        <div className='nameContent'>
          {firstName}
          {"  "}
          {lastName}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
