import React from 'react';
import './App.css';
import { formatDistance } from 'date-fns';

const startDate = new Date(2020, 0, 8, 2, 46);

function App() {
    return (
        <div>
            <p>Hi I'm Mike.</p>
            <p>I am finding the way to relocate to Berlin: <span>{
                formatDistance(
                    Date.now(),
                    startDate,
                    {
                        addSuffix: true,
                        includeSeconds: true
                    }
                )
            }</span></p>

            <p>Do you have something for me? Write me: <a href="https://twitter.com/seminioni">twitter.com/seminioni</a></p>
            <p>Github: <a href="https://github.com/seminioni">github.com/seminioni</a></p>
        </div>
    );
}

export default App;
