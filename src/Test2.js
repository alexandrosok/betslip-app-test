import React, { useState } from 'react';

function Test() {
  const [value, setValue] = useState('');
    console.log(value)
  return (
    <input
      type="text"
      value={value}
      onChange={e => {
        setValue(e.target.value);
      }}
    />
  );
}

export default Test;
