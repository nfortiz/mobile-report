import React from 'react'
import NatirumLogo from '../../assets/icons/NatirumLogo'

function Hero () {
  return (
    <section id='main-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 hero'>
            <h1 className='hero__title'>Reporte Móviles</h1>
            <h2 className='hero__subtitle'>
              <NatirumLogo />
            </h2>
            <p className='hero__description'>
              <span className='hero__description--author text-md'>Nixon Fernando Ortiz Suarez
              </span
              >
              <span className='hero__description--author text-md'>David Leonardo Avendaño
              </span
              >
            </p>
            <p>
        Natrium es una billetera de la criptomoneda Nano, de código
        abierto desarrollada en Flutter.
            </p>
          </div>
          <div className='col-6' />
        </div>

        <div className='row'>
          <article className='col-4 card'>
            <p className='card__title text-md'>
              <a
                href='https://natrium.io/assets/button-playstore-v2.svg'
                className=''
              >
          Play Store
              </a>
            </p>
            <p className='card__downloads'>
              <span className='card__downloads--number text-xl'>+ 10.000</span>
              <span className='card__downloads--starts text-base'>Downloads</span>
            </p>
          </article>
          <article className='col-4 card'>
            <p className='card__title text-md'>
              <a
                href='https://apps.apple.com/us/app/natrium/id1451425707?ls=1'
                className=''
              >
          App Store
              </a>
            </p>
            <p className='card__downloads'>
              <span className='card__downloads--number text-xl'>5.0 out 5</span>
              <span className='card__downloads--starts text-base'>Calification
              </span
              >
            </p>
          </article>
          <article className='col-4 card'>
            <p className='card__title text-md'>
              <a
                href='https://github.com/appditto/natrium_wallet_flutter'
                className=''
              >
          GitHub
              </a>
            </p>
            <p className='card__downloads'>
              <span className='card__downloads--number text-xl'>16</span>
              <span className='card__downloads--starts text-base'>Releases</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
export default Hero
