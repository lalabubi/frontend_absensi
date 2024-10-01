import React, { useRef, useState } from 'react';
import './loginStyle.css'; // Pastikan file ini ada dengan gaya yang relevan
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';
import client from '../../routes/Client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [loginErrors, setLoginErrors] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const inputEmail = useRef();
  const inputPassword = useRef();
  const nav = useNavigate();

  const fireConfetti = () => {
    
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;

    client.post('auth/login', { email, password }).then(({ data }) => {
      // console.log(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('name', data.user.name);
      localStorage.setItem('email', data.user.email);
      localStorage.setItem('role', data.user.siswa_id !== null ? 'siswa': 'guru');
      const UserData = data.user
      console.log(UserData);
      
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.7 },
      });

      
      if(UserData.siswa_id !== null && UserData.guru_id === null) {
        nav('siswa')
      } else if(UserData.siswa_id === null && UserData.guru_id !== null) {
        nav('admin')
      } else {
        alert('role unknown')
      }
    }).catch((error) => {
      console.log("error", error);
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <div className="body">
      <div className="container">
        <div className="form-container login-container">
          <form className="form-lg" onSubmit={handleLoginSubmit}>
            <h1 className='header'>Login</h1>
            <div className={`form-control2`}>
              <input type="email" ref={inputEmail} placeholder="Email" />
            </div>
            <div className={`form-control2`}>
              <input
                type={passwordType}
                ref={inputPassword}
                placeholder="Password"
              />
              <button type="button" onClick={togglePasswordVisibility} className="toggle-password-btn">
                <FontAwesomeIcon icon={passwordType === "password" ? faEye : faEyeSlash} />
              </button>
            </div>  
            <button type="submit" className='button-login' >Masuk</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="title">
                Website Presensi
              </h1>
              <p className='text'>
                Selamat datang di sistem presensi kami. Silakan masuk untuk melanjutkan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
