<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg mx-auto fixed-top">
      <div class="container-fluid">
             <span class="navbar-brand mb-0"
            ><img
              src="https://raw.githubusercontent.com/kingkrazee/capstone-hosted/af72ce87bdd32dcb8b8088f716aa8bee19006060/logo.jpeg"
              alt="logo" class="logo"
          /></span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link to="/" class="nav-link text-white">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/About" class="nav-link text-white">About Us</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/Themes" class="nav-link text-white">Themes</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/Catering" class="nav-link text-white">Catering</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/Hiring" class="nav-link text-white">Hiring</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/Contact" class="nav-link text-white">Contact Us</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/Admin" class="nav-link text-white"><i class="bi bi-person-circle"></i></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
    position: sticky;
    top: 0;
    z-index: 1;

}
.logo{
  width: 70px;
  height: 70px;

}
.navbar {
    background: rgb(146,146,146);
    background: linear-gradient(286deg, rgba(146,146,146,1) 1%, rgba(0,0,0,1) 100%);
    height: 80px;
    width: 100%;
}
button {
    background-color: #84a7a1;
}
.nav-link{
position: relative;
display: block;
margin: 1rem;
color: #fff;
transition: .5s;
}

.nav-link:after{
content: "";
position: absolute;
bottom:0;
right: 0;
width: 0%;
height:0%;
border:none;
border-bottom: 2px solid #434343;
transform-origin: left;
transition: 0.5s;
}

.nav-link:hover:after{
height: 100%;
width: 100%;
}

.nav-link:before{
content: "";
position: absolute;
top:0;
left: 0;
width: 0%;
height:0%;
border:none;
border-top: 2px solid #434343;
transform-origin: left;
transition: 0.5s;
}

.nav-link:hover:before{
height: 100%;
width: 100%;
}
div#navbarSupportedContent {
    background-color: black;
}

@media (max-width: 992px) {
  .container {
    position: relative;
    width: 100%;
}

.navbar {
  width: 100%;
  text-align: center;
  position: fixed;
  top:0;
}
}
</style>