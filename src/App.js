import React from 'react'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import About from './pages/About'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch path='/'>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
