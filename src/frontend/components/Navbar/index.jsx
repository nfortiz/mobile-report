import React from 'react'
import { Nav } from './styles'

function Navbar () {
  return (
    <Nav>
      <ul className='navbar-nav'>
        <li className='logo'>
          <a href='#main-section' className='nav-link'>
            <span className='link-text logo-text'>Móviles</span>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fad'
              data-icon='angle-double-right'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              className='svg-inline--fa fa-angle-double-right fa-w-14 fa-5x'
            >
              <g className='fa-group'>
                <path
                  fill='currentColor'
                  d='M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z'
                  className='fa-secondary'
                />
                <path
                  fill='currentColor'
                  d='M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z'
                  className='fa-primary'
                />
              </g>
            </svg>
          </a>
        </li>

        <li className='nav-item'>
          <a href='#analysis' className='nav-link'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='wifi'
              className='svg-inline--fa fa-wifi fa-w-20'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 512'
            >
              <path
                className='fa-secondary'
                fill='currentColor'
                d='M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z'
              />
            </svg>
            <span className='link-text'>Análisis</span>
          </a>
        </li>

        <li className='nav-item'>
          <a href='#feature' className='nav-link'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fad'
              data-icon='alien-monster'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
              className='svg-inline--fa fa-alien-monster fa-w-18 fa-9x'
            >
              <g className='fa-group'>
                <path
                  fill='currentColor'
                  d='M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z'
                  className='fa-secondary'
                />
                <path
                  fill='currentColor'
                  d='M160,320h64V224H160Zm192-96v96h64V224Z'
                  className='fa-primary'
                />
              </g>
            </svg>
            <span className='link-text'>Features</span>
          </a>
        </li>

        <li className='nav-item'>
          <a href='#design' className='nav-link'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fad'
              data-icon='space-station-moon-alt'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x'
            >
              <g className='fa-group'>
                <path
                  fill='currentColor'
                  d='M501.70312,224H448V160H368V96h48V66.67383A246.86934,246.86934,0,0,0,256,8C119.03125,8,8,119.0332,8,256a250.017,250.017,0,0,0,1.72656,28.26562C81.19531,306.76953,165.47656,320,256,320s174.80469-13.23047,246.27344-35.73438A250.017,250.017,0,0,0,504,256,248.44936,248.44936,0,0,0,501.70312,224ZM192,240a80,80,0,1,1,80-80A80.00021,80.00021,0,0,1,192,240ZM384,343.13867A940.33806,940.33806,0,0,1,256,352c-87.34375,0-168.71094-11.46094-239.28906-31.73633C45.05859,426.01953,141.29688,504,256,504a247.45808,247.45808,0,0,0,192-91.0918V384H384Z'
                  className='fa-secondary'
                />
                <path
                  fill='currentColor'
                  d='M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z'
                  className='fa-primary'
                />
              </g>
            </svg>
            <span className='link-text'>Design</span>
          </a>
        </li>

        <li className='nav-item'>
          <a href='#performance' className='nav-link'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fad'
              data-icon='space-shuttle'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 512'
              className='svg-inline--fa fa-space-shuttle fa-w-20 fa-5x'
            >
              <g className='fa-group'>
                <path
                  fill='currentColor'
                  d='M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z'
                  className='fa-secondary'
                />
                <path
                  fill='currentColor'
                  d='M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z'
                  className='fa-primary'
                />
              </g>
            </svg>
            <span className='link-text'>Desempeño</span>
          </a>
        </li>

        <li className='nav-item'>
          <a href='#' className='nav-link'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='question'
              className='svg-inline--fa fa-question fa-w-12'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
            >
              <path
                className='fa-secondary'
                fill='currentColor'
                d='M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z'
              />
            </svg>
            <span className='link-text'>Aliens</span>
          </a>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar
