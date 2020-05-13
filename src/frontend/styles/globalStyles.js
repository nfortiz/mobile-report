import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
    --text-base-size: 16px;
    --text-scale-ratio: 1.2;
    --text-xs: calc((1em / var(--text-scale-ratio)) / var(--text-scale-ratio));
    --text-sm: calc(var(--text-xs) * var(--text-scale-ratio));
    --text-md: calc(
      var(--text-sm) * var(--text-scale-ratio) * var(--text-scale-ratio)
    );
    --text-lg: calc(var(--text-md) * var(--text-scale-ratio));
    --text-xl: calc(var(--text-lg) * var(--text-scale-ratio));
    --text-xxl: calc(var(--text-xl) * var(--text-scale-ratio));
  
    --font-family: -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  
    --space-unit: 16px;
    --space-xs: calc(0.5 * var(--space-unit));
    --space-sm: calc(0.75 * var(--space-unit));
    --space-md: calc(1.25 * var(--space-unit));
  
    --background-color: #232946;
    --headline-color: #fffffe;
    --paragraph-color: #d0d9f4;
    --button-color: #eebbc3;
    --button-text: #232946;
    --link-color: #eebbc3;
  
    --card-background-color: #fffffe;
    --card-highlight: #d4939d;
    --card-paragraph: #232946;
  
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
    --transition-speed: 600ms;
  }
    
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
  
  h1,
  .text-xxl {
    font-size: var(--text-xxl, 2.074em);
    font-family: var(--font-family);
  }
  h2,
  .text-xl {
    font-size: var(--text-xl, 1.728em);
    font-family: var(--font-family);
  }
  h3,
  .text-lg {
    font-size: var(--text-lg, 1.44em);
    font-family: var(--font-family);
  }
  h4,
  .text-md {
    font-size: var(--text-md, 1.2em);
    font-family: var(--font-family);
  }
  p,
  .text-base {
    font-size: 1em;
    font-family: var(--font-family);
  }
  small,
  .text-sm {
    font-size: var(--text-sm, 0.833em);
    font-family: var(--font-family);
  }
  .text-xs {
    font-size: var(--text-xs, 0.694em);
    font-family: var(--font-family);
  }
  
  .margin-xs {
    margin: var(--space-xs);
  }
  .margin-sm {
    margin: var(--space-sm);
  }
  .margin-md {
    margin: var(--space-md);
  }
  
  .padding-xs {
    padding: var(--space-xs);
  }
  .padding-sm {
    padding: var(--space-sm);
  }
  .padding-md {
    padding: var(--space-md);
  }
  
  h1,
  h2,
  h3 {
    text-transform: capitalize;
    color: var(--headline-color);
  }
  
  p {
    color: var(--paragraph-color);
  }
  
  a {
    font-weight: 600;
    color: var(--link-color);
  }
  
  a:hover {
    scale: (1.1);
  }
  
  /*-- Layout  --*/
  .container > .row > .col-12,
  .container > .row > .col-11,
  .container > .row > .col-10,
  .container > .row > .col-9,
  .container > .row > .col-8,
  .container > .row > .col-7,
  .container > .row > .col-6,
  .container > .row > .col-5,
  .container > .row > .col-4,
  .container > .row > .col-3,
  .container > .row > .col-2,
  .container > .row > .col-1 {
    padding: var(--padding-sm);
  }
  
  .container {
    margin: 0 auto;
    max-width: calc(100vw - 20rem);
    min-width: 900px;
  }
  .container > .row {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(12, 1fr);
  }
  .container > .row > .col-1 {
    grid-column-end: span 1;
  }
  .container > .row > .col-2 {
    grid-column-end: span 2;
  }
  .container > .row > .col-3 {
    grid-column-end: span 3;
  }
  .container > .row > .col-4 {
    grid-column-end: span 4;
  }
  .container > .row > .col-5 {
    grid-column-end: span 5;
  }
  .container > .row > .col-6 {
    grid-column-end: span 6;
  }
  .container > .row > .col-7 {
    grid-column-end: span 7;
  }
  .container > .row > .col-8 {
    grid-column-end: span 8;
  }
  .container > .row > .col-9 {
    grid-column-end: span 9;
  }
  .container > .row > .col-10 {
    grid-column-end: span 10;
  }
  .container > .row > .col-11 {
    grid-column-end: span 11;
  }
  .container > .row > .col-12 {
    grid-column-end: span 12;
  }

  @media (min-width: 64rem) {
    :root {
      --text-base-size: 1.25em;
      --text-scale-ratio: 1.25;
    }
  }
  
  @media only screen and (max-width: 1024px) {
    .container {
      margin: 0 auto;
      max-width: calc(100vw - 20rem);
      min-width: 75%;
    }
    .container > .row {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fit , minmax(240px, 1fr));
    }
  }

  #main-section {
  background-color: var(--background-color);
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 30rem;

  background-image: url("https://natrium.io/assets/hero-phone-v2.png");
  background-position: right center;
  background-size: contain;
  background-repeat: no-repeat;
}

.hero__title {
  color: var(--headline-color);
}

.hero__description--author {
  color: var(--paragraph-color);
  display: block;
}

.card {
  background-color: var(--card-background-color);
  border-radius: 0.4rem;
  overflow: hidden;
  text-align: center;
  color: var(--card-paragraph);
  transition: 450ms all;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}

.card:hover {
  transform: scale(1.1);
}

.card:hover ~ .card {
  -webkit-transform: translate3d(50px, 0, 0);
  transform: translate3d(50px, 0, 0);
}

.card:before {
  content: "";
  height: 4px;
  display: block;
  background-color: #d4d8f0;
}

.card__title > a {
  text-decoration: none;
  color: var(--card-paragraph);
}

.card__downloads--number {
  font-weight: bold;
  display: block;
  color: var(--card-paragraph);
}

.card__downloads--starts {
  color: var(--card-highlight);
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 600;
}

`
