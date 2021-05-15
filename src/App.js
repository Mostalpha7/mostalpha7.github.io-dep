import { useState } from 'react'
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'

import './app.scss'
import Menu from './components/menu/Menu'
import Intro from './pages/intro/Intro'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App () {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='app'>
      <Router>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Switch>
          <Route path='/' exact>
            <div className='viewHeight'>
              <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
          </Route>
          <Route path='/about'>
            <div>
              <About menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
          </Route>
          <Route path='/contact'>
            <Contact menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  )
}

export default App
