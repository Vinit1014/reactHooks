import React, {useMemo, useEffect, useCallback} from 'react'
import users_data from '../users_data.json';
const MyComponent = (props) => {
    const totalEntries = useMemo(()=> getLen(users_data), []);

    const handleOnWindowLoad = useCallback(() => {
        console.log("Window loaded");
    })
    useEffect(() => {
        window.addEventListener("load", handleOnWindowLoad);
        return () => {
            window.removeEventListener("load", handleOnWindowLoad);
        }
    }, [])

    function getLen(arr){
        console.log("I am calculating...");
        
        let count = 0;
        for(let i = 0; i<arr.length; i++){
            count++;
        }
        return count;
    }

    return (
        <div>
            <h2>Hi I am MyComponent</h2>
            <p>Total entries are {totalEntries}</p>
            <h3>Count {props.state}</h3>
        </div>
    )
}

export default MyComponent