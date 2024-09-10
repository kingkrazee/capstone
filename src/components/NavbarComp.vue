<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg mx-auto fixed-top">
      <div class="container-fluid">
        <span class="navbar-brand mb-0">
          <img
            src="https://raw.githubusercontent.com/kingkrazee/capstone-hosted/af72ce87bdd32dcb8b8088f716aa8bee19006060/logo.jpeg"
            alt="logo"
            class="logo"
          />
        </span>
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
              <router-link to="/Decor" class="nav-link text-white">Decor</router-link>
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
              <a class="nav-link text-white" data-bs-toggle="modal" data-bs-target="#authModal"><i class="bi bi-person-circle"></i></a>
            </li>
            <li class="nav-item">
              <router-link to="/Checkout" class="nav-link text-white"><i class="bi bi-cart4"></i></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Admin" class="nav-link text-white"><i class="bi bi-gear"></i></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Sign Up / Login Modal -->
    <div class="modal fade" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true" data-bs-backdrop="false">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content form-wrap">
          <div class="modal-header">
            <h5 class="modal-title" id="authModalLabel">Sign Up / Login</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="tabs">
              <h3 class="signup-tab">
                <a class="switch" href="#" @click.prevent="switchTab('signup')">Sign Up</a>
              </h3>
              <h3 class="login-tab">
                <a class="switch" href="#" @click.prevent="switchTab('login')">Login</a>
              </h3>
            </div>
            <div class="tabs-content">
              <!-- Sign Up Tab Content -->
              <div id="signup-tab-content" v-show="activeTab === 'signup'">
                <form class="signup-form">
                  <input
                    type="text"
                    class="input"
                    id="first_name"
                    autocomplete="off"
                    placeholder="First Name"
                    v-model="firstName"
                  />
                  <input
                    type="text"
                    class="input"
                    id="last_name"
                    autocomplete="off"
                    placeholder="Last Name"
                    v-model="lastName"
                  />
                  <input
                    type="email"
                    class="input"
                    id="user_email"
                    autocomplete="off"
                    placeholder="Email"
                    v-model="emailAdd"
                  />
                  <div class="password-input">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      class="input"
                      id="user_pass"
                      autocomplete="off"
                      placeholder="Password"
                      v-model="usersPass"
                    />
                    <button type="button" @click="togglePassword" class="toggle-password-btn">
                      <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                    </button>
                  </div>
                  <div class="password-input">
                    <input
                      :type="showRepeatPassword ? 'text' : 'password'"
                      class="input"
                      id="user_pass_repeat"
                      autocomplete="off"
                      placeholder="Repeat Password"
                      v-model="usersPass"
                    />
                    <button type="button" @click="toggleRepeatPassword" class="toggle-password-btn">
                      <i :class="showRepeatPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                    </button>
                  </div>
                  <input @click.prevent="insertUsers()" type="submit" class="button" value="Sign Up" />
                </form>
                <div class="help-text">
                  <p>By signing up, you agree to our</p>
                  <p><a id="terms" href="#">Terms of service</a></p>
                </div>
              </div>

              <!-- Login Tab Content -->
              <div id="login-tab-content" v-show="activeTab === 'login'">
                <form class="login-form">
                  <input
                    type="text"
                    class="input"
                    id="user_login"
                    autocomplete="off"
                    placeholder="Email or Username"
                    v-model="emailAdd"
                  />
                  <div class="password-input">
                    <input
                      :type="showLoginPassword ? 'text' : 'password'"
                      class="input"
                      id="user_pass_login"
                      autocomplete="off"
                      placeholder="Password"
                      v-model="usersPass"
                    />
                    <button type="button" @click="toggleLoginPassword" class="toggle-password-btn">
                      <i :class="showLoginPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                    </button>
                  </div>
                  <input type="checkbox" class="checkbox" id="remember_me" />
                  <label for="remember_me">Remember Me</label>
                  <input @click.prevent="loginUser()" type="submit" class="button" value="Login" />
                </form>
                <div class="help-text">
                  <p><a id="terms" href="#">Forget your password?</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      userAge: '',
      Gender: '',
      emailAdd: '',
      usersPass: '',
      usersProfile: '',
      usersRole: '',
      activeTab: "signup",
      showPassword: false,
      showRepeatPassword: false,
      showLoginPassword: false
    };
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleRepeatPassword() {
      this.showRepeatPassword = !this.showRepeatPassword;
    },
    toggleLoginPassword() {
      this.showLoginPassword = !this.showLoginPassword;
    },
    insertUsers() {
        this.$store.dispatch('insertUsers', this.newUser);
      },
      loginUser() {
        this.$store.dispatch('loginUser',{ emailAdd: this.emailAdd, usersPass: this.usersPass });
        this.$router.push('/');
      }
  }
};
</script>

<style scoped>
.container {
  position: sticky;
  top: 0;
  z-index: 1;
}
.logo {
  width: 70px;
  height: 70px;
  border-radius: 20%;
}
.navbar {
  background: linear-gradient(286deg, rgba(146, 146, 146, 1) 1%, rgba(0, 0, 0, 1) 100%);
  height: 80px;
  width: 100%;
}
button {
  background-color: #84a7a1;
}
.nav-link {
  position: relative;
  display: block;
  margin: 1rem;
  color: #fff;
  transition: 0.5s;
}
.nav-link:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0%;
  height: 0%;
  border: none;
  border-bottom: 2px solid #000000;
  transform-origin: left;
  transition: 0.5s;
}
.nav-link:hover:after {
  height: 100%;
  width: 100%;
}
.nav-link:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 0%;
  border: none;
  border-top: 2px solid #000000;
  transform-origin: left;
  transition: 0.5s;
}
.nav-link:hover:before {
  height: 100%;
  width: 100%;
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
    top: 0;
  }
  div#navbarSupportedContent {
    background: linear-gradient(286deg, rgba(146, 146, 146, 1) 1%, rgba(0, 0, 0, 1) 100%);
  }
}
.form-wrap {
  position: relative;
  background: rgb(146,146,146);
  background: linear-gradient(180deg, rgba(146,146,146,1) 1%, rgba(104,104,104,1) 100%);
  text-align: center;
  padding: 2em 2em;
  max-width: 500px;
  width: 100%;
  font-family: "Baskervville SC", serif;
}
.tabs {
  background: none;
  display: flex;
  justify-content: center;
  border-radius: 2rem;
}
.tabs h3 {
  width: 50%;
  margin: 0;
  padding: 1em 0;
}
.tabs a {
  color: #000;
  text-decoration: none;
}
.tabs-content {
  padding: 2em 0;
}
.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: #e5e5e5;
  border: 0;
  color: #000;
  border-radius: 2rem;
}
.button {
  width: 100%;
  padding: 10px;
  background: #454545;
  border: 0;
  color: white;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 2rem;
}
.button:hover {
  background-color: #000000;
  
}
.help-text {
  margin-top: 10px;
}
.password-input {
  position: relative;
  display: flex;
}
.toggle-password-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
}
#terms{
  color: #000000;
}
.logo{
  width: 50px;
  height: 50px;
}
</style>
