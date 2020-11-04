import React, { useState, useMemo } from 'react';

export default function Counter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    /* useMemo is used to prevent unnecessary re-render of the component
    when properties other than 'counterOne' are chaging */
    const isCounterOneEven = useMemo(() => {
        return counterOne % 2 === 0;
    }, [counterOne]);

    return (
        <React.Fragment>
            <button onClick = { incrementCounterOne }>Count One: { counterOne } { isCounterOneEven ? 'Even' : 'Odd' }</button>
            <button onClick = { incrementCounterTwo }>Count Two: { counterTwo }</button>
        </React.Fragment>
    );
}
