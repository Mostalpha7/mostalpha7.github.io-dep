import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Loader from '../../components/loader/Loader'
import Topbar from '../../components/topbar/Topbar'
import './contact.scss'
const Contact = props => {
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 1000)
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
            transition={{ duration: 0.65 }}
          >
            <Topbar menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
            <div className='contact'>
              <div className='wrapper'>
                <h1>Reach Out</h1>
                <div className='mt-5'></div>
                <p>
                  Interested in working together <br /> or just wanna say "Hi" ?
                  <br />
                  Feel free to contact me on project(s) and colaborations.
                </p>
                <div className='mt-5'></div>
                <div className='mt-5'></div>
                <a href='mailto:mostalpha7@gmail.com'>mostalpha7@gmail.com</a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  )
}

export default Contact
