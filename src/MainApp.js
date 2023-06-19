import "./App.css";
import Boxproducts from "./Products/Boxproducts";
import TopCategory from "./Products/Topcatagory"

function MainApp() {
  const styles = {
    nav1: {
        width: "100%",
        height: "50px",
        borderBottom: "1px solid blueviolet",
        paddingLeft:'70px',
        paddingTop:'10px',
        paddingBottom:'10px'
      },
  };
  return (
    <div>
      <div className="nav-2">
        <nav style={styles.nav1}>
          <ul>
            <li style={{paddingRight:'20px'}}>Women Ethnic</li>
            <li style={{paddingRight:'20px'}}>Women Western</li>
            <li style={{paddingRight:'20px'}}>Men</li>
            <li style={{paddingRight:'20px'}}>kids</li>
            <li style={{paddingRight:'20px'}}>Home & Kitchen</li>
            <li style={{paddingRight:'20px'}}>Beauty & Health</li>
            <li style={{paddingRight:'20px'}}>Jewellery & Accessories</li>
            <li style={{paddingRight:'20px'}}>Bags & Fottwear</li>
            <li style={{paddingRight:'20px'}}>Electronics</li>
          </ul>
        </nav>
      </div>

      <div className="common">
        <Boxproducts />

        <TopCategory />
      </div>
      
    </div>
  );
}

export default MainApp;
