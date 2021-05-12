import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Intro = () => {
  const textRef = useRef()
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed: 45,
      strings: [
        'awesome wordpress websites',
        'front end  applications',
        'back end applications',
        'mobile applications'
      ]
    })
  }, [])
  return (
    <div>
      <div className='intro'>
        <div className='left'>
          <div className='wrapper'>
            <div></div>
            <h2>Hello World!</h2>
            <div>
              <h1>
                I am <br />
                Mustapha <br /> A. Abiodun
              </h1>
              <p>
                I build <span ref={textRef}></span>
              </p>
            </div>
            <div>
              <span className='contactMeBtn'>Hire Me.</span>
            </div>
          </div>
        </div>

        <div className='right d-sm-none'>
          <div className='imgContainer'>
            {/* <img src='assets/man.png' alt='' /> */}
            <img src='assets/mostalpha7.png' alt='' />
          </div>
        </div>
      </div>

      <div className='intro mt-5'>
        <div>
          <div className='d-sm-true mt-3 wrapperSm'>
            <div className='itemCountSm'>
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
  )
}

export default Intro
