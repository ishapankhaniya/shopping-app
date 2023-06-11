import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Input from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
// import { useNavigate } from "react-router-dom";
const Login = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    pass: "",
  });

  const changedata = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleclick = () => {
    console.log(data);
    if (data.email === "isha@gmail.com" && data.pass === "isha") {
      Navigate("/product");
      console.log("succes");
    }
  };
  return (
    <div>
      <Header />
      <Form>
        <div className="login-main">
          <br />
          <h3 className="text">LOGIN PAGE</h3>
          <br />
          <input
            type="text"
            placeholder="Enter Email.."
            name="email"
            onChange={(e) => changedata(e)}
            className="w-50 rounded-pill p-2"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter Password.."
            name="pass"
            className="w-50 rounded-pill p-2 "
            onChange={(e) => changedata(e)}
          />
          <br />
          <br />

          <button
            type="button"
            className="btn btn-secondary rounded-pill w-25 p-2"
            onClick={handleclick}
          >
            LOGIN
          </button>
          <br />
          <br />
        </div>
      </Form>
    </div>
  );
};
export default Login;
