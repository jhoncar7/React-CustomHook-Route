import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCouter } from '../../hooks/useCouter';
import './effects.css'


export const MemoHook = () => {

    const { state: counter, increment } = useCouter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p>{memoProcesoPesado}</p>

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
