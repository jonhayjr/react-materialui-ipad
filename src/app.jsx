import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

/*Import Components*/
import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';

const App = () => {
  return (
   <div className="App">
     <Header title="Haymaker, Inc."/>
     <Home/>
     <Footer/>
    </div>
  )
}
	

ReactDOM.render(<App />, document.getElementById('root'));
