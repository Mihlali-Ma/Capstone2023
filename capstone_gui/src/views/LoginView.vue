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
                src="https://i.postimg.cc/PrqqMWLs/sign-up-speech-bubble-153380638-removebg-preview.png"
                alt=""
            /></a>
            <form action="submit">
              <div class="names">
                <input type="text" name="Name" id="" placeholder="Name" />
              </div>
              <div class="surname">
                <input type="text" name="Surname" id="" placeholder="Surname" />
              </div>
              <div class="surname">
                <input type="text" name="age" id="" placeholder="Age" />
              </div>
              <div class="surname">
                <input type="email" name="email" id="" placeholder="email" />
              </div>
              <div class="surname">
                <input type="text" name="password" id="" placeholder="password" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="link">
        <a href="#">
          <p class="text-start">already have an account</p>
          <p></p
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";

export default {
  components: { NavbarComp },
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
  width: 8rem;
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
}
.names {
  margin-top: 2rem;
}
a {
  text-decoration: none;
}
.link {
  margin-left: 4rem;
  margin-top: -3rem;
}
</style>
