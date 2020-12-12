import React from 'react'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import About from './About/About'
import { Switch, Route, Redirect } from 'react-router-dom'
import Projects from './Projcets/Projects'
import Contact from './Contact/Contact'

function App() {
  return (
    <div className='app'>
      <Header />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/contact' exact component={Contact} />
        <Route render={() => <Redirect to='/' />} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
