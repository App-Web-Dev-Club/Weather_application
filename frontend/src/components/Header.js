import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" style={{marginLeft:"600px"}}>
        <Link class="nav-link active" aria-current="page" href="#">Home</Link>
        <Link class="nav-link" href="#">Features</Link>
        <Link class="nav-link" href="#">Pricing</Link>
        <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header