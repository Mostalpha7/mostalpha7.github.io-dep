import './menu.scss'
import { Link } from 'react-router-dom'
const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <div className='hambuggerContainer'>
        <div></div>
        <div
          className='hambugger'
          onClick={() => {
            menuOpen ? setMenuOpen(false) : setMenuOpen(true)
          }}
        >
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
      <div className='menuContainer'>
        <ul>
          <li>
            <a onClick={() => setMenuOpen(false)}>
              <Link to='/'>Home</Link>
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)}>
              <Link to='/about'>About</Link>
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)}>
              <Link to='/portfolio'>Portfolio</Link>
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)}>
              <Link to='/react-out'>React Out</Link>
            </a>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}

export default Menu
