<template>
  <div>
    <navbar-comp />
    <div class="landing">
      <div class="login">
        <div class="row">
          <div class="col">
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://4kwallpapers.com/images/wallpapers/the-flash-movie-poster-5k-2880x1800-11570.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Sign Up</h5>
                    <p>
                      to enjoy top class movies from your favourite celebrities in a
                      cinema of your choosing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <a href="#"
              ><img
                src="https://i.postimg.cc/Z5sjvrW5/login-buttons-sign-label-speech-login-vector-removebg-preview.png"
                alt=""
            /></a>
            <form @submit.prevent="onSubmit">
              <div class="email">
                <input type="email" name="email" id="" placeholder="email" />
              </div>
              <div class="surname">
                <input type="text" name="password" id="" placeholder="password" />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: { NavbarComp },
  data() {
    return {
      emailadd: this.emailadd,
      userPass: this.userPass,
    };
  },
  computed: {
    ...mapState(["loggedIn", "errorMessage"]),
  },
  methods: {
    ...mapActions(["SignIn", "logout"]),
    onSubmit() {
      this.SignIn({ emailadd: this.emailadd, userPass: this.userPass });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.login {
  margin: 4rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.carousel-item img {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
img {
  width: 15rem;
  margin-top: 1rem;
}
.input-group {
  width: 60%;
  margin-left: 6rem;
}
input {
  border-left: none;
  border-right: none;
  border-top: none;
  background: #242424 !important;
  color: #fff;
  margin-top: 2rem;
  width: 50%;
}
.email {
  margin-top: 6rem;
}
a {
  text-decoration: none;
}
.link {
  margin-left: 4rem;
  margin-top: -3rem;
}
form {
  margin-top: -4em;
}
</style>
