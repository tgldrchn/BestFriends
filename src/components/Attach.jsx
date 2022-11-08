import "bootstrap/dist/css/bootstrap.min.css";
const Attach = () => {
  return (
    <div className='attach rounded-2 d-flex justify-content-between align-items-start flex-column p-3 text-secondary'>
      <div
        className='attachTime'
        style={{ fontSize: "11px", color: "#898989" }}
      >
        11:00AM - 11:30AM
      </div>
      <div
        className='attachText text-dark'
        style={{ fontSize: "14px", fontWeight: "400" }}
      >
        Website for the Products
      </div>
      <div className='attachButtons d-flex flex-row w-100 justify-content-between'>
        <div className='d-flex flex-row w-50 justify-content-between'>
          <div className='icon' style={{ backgroundColor: "#4DA1FF" }}></div>
          <div
            className='icon'
            style={{
              backgroundColor: "rgba(77, 161, 255, 0.1)",
              color: "#4DA1FF",
            }}
          >
            AM
          </div>
          <div
            className='icon'
            style={{
              backgroundColor: "rgba(255, 208, 18, 0.1)",
              color: "#FFD012",
            }}
          >
            ES
          </div>
        </div>
        <div>
          <span>10</span>
          <span>attachments</span>
        </div>
      </div>
    </div>
  );
};
export default Attach;
