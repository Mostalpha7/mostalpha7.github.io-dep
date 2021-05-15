import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Loader from '../../components/loader/Loader'
import Topbar from '../../components/topbar/Topbar'

const Intro = props => {
  const [loader, setLoader] = useState(false)
  const textRef = useRef()
  const startItype = () => {
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
  }
  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
      startItype()
    }, 2500)
  }, [])
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.65 }}
          >
            <Topbar menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />

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
                    <Link to='/about'>
                      <span className='contactMeBtn'>About Me.</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='right d-sm-none'>
                <motion.div
                  initial={{ opacity: 0, x: 120 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.68 }}
                >
                  <div className='imgContainer'>
                    <img src='assets/noimage.png' alt='' />
                  </div>
                </motion.div>
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
          </motion.div>
        </>
      )}
    </>
  )
}

export default Intro
