import React, { useCallback } from 'react'
import './effects.css'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = React.useState(0);

    /* const increment = () => {
        setCounter(counter + 1);
    } */

    const increment = useCallback(() => {
        setCounter(c => c + 1);
    }, [setCounter])


    return (
        <div>
            <h1>useCallBack Hook {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    )
}
