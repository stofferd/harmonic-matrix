import React from 'react';
import './App.css';
import Buttons from './Components/Buttons';

function App() {
    return (
        <div className="App">
            <Buttons noteCount={25} />
        </div>
    );
}

export default App;
