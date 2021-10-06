import React, {useState, useEffect} from 'react'

const CounterUpdate = ({ getCounter }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() =>{
        setCounter(getCounter())
        console.log("updating counter")
    }, [getCounter])
    
    return (
        counter
    )
}

export default CounterUpdate
