import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "./Calendar";
import Text from "./Text";
const Schedule = () => {
  return (
    <div className='calendar d-flex justify-content-evenly align-items-center flex-row pt-5 pb-5'>
      <Text
        textTitle='Scheduling that actually works'
        textText='Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.'
      />
      <div className='miniCalendar'>
        <Calendar />
      </div>
    </div>
  );
};
export default Schedule;
