import "./nav.css";

function Login() {
  
    return (
        <div className="login">
          <div className="head">
            <label>Login</label>
          </div>
          <form>
            <input
              type="email"
              className="inputs"
              placeholder="Email or Username"
            />
    
            <input className="inputs" type="password" placeholder="Password" />
          </form>
    
          <div  style={{ justifyContent: "center", marginTop: "20px" }}>
            <button className="bt">
              <label
                style={{
                  fontSize: 18,
                  paddingLeft: "10px",
                  fontWeight: "bold",
                  paddingTop: "-5px",
                }}
              >
                Login
              </label>
            </button>
          </div>
        </div>
      );
}

export default Login;
