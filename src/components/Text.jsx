import "bootstrap/dist/css/bootstrap.min.css";
const Text = ({ textTitle, textText }) => {
  return (
    <div className='homeText m-5'>
      <div className='miniTextContainer'>
        <div className='textTitle'>{textTitle}</div>
        <div className='textText'>{textText}</div>
        <div>
          <a className='learn' href='http://'>
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};
export default Text;
