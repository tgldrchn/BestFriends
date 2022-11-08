import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { DarkMode } from "../App";
import { useContext } from "react";
const Header = () => {
  const { setIsDarkMode } = useContext(DarkMode);
  return (
    <div className='header'>
      <Link className='logo' to='./home'>
        HOME
      </Link>
      <Form>
        <Form.Check
          type='switch'
          onChange={(e) => setIsDarkMode(e.target.checked)}
        ></Form.Check>
      </Form>
      <div className='bar'>
        <Link className='page' to='./products'>
          products
        </Link>
        <Link className='page' to='./services'>
          services
        </Link>
        <Link className='page' to='./contact'>
          contact
        </Link>
        <Link className='page' to='./login'>
          login
        </Link>
      </div>
    </div>
  );
};

export default Header;
