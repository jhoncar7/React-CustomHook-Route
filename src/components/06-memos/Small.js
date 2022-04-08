import React, { memo } from 'react'

export const Small = memo(({ value }) => {

    console.log('Me estoy renderizando :(');

    return (
        <small>
            {value}
        </small>

    )
})
