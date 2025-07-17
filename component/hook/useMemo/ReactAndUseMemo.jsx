import { useState, useMemo } from 'react'
import { Count } from './Count.jsx'
export const ReactAndUseMemo = () => {
    const [count, setCount] = useState(0);
    const data = useMemo(() => ({
        name: 'inzi',
        age: 23
    }), []);

    return (
        <>
            <div>
                <p>
                    Parent Count:{count}
                </p>
                <button onClick={() => setCount(count + 1)}>Incr</button>
            </div>
            <Count data={data} />
        </>
    )
}