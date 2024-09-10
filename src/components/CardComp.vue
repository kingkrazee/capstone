<template>
    <div class="card">
      <div class="img-content">
        <slot name="cardHeader"></slot>
      </div>
      <div class="content">
        <slot name="cardBody"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'CardComp'
  }
  </script>
  
  <style scoped>
  .card {
    width: 300px;
    height: 300px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    border: 2px solid black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
  .card::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(139, 139, 139, 1) 35%, rgba(57, 57, 57, 1) 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(50px);
  }
  
  .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, rgba(139, 139, 139, 1) 35%, rgba(57, 57, 57, 1) 100%);
    transition: transform 0.6s, rotate 0.6s, filter 1s;
  }
  
  .img-content img {
  width: 100%;
  height: 300px; 
  object-fit: cover;
  border-radius: 4px;   
}

  
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    color: #ffffff;
    padding: 20px 24px;
    line-height: 1.5;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .card:hover .content {
    opacity: 1;
    transform: translateY(0);
  }
  
  .card:hover .img-content {
    transform: scale(2.5) rotate(30deg);
    filter: blur(7px);
  }
  
  .card:hover .img-content img {
    fill: transparent;
  }
  </style>
  