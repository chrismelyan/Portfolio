import React from 'react';
import './App.css';
import Header from "./header/Header";
import About from "./about/About";
import Skills from "./skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <About/>
            <Skills/>
        </div>
    );
}

export default App;
