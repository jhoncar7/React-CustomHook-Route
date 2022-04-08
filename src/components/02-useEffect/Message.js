import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const { x, y } = coords;

    useEffect(() => {
        console.log('Componente montado');

        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y };
            setCoords(coors);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])


    return (
        <div>
            <h3>Hola, soy Goku</h3>
            <p>
                {`x: ${x} y: ${y}`}
            </p>
        </div>
    )
}