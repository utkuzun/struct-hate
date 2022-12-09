import React, { useState } from 'react'
import './style.css'

const Header = () => {
  const [showMobile, setShowMobile] = useState(false)

  return (
    <div className='background'>
      <div className='header'>
        <div className='inner header'>
          <div className='logo container'>
            <h1>
              V<span>erlith</span>
            </h1>
            <a
              className='hamburger menu'
              onClick={() => {
                setShowMobile(!showMobile)
              }}
            >
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </a>

            {showMobile && (
              <ul className='mobile links'>
                <a>
                  <li>NFT</li>
                </a>
                <a>
                  <li>Whitepaper</li>
                </a>
                <a>
                  <li>Socials</li>
                </a>
                <a>
                  <li>HX13 Company</li>
                </a>
              </ul>
            )}
            <ul className='navigation'>
              <a>
                <li>NFT</li>
              </a>
              <a>
                <li>Whitepaper</li>
              </a>
              <a>
                <li>Socials</li>
              </a>
              <a>
                <li>HX13 Company</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      {
        <div className='secondheader'>
          <div className='startapp'>
            <div className='btn'>
              <a href='#'>Start App</a>
            </div>
            <div className='connect'>
              <div className='btn'>
                <a href='#'>Connect</a>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Header
