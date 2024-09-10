<template>
    <div class="heading"><h1>Get In Touch</h1></div>
    <div class="row  justify-content-center">
        <div class="col-md-5">
          <h3>Online Inquiry</h3>
            <div class="contact">
                <div class="formcarry-container">
                           <form ref="form" action="https://formcarry.com/s/iwwxEiwV8Lx" method="POST" enctype="multipart/form-data" @submit.prevent="handleSubmit">
                             
                             <div class="formcarry-block">
                               <label for="fc-generated-1-name">Full Name:</label>
                               <input type="text" v-model="formData.name" name="name" id="fc-generated-1-name" placeholder="Your first and last name" required />
                             </div>
                             
                             <div class="formcarry-block">
                               <label for="fc-generated-1-email">Your Email Address:</label>
                               <input type="email" v-model="formData.email" name="email" id="fc-generated-1-email" placeholder="M&Nhiring@gmail.com" required />
                             </div>
                             
                             <div class="formcarry-block">
                               <label for="fc-generated-1-message">Your message:</label>
                               <textarea v-model="formData.message" name="message" id="fc-generated-1-message" placeholder="Enter your message..." required></textarea>
                             </div>
                             
                             <div class="formcarry-block">  
                               <button id="btnSend" type="submit">Send</button>
                             </div>
                           </form>
                </div>
            </div>
          </div>
          <div class="col-md-7">
          <h3>Contact Details</h3>
          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.8492373930594!2d18.55492507544142!3d-33.94500552300943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b3b3062955f%3A0x124b7ea060fc1234!2s7%20Kersboom%20St%2C%20Bonteheuwel%2C%20Cape%20Town%2C%207764!5e0!3m2!1sen!2sza!4v1725004240260!5m2!1sen!2sza" width="750" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p>Email: nataliegailwilliams@gmail.com</p>
            <p>Phone: +27 81 517 2881</p>
          </div>
          
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        },
        // thePinUrl:"https://github.com/kingkrazee/eccomerce/blob/main/images/locationPin.png?raw=true"
      };
      
    },
    methods: {
      handleSubmit() {
        const formData = new FormData(this.$refs.form);
        
        alert('Message sent!');
        
        this.resetForm();

        fetch("https://formcarry.com/s/iwwxEiwV8Lx", {
          method: 'POST',
          body: formData
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
        })
        .catch(error => {
          console.error('Error during form submission:', error);
          
        });
      },
      resetForm() {
        
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
      }
    }
  };
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
      
      .formcarry-container {
        box-sizing: border-box;
        margin: 40px auto 0 auto;
        padding: 0;
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.01em;
      
        width: 400px;
      
        
        --fc-border-color: #ECEFF9;
        --fc-normal-text-color: #0E0B3D;
        --fc-normal-placeholder-color: #B3B8D0;
      
        
        --fc-primary-color-hue: 220;
        --fc-error-color-hue: 356;
        --fc-primary-hsl: var(--fc-primary-color-hue), 100%, 54%;
        --fc-error-hsl: var(--fc-error-color-hue), 100%, 54%;
      
        
        --fc-field-hover-bg-color: #F7F9FC;
        --fc-border-hover-color: #DDE0EE;
        --fc-field-hover-text-color: #B3B8D0;
      
        --fc-border-active-color: #1463FF;
      }
      
      .formcarry-container * {
        box-sizing: border-box;
      }
      
      .formcarry-container label {
        display: block;
        cursor: pointer;
      }
      
      .formcarry-container .formcarry-block:not(:first-child) {
        margin-top: 16px;
      }
      
      
      .formcarry-container input,
      .formcarry-container textarea,
      .formcarry-container select {
        margin-top: 4px;
        width: 100%;
        height: 42px;
        border: 1px solid var(--fc-border-color);
        color: var(--fc-normal-text-color);
        border-radius: 6px;
        padding: 8px 12px;
        
        font-family: "Inter", sans-serif;
        font-size:14px;
        transition: 125ms background, 125ms color, 125ms box-shadow;
      }
      
      .formcarry-container textarea{
        min-height: 188px;
        max-width: 100%;
        padding-top: 12px;
      }
      
      .formcarry-container input::placeholder,
      .formcarry-container textarea::placeholder,
      .formcarry-container select::placeholder {
        color: var(--fc-normal-placeholder-color);
      }
      
      .formcarry-container input:hover,
      .formcarry-container textarea:hover,
      .formcarry-container select:hover {
        border-color: var(--fc-border-hover-color);
        background-color: var(--fc-field-hover-bg-color);
      }
      
      .formcarry-container input:hover::placeholder,
      .formcarry-container textarea:hover::placeholder,
      .formcarry-container select:hover::placeholder {
        color: var(--fc-field-hover-text-color);
      }
      
      .formcarry-container input:focus,
      .formcarry-container textarea:focus,
      .formcarry-container select:focus {
        background-color: #fff;
        border-color: hsl(var(--fc-primary-hsl));
        box-shadow: hsla(var(--fc-primary-hsl), 8%) 0px 0px 0px 3px;
        outline: none;
      }
      
      .formcarry-container select {
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.9997 14.5001L8.46387 10.9642L9.64303 9.78589L11.9997 12.1434L14.3564 9.78589L15.5355 10.9642L11.9997 14.5001Z' fill='%236C6F93'/%3E%3C/svg%3E%0A");
        /* background-position: calc(100% - 20px) calc(1em + 4px), calc(100% - 15px) calc(1em + 4px); */
        background-size: 24px 24px;
        background-position: 98%;
        background-repeat: no-repeat;
        appearance: none;
        -webkit-appearance: none;
      }
      
      .formcarry-container button {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: -0.02em;
        height: 42px;
        line-height: 40px;
        width: 100%;
        border-radius: 6px;
        box-sizing: border-box;
        border: 1px solid hsla(var(--fc-primary-hsl));
        background-color: hsla(var(--fc-primary-hsl));
        color: #fff;
        cursor: pointer;
      }
      
      .formcarry-container button {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: -0.02em;
        height: 40px;
        line-height: 24px;
        width: 100%;
        border: 0;
        border-radius: 6px;
        box-sizing: border-box;
        background-color: hsla(var(--fc-primary-hsl));
        color: #fff;
        cursor: pointer;
        box-shadow: 0 0 0 0 transparent;
        
        transition: 125ms all;
      }
      
      .formcarry-container button:hover {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), hsla(var(--fc-primary-hsl));
      }
      
      .formcarry-container button:focus {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), hsla(var(--fc-primary-hsl));
        border-inline: 1px solid inline rgba(255, 255, 255, 0.6);
        box-shadow: 0px 0px 0px 3px rgba(var(--fc-primary-hsl), 12%);
      }
      
      .formcarry-container button:active {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), hsla(var(--fc-primary-hsl));
      }
      
      .formcarry-container button:disabled {
        background-color: hsla(var(--fc-primary-hsl), 40%);
        cursor: not-allowed;
      }
      
      .formcarry-container input:focus:required:invalid,
      .formcarry-container input:focus:invalid, 
      .formcarry-container select:focus:required:invalid,
      .formcarry-container select:focus:invalid
      {
        color: hsl(var(--fc-error-hsl)); 
        border-color: hsl(var(--fc-error-hsl));
        box-shadow: 0px 0px 0px 3px hsla(var(--fc-error-hsl), 12%);
      }
      
      .row{
        color: black;
      }
      .contact{
        margin-top: -2rem;
        margin-bottom: 2rem;
      }
      .map{
        margin-top: 3rem;
        margin-bottom: 2rem;
        margin-left: 3rem;
      }
      .heading{
        font-family: "Baskervville SC", serif;
        display: flex;
        justify-content: center;
        margin-top: 6rem;
        margin-bottom: 2rem;
        color: black;
      }
      h3{
        display: flex;
        justify-content: center;
        font-family: "Baskervville SC", serif;
      }
      .col-md-7{
        border: none;
      }
      @media only screen and (max-width: 780px) {
  .row {
    display: flex;
    flex-direction: column;
  }
  .col-md-7 {
    order: 2;
  }
  .col-md-5 {
    order: 1;
  }
  .map {
    margin-top: 1rem;
    margin-right: 3rem;
    margin-bottom: 1rem;
  }
  .map iframe {
    width: 100%;
    height: 200px;
  }
  .contact {
    margin-top: 0;
  }
  .formcarry-container {
    width: 100%;
    padding: 1rem;
  }
  .formcarry-block {
    margin-top: 1rem;
  }
  .formcarry-container input, 
  .formcarry-container textarea, 
  .formcarry-container select {
    height: 36px;
    font-size: 12px;
  }
  .formcarry-container textarea {
    min-height: 100px;
  }
  .formcarry-container button {
    height: 36px;
    font-size: 12px;
  }
}
</style>