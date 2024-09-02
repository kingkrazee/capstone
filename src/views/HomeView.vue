<template>
  <div class="home">
    <div class="homeimg">
      <div class="backdrop">
        <img :src="homeImgUrl" alt="home" class="homeImg">
      </div>
      <button>Hire Now</button>
    </div>
    <!-- Animated Trending Text -->
    <h1 class="trend">
      <span class="typed-text"></span>
    </h1>
    <div class="card-group">
      <div class="card">
        <img src="https://github.com/kingkrazee/capstone-hosted/blob/main/Decor.jpeg?raw=true" class="card-img-top" alt="me">
        <div class="info"><h3 class="collection">Decor</h3></div>
        <div class="button" id="look">
          <div id="spin"></div>
          <a href="./ThemesView.vue">Take A Look</a>
        </div>
      </div>
      <div class="card">
        <img src="https://github.com/kingkrazee/capstone-hosted/blob/main/cutlery.jpg?raw=true" class="card-img-top" alt="me">
        <div class="info"><h3 class="collection">Cutlery</h3></div>
        <div class="button" id="look">
          <div id="spin"></div>
          <a href="./CateringView.vue">Take A Look</a>
        </div>
      </div>
      <div class="card">
        <img src="https://raw.githubusercontent.com/kingkrazee/capstone-hosted/main/throne%20chair.webp" class="card-img-top" alt="me">
        <div class="info"><h3 class="collection">Furniture</h3></div>
        <div class="button" id="look">
          <div id="spin"></div>
          <a href="./HiringView.vue">Take A Look</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';

export default {
  data() {
    return {
      homeImgUrl: "https://raw.githubusercontent.com/kingkrazee/capstone-hosted/af72ce87bdd32dcb8b8088f716aa8bee19006060/logo.jpeg"
    };
  },
  mounted() {
    const options = {
      strings: ["Top Trending Collections", "Explore Our Variety", "Exclusive Offers Just for You"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };
    
    this.typed = new Typed('.typed-text', options);
  },
  beforeDestroy() {
    // Destroy the instance when the component is destroyed
    if (this.typed) {
      this.typed.destroy();
    }
  }
};
</script>

<style scoped>
.homeimg {
  background-image: url('https://raw.githubusercontent.com/kingkrazee/capstone-hosted/69ee25fb0faab5864a9e3b066941f79581f5a079/home.jpeg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.homeImg {
  width: 250px;
  height: 250px;
  border-radius: 1rem;
  box-shadow: 1rem 1rem 1rem rgb(0, 0, 0,);

}
.backdrop {
  background: linear-gradient(-45deg, rgba(118, 118, 118, 0.8), rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.8));
  height: 400px;
  width: 800px;
  background-size: 400% 400%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  animation: gradient 7s ease infinite;
  border-radius: 3rem

}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
button{
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 1rem;
  color: white;
}
button:hover{
  background-color: grey;
}
.button {
  margin-top: 20px;
  width: 100px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 1rem;
}
#look {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
#look a {
  position: relative;
  transition: all .45s ease-Out;
  color: white;
  text-decoration: none;
}
#spin {
  width: 0;
  height: 0;
  opacity: 0;
  left: 70px;
  top: 20px;
  transform: rotate(0deg);
  background: none;
  position: absolute;
  transition: all .5s ease-Out;
}
#look:hover #spin {
  width: 200%;
  height: 500%;
  opacity: 1;
  left: -70px;
  top: -70px;
  background: #767676;
  transform: rotate(80deg);
}
#look:hover a {
  color: #000000;
}
.card-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
}
.trend {
  display: flex;
  justify-content: center;
  font-family: "Baskervville SC", serif;
  font-size: 2rem;
}
.card-img-top {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.card {
  height: 500px;
  width: 200px;
  transition: transform 0.7s;
  border: solid 1px black;
}
.card:hover {
  transform: scale(1.05);
}
.info {
  position: absolute;
  bottom: 0;
  top: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  height: 40px;
}
.collection {
  color: white;
  font-family: "Baskervville SC", serif;
}
#look {
  font-size: 14px;
  padding: 5px 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media only screen and (max-width: 780px){
  .backdrop{
    width: 200px;
    margin-top: 3rem;
    height: auto;
  }
  .card-group{
    display: inline-block;
    width: 100%;
    margin: auto;
    padding-left: 3rem;

  }
  .card{
    height: 300px;
    width: 300px;
    margin-bottom: 1rem
  }
  .trend{
    font-size: large;
  }
  .homeimg{
    width: 400px;
    height: 300px;
  }
  .homeImg{
    width: 100px;
    height: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
