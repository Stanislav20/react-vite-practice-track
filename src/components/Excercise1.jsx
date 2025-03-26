import { useState } from 'react';

const Excercise1 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <textarea
        onChange={(e) => {
          setCount(e.target.value.length);
        }}
      />
      <div style={{ backgroundColor: count > 20 ? 'red' : '' }}>{count}</div>
    </>
  );
};

export default Excercise1;
