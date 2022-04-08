import React, { useState } from 'react'
import { useCouter } from '../../hooks/useCouter';
import './effects.css'
import { Small } from './Small';

export const Memorize = () => {

    const { state: counter, increment } = useCouter(10);
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Counter: <Small value={counter} /> </h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={() => increment(1)}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-30"
                onClick={() => setShow(!show)}
            >
                show / hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
