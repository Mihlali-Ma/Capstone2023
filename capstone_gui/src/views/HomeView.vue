<template>
  <div class="home">
    <navbar-comp />
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://www.thebatman.com/images/share.jpg"
            class="d-block w-100"
            alt="..."
          />
          <img
            src="https://m.media-amazon.com/images/I/81PWWFp26HL._AC_UF1000,1000_QL80_.jpg"
            alt=""
            class="bat"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://pbs.twimg.com/media/FzATa5qXsAMgtTw.jpg:large"
            class="d-block w-100"
            alt="..."
          />
          <img
            src="https://assets-prd.ignimgs.com/2023/06/19/fyybldfaaambxsg-1687201253291.jpg"
            alt=""
            class="bat"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 style="margin-left: 8rem">Kraven</h5>
            <p style="margin-left: -11rem">
              To Catch the Prey, You Must Become the Hunter.
            </p>
            <a href="#">BOOK NOW</a>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/02/ant-man-paul-rudd.jpg"
            class="d-block w-100"
            alt="..."
          />
          <img
            src="https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg"
            alt=""
            class="bat"
          />

          <div class="carousel-caption d-none d-md-block">
            <h5>Ant-Man Quantamania</h5>
            <p style="margin-left: -5rem">
              Ant-Man and the Wasp Are Back, and They're Going Quantum!
            </p>
            <a href="#">BOOK NOW</a>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/aquaman-1550228807.jpg?crop=1.00xw:0.564xh;0,0.0853xh&resize=1200:*"
            class="d-block w-100"
            alt="..."
          />
          <img src="https://wallpapercave.com/wp/wp3869493.jpg" alt="" class="bat" />

          <div class="carousel-caption d-none d-md-block">
            <h5 style="margin-left: 9rem">Aquaman</h5>
            <p style="margin-left: -2rem">
              The King of the Seven Seas Rises, Dive into Greatness with Aquaman.
            </p>
            <a href="#">BOOK NOW</a>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.alphacoders.com/130/1300471.jpg"
            class="d-block w-100"
            alt="..."
          />
          <img
            src="https://media.vogue.co.uk/photos/5d54a7af5d72c30008bf5fa1/2:3/w_2560%2Cc_limit/original"
            alt=""
            class="bat"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 style="margin-left: 11.5rem">The Dark Rises</h5>
            <p style="margin-left: 0rem">
              Witness the Dark Knight Rise, Gotham's Last Hope Unmasking the Legend.
            </p>
            <a href="#">BOOK NOW</a>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    NavbarComp,
  },
};
</script>

<style>
.carousel {
  height: 30rem;
}
.carousel-inner {
  height: 30rem;
}
.carousel-item {
  height: 30rem;
}
.d-block {
  height: 30rem;
  object-fit: cover;
  position: absolute;
}
.bat {
  position: relative;
  width: 12rem;
  height: 15rem;
  margin-top: 10rem;
  margin-right: 60rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
.carousel-caption h5 {
  font-weight: bolder;
  font-size: xx-large;
  width: 25rem;
  margin-left: 15rem;
}
/*.carousel-caption p {
  font-weight: bolder;
  font-size: xx-large;
  width: 25rem;
  margin-left: 16rem;
}*/
.carousel-caption a {
  text-decoration: none;
  color: white;
  border: 5px solid orangered;
  background: orangered;
  margin-left: -27rem;
}
</style>
