import React, { useState } from 'react'
import logo from './images/logo.svg'
import menu from './images/icon-menu.svg'
import './App.css'
import mobileHero from './images/image-hero-mobile.png'
import desktopHero from './images/image-hero-desktop.png'
import audiophile from './images/client-audiophile.svg'
import databiz from './images/client-databiz.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'
import close from './images/icon-close-menu.svg'
import iconDown from './images/icon-arrow-down.svg'
import iconUp from './images/icon-arrow-up.svg'
import reminders from './images/icon-reminders.svg'
import planning from './images/icon-planning.svg'
import todo from './images/icon-todo.svg'
import calendar from './images/icon-calendar.svg'
const clients = [databiz, audiophile, meet, maker]
const features = [
  { icon: todo, name: 'Todo' },
  { icon: calendar, name: 'Calendar' },
  { icon: reminders, name: 'Reminders' },
  { icon: planning, name: 'Planning' },
]
const company = ['History', 'Our Team', 'Blog']
const Navigation = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  return (
    <div className='links-btns'>
      <div className='lists'>
        <div className='features link'>
          <p>Features</p>
          <div
            className='up-down'
            onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
          >
            <img
              className={`down ${isFeaturesOpen ? 'rotate' : ''}`}
              src={iconDown}
              alt=''
            />
          </div>
        </div>
        {isFeaturesOpen && (
          <div className='features-dropdown'>
            {features.map((feature, index) => {
              return (
                <div key={index} className='features-item'>
                  <img src={feature.icon} alt={feature.name} />
                  <p>{feature.name}</p>
                </div>
              )
            })}
          </div>
        )}
        <div className='link company'>
          <p>Company</p>
          <div
            className='up-down'
            onClick={() => setIsCompanyOpen(!isCompanyOpen)}
          >
            <img
              className={`down ${isCompanyOpen ? 'rotate' : ''}`}
              src={iconDown}
              alt=''
            />
          </div>
        </div>
        {isCompanyOpen && (
          <div className='company-dropdown'>
            {company.map((company, index) => {
              return (
                <div key={index} className='company-item'>
                  <p>{company}</p>
                </div>
              )
            })}
          </div>
        )}
        <p className='link'>Careers</p>
        <p className='link'>About</p>
      </div>
      <div className='login-register'>
        <button className='login'>login</button>
        <button className='register'>register</button>
      </div>
    </div>
  )
}
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
      {isMenuOpen && (
        <div className='overlay'>
          <div className='menu'>
            <img
              className='close'
              src={close}
              alt=''
              onClick={() => setIsMenuOpen(false)}
            />
            <Navigation />
          </div>
        </div>
      )}
      <nav className='nav-bar'>
        <div className='nav'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='nav-items'>
            <Navigation />
          </div>
        </div>
        <button
          className='menu-btn'
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
            console.log('btn clicked' + isMenuOpen)
          }}
        >
          <img src={menu} alt='menu' />
        </button>
      </nav>
      <div className='content'>
        <div className='mobile-hero'>
          <img src={mobileHero} alt='mobile-hero' />
        </div>
        <div className='desc'>
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.{' '}
          </p>
          <button className='desc-btn'>Learn more</button>
          <div className='clients'>
            {clients.map((client, index) => {
              return <img key={index} src={client} alt={`client${index}`} />
            })}
          </div>
        </div>
        <div className='desktop-hero'>
          <img src={desktopHero} alt='desktop-hero' />
        </div>
      </div>
    </div>
  )
}

export default App
