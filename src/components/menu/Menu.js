import './menu.scss'
const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <div className='hambuggerContainer'>
        <div></div>
        <div
          className='hambugger'
          // menuOpen ? () => setMenuOpen(false) : () => setMenuOpen(true)
          onClick={() => {
            menuOpen ? setMenuOpen(false) : setMenuOpen(true)
            console.log(menuOpen)
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
            <a href='#intro'>Home</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#works'>Works</a>
          </li>
          <li>
            <a href='#testimonial'>Testimonials</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}

export default Menu
