import { useState } from 'react';

const Excercise2 = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="password">Password</label>
      <input id="password" onChange={(e) => setPassword(e.target.value)} />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />

      {/* {(password !== confirmPassword)  
				? <div>Error</div>
				: null
			}  */}

      {password !== confirmPassword && confirmPassword !== '' && <div>Error</div>}
    </div>
  );
};

export default Excercise2;
