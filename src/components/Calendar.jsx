const Calendar = () => {
  let cal = ["MO", "TU", "WE", "TH", "FI", "SA", "SU"];
  let calTwo = [25, 26, 27, 28];
  let calThree = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <div className='year'>
      <div>March 2017</div>

      <div className='month'>
        {cal.map((e) => {
          return <div className='day'>{e}</div>;
        })}
        {calTwo.map((e) => {
          return <div className='dayTwo'>{e}</div>;
        })}
        {calThree.map((e) => {
          return <div className='dayThree'>{e}</div>;
        })}
      </div>
    </div>
  );
};
export default Calendar;
