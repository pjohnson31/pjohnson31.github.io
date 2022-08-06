let appHeader = `
    <nav>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="js/topnav.js"></script>
    <div class="topnav">
      <a href="./index.html"><img class="pj-logo-header" src="./img/pj-logo.svg"></img></a>
      <!-- Navigation links (hidden by default) -->
      <div id="myLinks">
        <a href="./falcon-golf.html">Falcon Golf</a>
        <a href="./kustomer.html">Kustomer</a>
        <a href="#">Airtime</a>
        <a href="./pacman.html">Arcade Machine</a>
        <a href="./woodworking.html">Woodworking</a>
        <a href="./about.html"> About </a>
      </div>
      <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    
    <div class="header">
      <span class="header-item" href="https://www.w3schools.com">
        Design
        <div class="dropdown-content">
          <a href="./falcon-golf.html">Falcon Golf</a>
        </div>
      </span>
      <span class="header-item" href="https://www.w3schools.com">
        Software
        <div class="dropdown-content">
          <a href="./kustomer.html">Kustomer</a>
          <a href="#">Airtime</a>
        </div>
      </span>
      <a href="./index.html"><img class="pj-logo-header" src="./img/pj-logo.svg"></img></a>
      <span class="header-item" href="https://www.w3schools.com">
        Hardware
        <div class="dropdown-content">
          <a href="./pacman.html">Arcade Machine</a>
          <a href="./woodworking.html">Woodworking</a>
        </div>
      </span>
      <a class="header-item" href="./about.html">
        About
      </a>
    </div>
    <hr>    
    </nav>
`;
document.getElementById("app-header").innerHTML = appHeader;