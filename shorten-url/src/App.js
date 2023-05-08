import logo from './logo.svg';
import './App.css';
import Head from './components/head';
import MainContent from './components/MainContent'
import Background from './Background';
import History from './components/History';
import {BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <Background/>
    
    <Router>
    <Head />
    <Routes>
    <Route path='/' Component={MainContent}/>
    <Route path='/history' Component={History}/>
    </Routes>
      </Router>
      </>
  );
}

export default App;
