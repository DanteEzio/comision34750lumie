import { useState } from 'react'
import Title from '../Title/Title'

const Counter = ({ children, render }) => {
    const initial = 10
    const [count, setCount] = useState(initial)
    console.log(children)
    const decrement = () => {
        // accu = accu - 1
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        // accu = accu + 1
        setCount(count + 1)
    }

    const reset = () => {
        setCount('hola')
    }

    return (
        <div>
            <Title title="Esto es dentro de Counter" />
            {children}
            <h1>{count}</h1>
            <button onClick={decrement}>Restar</button>
            <button onClick={increment}>Sumar</button>
            <button onClick={reset}>Reset</button>
            {render}
        </div>
    )
}

export default Counter