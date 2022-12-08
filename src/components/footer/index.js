import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTelegram,
  faTwitter,
  faDiscord,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import './style.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footer-col'>
            <ul>
              <li>
                <a href='#'>NFT</a>
              </li>
              <li>
                <a href='#'>privacy policy</a>
              </li>
              <li>
                <a href='#'>Terms of use</a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>HX13 Company</h4>
            <ul>
              <li>
                <a href='#'>FAQ</a>
              </li>
              <li>
                <a href='#'>Governance</a>
              </li>
              <li>
                <a href='#'>HC Token</a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Socials</h4>
            <div className='social-links'>
              <a href='#'>
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a href='#'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href='#'>
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a href='#'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
