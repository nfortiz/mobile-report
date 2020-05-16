import styled from 'styled-components'

export const Nav = styled.nav`
  height: 100vh;
  position: fixed;
  z-index: 1000;
  background-color: var(--bg-primary);
  transition: width var(--transition-speed) ease;
  overflow-y: auto;
  overflow-x: hidden;


&:hover {
  width: 16rem;
}

&:hover .link-text {
  display: inline-block;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.nav-item {
  width: 100%;
}

.nav-item:last-child {
  margin-top: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--text-primary);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
}

.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: var(--bg-secondary);
  color: var(--text-secondary);
}

.link-text {
  font-family: var(--font-family);
  font-weight: bold;
  display: none;
  margin-left: 1rem;
}

.nav-link svg {
  width: 2rem;
  min-width: 2rem;
  margin: 0 1.5rem;
}

.fa-primary {
  color: #ff7eee;
}

.fa-secondary {
  color: #df49a6;
}

.fa-primary,
.fa-secondary {
  transition: var(--transition-speed);
}

.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;
}

.logo svg {
  transform: rotate(0deg);
  transition: var(--transition-speed);
}

&:hover .logo svg {
  transform: rotate(-180deg);
}

.logo-text {
  display: inline;
  position: absolute;
  left: -999px;
  transition: var(--transition-speed);
}

@media only screen and (min-width: 600px) {
  & {
    top: 0;
    width: 5rem;
    height: 100vh;
  }

  &:hover {
    width: 16rem;
  }

  &:hover .link-text {
    display: inline;
  }

  &:hover .logo svg {
    margin-left: 11rem;
  }

  &:hover .logo-text {
    left: 0px;
  }
}

`
