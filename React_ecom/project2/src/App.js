import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products'
import Footer from './components/Footer/Footer'



class App extends React.Component {
  render() {
    return(
      <div>
      <Navbar />
        <Products/>
      <Footer />
      </div>
    )
  }
}

export default App;
