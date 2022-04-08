import React from 'react'
import { useCouter } from '../../hooks/useCouter'
import { useFetch } from '../../hooks/useFetch'
import './effects.css'

export const MultipleCustomHooks = () => {

    const { state: counter, increment } = useCouter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];
    console.log(loading, data);

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className='blockquote text-end'>
                            <p className='mb-0'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
            }

            <button className='btn btn-primary'
                onClick={() => increment(1)}
            >
                Siguiente Quote
            </button>


        </div>
    )
}
