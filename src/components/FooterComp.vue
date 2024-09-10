<template>
   <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>The Industry</h6>
            <p class="text-justify">At PlayHub, we specialize in offering top-tier PS5 gaming equipment, ensuring that every gamer can fully immerse themselves in the next-generation gaming experience. From the latest consoles to cutting-edge accessories, we provide everything you need to take your gaming setup to the next level. What sets PlayHub apart is our commitment to quality, customer satisfaction, and competitive pricing, making us one of the best destinations for all your PlayStation needs. Gear up with PlayHub and experience gaming like never before!</p>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="#">Furniture</a></li>
              <li><a href="#">Crockery</a></li>
              <li><a href="#">Linen</a></li>
              <li><a href="#">Servign Dishes</a></li>
              <li><a href="#">Cutlery</a></li>
              <li><a href="#">Kitchenware</a></li>
              <li><a href="#">Glasses</a></li>
              <li><a href="#">Extras</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
    <h6>Quick Links</h6>
    <ul class="footer-links">
      <li><router-link to="/about">About Us</router-link></li>
      <li><router-link to="/contact">Contact Us</router-link></li>
    </ul>
  </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by
         <a href="#">M&N Catering and Hiring</a>.
            </p>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="bi bi-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="bi bi-twitter-x"></i></a></li>
              <li><a class="github" href="#"><i class="bi bi-github"></i></a></li>
              <li><a class="linkedin" href="#"><i class="bi bi-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
    <!-- <div class="loading-line"></div> -->
</template>

<script>
export default {
    name: 'FooterComp'
}
</script>
<style scoped>
/* body{
    display: grid;
    grid-template-rows: 1fr auto;

} */
.site-footer {
  background-color: #26272b;
  padding: 20px 0;
  font-size: 14px;
  line-height: 20px;
  color: #737373;
  /* grid-row: 2; */
}

.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}

.site-footer h6 {
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}

.site-footer a {
  color: #737373;
}

.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}

.footer-links {
  padding-left: 0;
  list-style: none;
}

.footer-links li {
  display: block;
}

.footer-links a {
  color: #737373;
}

.footer-links a:active, .footer-links a:focus, .footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}

.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}

.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 14px;
  display: inline-block;
  line-height: 30px;
  width: 30px;
  height: 30px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  transition: all 0.2s linear;
}

.social-icons a:active, .social-icons a:focus, .social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}

.copyright-text {
  margin: 0;
}

@media (max-width: 991px) {
  .site-footer [class^=col-] {
    margin-bottom: 20px;
  }
}

@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text, .site-footer .social-icons {
    text-align: center;
  }
}
</style>