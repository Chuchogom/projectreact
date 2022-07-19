import './counter.css';
import React, { useState } from 'react';

export const Counter = ({initial, stock,onAdd}) => {

    
    const[count,setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

  return (
    <div>
        <div className='counter'>
        <button disabled={count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={increase}>+</button>
        <div>
            <button disabled = {stock <= 0} onClick ={() => onAdd(count)}>Add to Cart</button>
        </div>
    </div>
    </div>
  )
}

export default Counter
