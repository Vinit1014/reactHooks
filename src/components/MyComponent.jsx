import React from 'react'
import users_data from '../users_data.json';
const MyComponent = (props) => {
    const totalEntries = users_data.length;
    window.addEventListener("load", () => console.log("Loaded"));
    return (
        <div>
            <h2>Hi I am MyComponent</h2>
            <p>Total entries are {totalEntries}</p>
            <h3>Count {props.state}</h3>
        </div>
    )
}

export default MyComponent