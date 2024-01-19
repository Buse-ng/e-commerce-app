import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router} from 'react-router-dom';
import SiteRoute from './SiteRoute';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <SiteRoute/>
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
