import React from 'react';
import './App.css';
import Header from "./header/Header";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
