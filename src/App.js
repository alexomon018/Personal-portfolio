import React from 'react'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import About from './About/About'
import { Switch, Route } from 'react-router-dom'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Testimonials from './Testimonials/Testimonials'
import NotFound from './NotFound/NotFound'

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/testimonials' exact component={Testimonials} />
        <Route path='*' component={NotFound} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
