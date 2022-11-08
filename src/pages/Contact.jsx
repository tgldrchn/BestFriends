import Content from "./Content";

const Contact = () => {
  return (
    <div className='name'>
      <Content
        title='Contact'
        text='All in one for your remote team chats, collaboration and track projects'
        button='Get early access'
        placeholder='Email'
        type='email'
      />
    </div>
  );
};

export default Contact;
