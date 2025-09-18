import React from 'react';
import './Auth.css';

const SignUp = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sign Up submitted!');
    onClose();
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <button type="button" onClick={onClose} className="link-btn">Back</button>
      </form>
    </div>
  );
};

export default SignUp;