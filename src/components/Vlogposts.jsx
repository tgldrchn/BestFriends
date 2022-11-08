import "bootstrap/dist/css/bootstrap.min.css";

const Vlogpost = ({
  headerImage,
  title,
  text,
  image,
  firstName,
  lastName,
  date,
}) => {
  return (
    <div>
      <img
        className='headerVlog w-100 h-50 p-0 rounded-bottom rounded-5'
        src={headerImage}
        alt=''
      />
      <div className='p-4 '>
        <div className='mainVlog'>
          <p
            className='titleVlog'
            style={{ fontSize: "24px", lineHeight: "29px" }}
          >
            {title}
          </p>
          <div className='textVlog text-muted' style={{ fontSize: "15px" }}>
            {text}
          </div>
        </div>
        <div className='profileTwo' style={{ fontSize: "15px" }}>
          <div className='miniProfile d-flex justify-content-between align-items-center'>
            <img src={image} alt={lastName} className='img' />
            <div className='nameTwo'>
              {firstName}
              {"  "}
              {lastName}
            </div>
            <div className='date'>{date}</div>
          </div>
        </div>
      </div>
    </div>
    //
  );
};

export default Vlogpost;
