let navBar = document.createElement('script');
navBar.src = 'navBar.html';


const headerTemplate = document.createElement('template');
    headerTemplate.innerHTML = `

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="./landing.html">Alan Winters</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="./landing.html">Bio<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="./projects.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Projects
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="./projects.html">Overview</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="./bustracking.html">Bus Tracking</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="./pacmen.html">PacMen</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="./eyemovement.html">Eye Tracking</a>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
    `;
  

class Header extends HTMLElement {
  constructor() {
    //Always call super first in constructor.
    super();
  }
    
  connectedCallback() {
    //const shadowRoot = this.attachShadow({ mode: 'open' });
    //shadowRoot.appendChild(headerTemplate.content);
    this.innerHTML = headerTemplate.innerHTML;
  }
}

customElements.define('header-component', Header);