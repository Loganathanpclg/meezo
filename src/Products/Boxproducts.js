function Boxproducts() {
  const style = {
    lowpri: {
     
      display: "flex",
    },
    left: {
      width: "45%",
      height: "315px",
      background: "#a7e1fa",
      paddingTop: "30px",
      paddingLeft: "30px",
    },
    icons: {
      marginTop: "25px",
      background: "white",
      height: "65px",
      width: "500px",
      borderRadius: "9px",
    },
    bt: {
      height: "40px",
      width: "300px",
      background: "blue",
      color: "white",
      border: "none",
      borderRadius: "5px",
    },
  };

  return (
    <div style={style.lowpri} className="lowprice">
      <div style={style.left} className="left">
        <p style={{ fontSize: 50, fontWeight: "bold" }}>
          Lowest Prices<br></br>
          Best Quality Shopping
        </p>

        <div style={style.icons}>
          <ul>
            <li
              style={{
                borderRight: "1px solid black",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg"
                  alt=""
                />
                <label style={{ paddingLeft: "10px", paddingRight: "40px" }}>
                  Free <br /> Delivery
                </label>
              </div>
            </li>
            <li style={{ borderRight: "1px solid black" }}>
              <div style={{ display: "flex" }}>
                <img
                  src="https://images.meesho.com/images/pow/cod_jamun.svg"
                  alt=""
                />
                <label style={{ paddingLeft: "10px", paddingRight: "40px" }}>
                  Cash on <br /> Delivery
                </label>
              </div>
            </li>
            <li style={{ paddingRight: "20px" }}>
              <div style={{ display: "flex" }}>
                <img
                  src="https://images.meesho.com/images/pow/easyReturns_jamun.svg"
                  alt=""
                />
                <label style={{ paddingLeft: "10px" }}>
                  Easy <br /> Returns
                </label>
              </div>
            </li>
          </ul>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button style={style.bt}>
            <img
              src="https://images.meesho.com/images/pow/playstoreSmallIcon.png"
              alt=""
            />
            <label
              style={{
                fontSize: 18,
                paddingLeft: "10px",
                fontWeight: "bold",
                paddingTop: "-5px",
              }}
            >
              Download the Meesho App
            </label>
          </button>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.meesho.com/images/marketing/1686234459500_512.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default Boxproducts;
