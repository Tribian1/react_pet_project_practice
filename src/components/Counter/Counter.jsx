import React from 'react';
import {useState} from 'react';
import MyButton from '../UI/button/MyButton'
import './style.scss'

const Counter = function () {
    const [count, setCount] = useState(0);      

    function increment() {
        setCount(count + 1);   
    }
    function decrement() {
        setCount(count - 1);   
    }
    function reset() {
        setCount(count * 0);
    }
    function random() {
        setCount(Math.floor(Math.random(count) * 100) + 0);
    }
    
    return (
        <div className='counter'>
            <div>
                <h1 className='counter__tab'>{count}</h1>
            </div>
            <div>
                <MyButton className='counter__btn' onClick={increment}>Increment</MyButton>
                <MyButton className='counter__btn' onClick={decrement}>Decrement</MyButton>
                <MyButton className='counter__btn' onClick={random}>Random</MyButton>
                <MyButton className='counter__btn' onClick={reset}>Reset</MyButton>
            </div>
        </div>
    );
};

export default Counter;