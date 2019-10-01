import React, { useState } from 'react';

function TestInput(props) {
    const [value, setValue] = useState('');


    return (
        <input className='test' type={props.name} value={value} onChange={e => {setValue(e.target.value)}} />
    )
}

export default TestInput