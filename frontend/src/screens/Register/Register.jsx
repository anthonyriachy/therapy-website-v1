import React, { useState } from 'react';
// import axios from 'axios';
import styles from './Register.module.css'
const Register = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   role: 'client',
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post('http://localhost:5000/api/auth/register', formData);
  //     alert('Registration successful');
  //   } catch (error) {
  //     alert(error.response.data.error);
  //   }
  // };

  return (
    <div className={styles.container}>
    <div className={styles.form_box}>
      <h1 id={styles.title}>Sign Up</h1>
      <form>
        <div className={styles.input_group}>
          {/* <!-- <p id="nameError" style="text-align:start, color:'red'"></p> --> */}
          <div className={styles.input_field} id={styles.nameField}>
            <i className="fa-solid fa-user"></i>
            <input type="text" placeholder="Name" id={styles.inputname} />
          </div>
          <div className={styles.input_field} id={styles.emailField}>
            <i className="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Email" id={styles.inputemail} />
          </div>
          <div className={styles.input_field} id={styles.passwordField}>
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              id="inputpassword"
            />
          </div>
          <div className={styles.input_field} id="confirmField">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Confirm Password"
              id="inputconfirm"
            />
          </div>
          <p>Lost password <a href="#">Click Here!</a></p>
        </div>
        <div className={styles.btn_field}>
          <button type="button" id="signupBtn">Sign up</button>
          <button type="button" id="signinBtn" className="disable">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Register;
