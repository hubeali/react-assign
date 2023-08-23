// import React from "react";

import "./header.css";
const Header = () => {
    return (
        <div>
<nav class="container navbar navbar-expand-lg p-2  text-dark bg-opacity-10">
    <div class="container-fluid">
  
   <h1>Allama Iqbal</h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav mb-2 mb-lg-0 mx-auto ">
        <li class="nav-item home">
          Home
          </li>
          <li class="nav-item">
         About
          </li>
          <li class="nav-item">
            Service
          </li>
          <li class="nav-item">
       Book-1
          </li>
          <li class="nav-item">
       Book-2
          </li>
        </ul>
      </div>
</div>
     
  </nav>
</div>
    )

};
export default Header;