import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const LandingPage = ({ onComplete }) => {
  const [form, setForm] = useState(null); // null | 'signin' | 'signup'

  return (
    <div>
      {!form && (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <h1>Welcome! Please Sign In or Sign Up</h1>
          <button onClick={() => setForm('signin')}>Sign In</button>
          <button onClick={() => setForm('signup')}>Sign Up</button>
        </div>
      )}

      {form === 'signin' && <SignIn onClose={() => onComplete()} />}
      {form === 'signup' && <SignUp onClose={() => onComplete()} />}
    </div>
  );
};

export default LandingPage;