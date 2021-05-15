import { useState } from 'react'
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'

import Contact from './components/contact/Contact'

import Portfolio from './components/portfolio/Portfolio'
import Topbar from './components/topbar/Topbar'
// import Works from './components/works/Works'
import './app.scss'
import Menu from './components/menu/Menu'
import Intro from './components/intro/Intro'
import About from './components/about/About'

function App () {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='app'>
      <Router>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Switch>
          <Route path='/' exact>
            <div className='viewHeight'>
              <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <Intro />
            </div>
          </Route>
          <Route path='/about'>
            <div className>
              <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <About />
            </div>
          </Route>
          <Route path='/contact'>
            <div className>
              <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <Contact />
            </div>
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  )
}

export default App
