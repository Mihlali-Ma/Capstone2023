<template>
  <div>
    <navbar-comp />
    <div class="row">
      <div class="col" v-for="product in products" :key="product.movieID">
        <a href="/ppp">
          <div class="card" style="border-radius: none">
            <img
              :src="product.MoviePoster"
              class="card-img-top"
              style="border-radius: none"
              alt="..."
            />
            <div class="card-body">
              <h4 class="text-start" style="color: yellow">{{ product.MovieName }}</h4>
              <p class="card-text text-start">{{ product.agerating }}PV</p>
              <p class="card-text text-start" style="font-size: small">
                {{ product.Ticket_price }} ZAR
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <footer-comp/>
  </div>
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
import FooterComp from "../components/FooterComp.vue";
export default {
  components: { NavbarComp, FooterComp },
  computed: {
    products() {
      return this.$store.state.Products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
.row {
  margin-left: 2rem;
}
.card {
  margin-top: 2rem;
  border: none !important;
  width: 13rem;
  height: 22rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.card img {
  height: 20rem;
  object-fit: cover;
  border-radius: none;
}
.card:hover {
  border-radius: none !important;
  width: 15rem;
  background: orangered;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.card-body:hover {
  background: blueviolet;
}
.card-body {
  background: #242424;
  color: lightgrey;
}
.col {
  margin-top: 5rem;
}
a {
  text-decoration: none;
}
</style>
