import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import './effects.css'

export const ReallExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>ReallExampleRef</h1>
            <hr />

            {
                show && <MultipleCustomHooks />
            }

            <button
                className="btn btn-primary mt-5"
                onClick={() => setShow(!show)}
            >
                Show / Hide
            </button>

        </div>
    )
}
