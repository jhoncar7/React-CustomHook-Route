import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCouter } from '../../hooks/useCouter'
import { useFetch } from '../../hooks/useFetch'
import './effects.css'

export const LayoutEffect = () => {

    const { state: counter, increment } = useCouter(1);
    const [boxSize, setBoxSize] = useState()

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className='blockquote text-end'>
                <p
                    className='mb-0'
                    ref={pTag}
                >{quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null,5)}
            </pre>

            <button className='btn btn-primary'
                onClick={() => increment(1)}
            >
                Siguiente Quote
            </button>


        </div>
    )
}
