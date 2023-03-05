import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


// this register hook here now 
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });


  // this hook is user already here 
  const [err, setError] = useState(null);




  // this hook is created as register user successful login and after that 
  // redirected to login page 
  const navigate = useNavigate();


  //  input your username email and password
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // axios npm package ( async ): it allows us to make our api request
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // The await operator is used to wait for a Promise and get its fulfillment value. 
      //It can only be used inside an async function or at the top level of a module
      await axios.post("/auth/register", inputs);
      navigate("/login");   //              this is redirected to login page
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do have an accout <Link to="/Login">Login Here</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
