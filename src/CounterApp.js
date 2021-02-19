import React, { useState } from "react";
import PropTypes from "prop-types";


const CounterApp = ({ value= 100  }) => {

    const [counter, setCounter] = useState( value );

    const handle = (e) => {
        setCounter(counter + 1);
    }

    const substractHandle = (e) => setCounter(counter - 1);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={ handle }>+1</button>
            <button onClick={ (e) => { setCounter( value ) } }>Reset</button>
            <button onClick={ substractHandle }>-1</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 10
}

export default CounterApp;

