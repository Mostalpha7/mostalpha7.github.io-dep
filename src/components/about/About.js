import './about.scss'
const About = () => {
  return (
    <div className='about'>
      <div className='wrapper'>
        <h1 className='mt-5 first'>
          <span className='paintYellow'>Hi, </span>I'm Mustapha A.
          <br />
          Abiodun <span className='paintYellow'>a </span> Website
          <span className='paintYellow'> Dev</span> & <br /> Software Engineer
          from <span className='paintYellow'> Earth.</span>
        </h1>
        <p className='mt-10'>
          My purpose is to use my skill, creativity and enthusiasm to support
          and inspire others to freely express their talents in a loving and
          harmonious way. I'm very passionate about contributing to the
          productivity of a value driven organization.
        </p>
        <div>
          <div className='languages'>
            <h2 className='mt-5'>Main Languages</h2>
            <div className='mainLanguages'>
              <div className='imgContainer'>
                <img src='assets/languages/main/javascript.png' alt='' />
              </div>
              <div className='imgContainer'>
                <img src='assets/languages/main/dart.png' alt='' />
              </div>
            </div>
            <h2 className='mt-5'>Frontend Lang</h2>
            <div className='mainLanguages'>
              <div className='imgContainer'>
                <img src='assets/languages/frontend/html5.png' alt='' />
              </div>
              <div className='imgContainer'>
                <img src='assets/languages/frontend/css3.png' alt='' />
              </div>
              <div className='imgContainer'>
                <img src='assets/languages/frontend/react.png' alt='' />
              </div>
              <div className='imgContainer'>
                <img src='assets/languages/frontend/vue.png' alt='' />
              </div>
              <div className='imgContainer'>
                <img src='assets/languages/frontend/next.png' alt='' />
              </div>
            </div>

            <h2 className='mt-5'>Backend Lang & Database</h2>
            <div className='mainLanguages'>
              <div className='imgContainer'>
                <img src='assets/languages/backend/nodejs.png' alt='' />
              </div>
              <div className='imgContainer'>
                <img src='assets/languages/backend/express.png' alt='' />
              </div>
              <div className='imgContainer'>
                <img src='assets/languages/backend/mongo.png' alt='' />
              </div>
              <div className='imgContainer'>
                <img src='assets/languages/backend/postgres.png' alt='' />
              </div>
              <div className='imgContainer'>
                <img src='assets/languages/backend/mysql.png' alt='' />
              </div>
            </div>

            <h2 className='mt-5'>Mobile App Lang</h2>
            <div className='mainLanguages'>
              <div className='imgContainer'>
                <img src='assets/languages/mobile/flutter.png' alt='' />
              </div>
            </div>
            <h2 className='mt-5'>Other Skills</h2>
            <div className='mainLanguages'>
              <div className='imgContainer'>
                <img src='assets/languages/others/github.png' alt='' />
              </div>
              <div className='imgContainer'>
                <img src='assets/languages/others/wordpress.png' alt='' />
              </div>
              <div className='imgContainer'>
                <img src='assets/languages/others/corel.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
