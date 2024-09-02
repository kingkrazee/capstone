<template>
  <div class="about">
    <div class="row">
      <div class="col-md-7">
            <div class="info">
              <h2>About M&N</h2>
              <div class="text">
                <p>Starting this business has not been without its challenges, but each hurdle has been a valuable learning experience, allowing me to refine my services and offer exceptional experiences to my clients. I’ve discovered that this is more than just a job—it’s a way to bring joy to others, and that’s what drives me every day. My passion for serving others inspires me to go beyond the       ordinary and create something truly special for each client.
                This journey has sparked a deeper interest in the event industry, motivating me to explore new opportunities and expand my business. With God’s guidance, I’ve achieved goals I once only dreamed of, and I trust He will continue to open doors for me to offer even more to my clients.
                </p>
              </div>
                <div class="history">
                  <h2>History</h2>
                  <div class="icon" @click="toggleInfo"><h6>see more</h6><i class="bi bi-arrow-down-circle"></i></div>
                </div>
                <transition name="fade">
                  <div id="histext" :class="{'fade-in': showInfo, 'fade-out': !showInfo}" v-if="animationCompleted || showInfo">
                    <p>Before the COVID-19 pandemic, I worked at a company that didn’t offer much promise for my future. Recognizing the lack of growth, I made the decision to leave and took a severance package, which I then used as capital to start my own catering and event planning business.
                    What began as small family gatherings, where I handled the décor and setup, quickly grew into something more. People began to notice my work, and I realized there was a real opportunity to turn my passion into a successful venture. With the unwavering support of my husband, I threw myself into creating vibrant, memorable settings for all types of occasions.
                    My ultimate aim is to be independent while also creating opportunities for others, particularly those who are unemployed. As my business grows and I take on larger functions, I’m committed to hiring those in need, giving them a chance to thrive just as I have.</p>
                  </div>
                </transition>
            </div>
      </div>
      <div class="col-md-5" id="abtimg">
        <img :src="aboutImgUrl" alt="home" class="aboutImg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutImgUrl: "https://github.com/kingkrazee/capstone-hosted/blob/main/about.jpeg?raw=true",
      showInfo: false,
      animationCompleted: true
    };
  },
  methods: {
    toggleInfo() {
      this.animationCompleted = false;
      this.showInfo = !this.showInfo;

      setTimeout(() => {
        this.animationCompleted = true;
      }, 500);
    }
  }
}
</script>

<style>

#abtimg {
  padding-left: 4rem;
}
.aboutImg{
    height: 500px;
    width: 500px;
    object-fit: cover;
    border-radius: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.info{
    font-family: "Baskervville SC", serif;
    text-align: center;
    color: white;
}
.text{
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  margin-left: 1rem;
}
#histext{
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  margin-left: 1rem; 
  display: none;
}
#histext.fade-in{
  display: block;
}
.about{
  margin-top: 6rem;
  margin-bottom: 1rem;
}
.col-md-7{
  border-right: 1px solid black;
}
h2{
  color: black;
}
.history{
  margin-top: 1rem;
}
.icon{
  margin-top: 10px;
  animation: float 2s infinite;
}
@media only screen and (max-width: 780px){
	.about{
    display: inline-block;
    padding: 1rem;

  }
  .aboutImg{
    /* margin: auto; */
    width: 100%;
    height: auto;
    margin-left: -2rem;
    margin-top: 2rem;
  }
  .text{
    margin: auto;
  }
  #histext{
    margin: auto;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease forwards;
}

.fade-out {
  animation: fadeOut 0.5s ease forwards;
}


@keyframes float{
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(0);
  }
}
</style>