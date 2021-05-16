import './menu.scss'
import { Link } from 'react-router-dom'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import HomeWorkIcon from '@material-ui/icons/HomeWork'
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'menu ' + (menuOpen && 'active22')}>
      <div
        className={'left ' + (menuOpen && 'active')}
        onClick={() => {
          menuOpen ? setMenuOpen(false) : setMenuOpen(true)
        }}
      ></div>
      <div className={'right ' + (menuOpen && 'active')}>
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
          <div>
            <ul>
              <li>
                <a onClick={() => setMenuOpen(false)}>
                  <Link to='/'>Home</Link>
                </a>
              </li>
              <li>
                <a onClick={() => setMenuOpen(false)}>
                  <Link to='/about'>About me</Link>
                </a>
              </li>
              <li>
                <a onClick={() => setMenuOpen(false)}>
                  <Link to='/portfolio'>My works</Link>
                </a>
              </li>
              <li>
                <a onClick={() => setMenuOpen(false)}>
                  <Link to='/contact'>React Out</Link>
                </a>
              </li>
            </ul>
          </div>
          <div className='d-sm-none'>
            <div>
              <h2>Get in touch</h2>
              <div className='mt-5'></div>
              <div className='mt-5'>
                <a href='mailto:mostalpha7@gmail.com'>
                  <MailOutlineIcon className='icon' />
                  <span className='ml-3'>mostalpha7@gmail.com</span>
                </a>
              </div>
              <div className='mt-5'>
                <a href='tel:+2348149607707'>
                  <PhonelinkRingIcon className='icon' />
                  <span className='ml-3'>+234 814 960 7707</span>
                </a>
              </div>
              <div className='mt-5'>
                <a>
                  <HomeWorkIcon className='icon' />
                  <span className='ml-3'>
                    16, Adeyemi Street,
                    <br /> Lagos Nigeria
                  </span>
                </a>
              </div>
              <div className='mt-5 wrapperSm'>
                <div className='mt-5 itemCountSm'>
                  <a href='https://github.com/mostalpha7/' target='_blanck'>
                    <GitHubIcon className='icon' />
                  </a>

                  <a href='https://twitter.com/mostalpha7' target='_blanck'>
                    <TwitterIcon className='icon' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/mustapha-abdulmujeeb-32680b195/'
                    target='_blanck'
                  >
                    <LinkedInIcon className='icon' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='mt-5'>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
