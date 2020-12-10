import React from 'react'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import About from './About/About'
import { Switch, Route, Router } from 'react-router-dom'
import Projects from './Projcets/Projects'

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/projects' exact component={Projects} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
