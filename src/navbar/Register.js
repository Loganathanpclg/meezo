import "./nav.css";

function Register() {
  return (
    <div className="reg">
      <div className="head">
        <label>Sign up</label>
      </div>
      <form>
        <input type="text" className="inputs" placeholder="Enter Your Name" />

        <input
          type="text"
          className="inputs"
          placeholder="Enter Your Username"
        />

        <input type="text" className="inputs" placeholder="Enter Your Email" />

        <input
          type="text"
          className="inputs"
          placeholder="Enter Your Mobile Number"
        />

        <input
          className="inputs"
          type="password"
          placeholder="Enter Your Password"
        />
      </form>

      <div style={{ justifyContent: "center", marginTop: "20px" }}>
        <button className="bt">
          <label
            style={{
              fontSize: 18,
              paddingLeft: "10px",
              fontWeight: "bold",
              paddingTop: "-5px",
            }}
          >
            Sign up
          </label>
        </button>
      </div>
    </div>
  );
}

export default Register;
