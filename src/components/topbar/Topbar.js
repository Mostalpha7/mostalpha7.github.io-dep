import './topbar.scss'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Link } from 'react-router-dom'

const Topbar = ({ setMenuOpen, menuOpen }) => {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a>
            <Link to='/' className='logo'>
              Mustapha <br />
              A. Abiodun
            </Link>
          </a>
          <div className='itemCount d-sm-none'>
            <a href='https://github.com/mostalpha7/' target='_blanck'>
              <GitHubIcon className='icon' />
              <span className=''>Github</span>
            </a>
          </div>
          <div className='itemCount d-sm-none'>
            <a href='https://twitter.com/mostalpha7' target='_blanck'>
              <TwitterIcon className='icon' />
              <span className=''>Twitter</span>
            </a>
          </div>
          <div className='itemCount d-sm-none'>
            <a
              href='https://www.linkedin.com/in/mustapha-abdulmujeeb-32680b195/'
              target='_blanck'
            >
              <LinkedInIcon className='icon' />
              <span className=''>Linkedin</span>
            </a>
          </div>
        </div>
        <div className='right'>
          <div
            className='hambugger'
            onClick={
              menuOpen ? () => setMenuOpen(false) : () => setMenuOpen(true)
            }
          >
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
