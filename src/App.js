import { useState } from 'react'
import {
  Link,
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'

// pages
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'

// Modules
import Topbar from './components/topbar/Topbar'
import Menu from './components/menu/Menu'

import './app.scss'

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
            <div className='useMainBg'>
              <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <About />
            </div>
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  )
}

export default App
