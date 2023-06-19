import SearchBar from "../Products/SearchBar";

import {BsPhone} from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    nav: {
      width: "100%",
      height: "90px",
      borderBottom: "1px solid orange",
      paddingLeft:'50px',
    },
   
  };
  return (
    <div>
      <div className="nav-1">
        <nav style={styles.nav}>
          <ul>
            <li style={{fontSize:40,fontWeight:'bold', fontFamily:'initial'}}>meesho</li>
            <li><SearchBar/></li>
            <li style={{paddingLeft:'50px',paddingRight:'20px', borderRight:'1px solid black'}}><BsPhone/>  Download App</li>
            <li style={{borderRight:'1px solid black',paddingRight:'20px'}}>Become a Supplier</li>
            <li style={{paddingRight:'20px'}}><AiOutlineUser/> Profile</li>
            <li>Cart</li>
            <li><Link to={'/login'}>Login</Link> </li>
            <li><Link to={'/register'}>Sign up</Link></li>
          </ul>
        </nav>
      </div>

    
    </div>
  );
}

export default Navbar;
