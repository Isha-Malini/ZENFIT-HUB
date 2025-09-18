import React from 'react';
import './Auth.css';

const SignIn = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sign In submitted!');
    onClose();
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
        <button type="button" onClick={onClose} className="link-btn">Back</button>
      </form>
    </div>
  );
};

export default SignIn;