<template>
  <div>
    <SpinnerComp v-if="showSpinner"/>
    <div class="content-wrapper" v-else>
      <NavbarComp />
      <main>
        <router-view/>
      </main>
      <FooterComp />
    </div>
    <div class="area">
      <ul class="squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
import SpinnerComp from './components/SpinnerComp.vue';
export default {
  components: {
    NavbarComp,
    FooterComp,
    SpinnerComp,
  },
  data() {
    return {
      showSpinner: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.showSpinner = false
    }, 3000)
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baskervville+SC&display=swap');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');



body {
  background: rgb(139, 139, 139);
  background: linear-gradient(90deg, rgba(139, 139, 139, 1) 35%, rgba(57, 57, 57, 1) 100%);
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
}
.content-wrapper {
  position: relative;
  /* z-index: 1; */
}
main {
  flex: 1; /* Take up the remaining space above the footer */
}
/* Animation Styles */
.area {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

.squares {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.squares li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 8s linear infinite;
  bottom: -150px;
}

.squares li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.squares li:nth-child(2) {
  left: 10%;
  width: 70px;
  height: 70px;
  animation-delay: 0s;
  animation-duration: 12s;
}

.squares li:nth-child(3) {
  left: 70%;
  width: 30px;
  height: 30px;
  animation-delay: 2s;
}

.squares li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.squares li:nth-child(5) {
  left: 65%;
  width: 50px;
  height: 50px;
  animation-delay: 0s;
}

.squares li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 0s;
}

.squares li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 4s;
}

.squares li:nth-child(8) {
  left: 50%;
  width: 40px;
  height: 40px;
  animation-delay: 2s;
  animation-duration: 30s;
}

.squares li:nth-child(9) {
  left: 20%;
  width: 30px;
  height: 30px;
  animation-delay: 2s;
  animation-duration: 25s;
}

.squares li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

.squares li:nth-child(11) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
}

.squares li:nth-child(12) {
  left: 50%;
  width: 70px;
  height: 70px;
  animation-delay: 2s;
  animation-duration: 7s;
}

.squares li:nth-child(13) {
  left: 20%;
  width: 70px;
  height: 70px;
  animation-delay: 0s;
  animation-duration: 15s;
}

.squares li:nth-child(14) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0px) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
