import React, { Component } from 'react'
import Content from './components/Content';
import Footer from './components/Footer'
import Navbar from './components/Navbar';





class App extends Component {

    render() {
        return (
            <div>
                
                <Navbar />

                <Content />
                
                <Footer/>
            </div>
        )
    }
}


export default App;