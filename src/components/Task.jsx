import "bootstrap/dist/css/bootstrap.min.css";
import Attach from "./Attach";
import Text from "./Text";
const Task = () => {
  return (
    <div className='task d-flex flex-row justify-content-between align-items-center pb-5 pt-5'>
      <div className='taskImgContainer'>
        <div className='attachDivContainer'>
          <Attach />
        </div>
        <div className='attachDivContainerTwo'>
          <Attach />
        </div>
      </div>
      <Text
        textTitle='Simple task management'
        textText='Give everyone you work with—inside and outside your company—a more
          productive way to stay in sync. Respond faster with emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place.'
      />
    </div>
  );
};
export default Task;
