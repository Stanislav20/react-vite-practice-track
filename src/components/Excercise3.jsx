import { useState } from 'react';

const Excercise3 = () => {
  const [password, setPassword] = useState('');

  let correctPassword = password.match(/[a-zA-Z0-9]/g) || []

  return (
    <div>
      <label htmlFor="password">Password</label>
      <input id="password" onChange={(e) => setPassword(e.target.value)} />
      {password !== '' && correctPassword.length === 0 && <div>Error, no character 🙁</div> }
    </div>
  );
};

export default Excercise3