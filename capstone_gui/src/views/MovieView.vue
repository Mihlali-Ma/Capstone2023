<template>
  <div>
    <navbar-comp />
    <div class="display">
      <div class="row" style="margin: 0; padding: 0" v-for="product in products" :key="product.MovieID">
        <div class="col">
          <h2 class="text-start" style="color: rebeccapurple">{{ product.MovieName }}</h2>
          <p class="text-start text-wrap" style="color: grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatum,
            dignissimos similique quasi non excepturi rem odit culpa quibusdam aliquid
            sint quae, iusto consequatur illo. Corrupti iure quaerat iste pariatur.
          </p>
          <div class="row">
            <div class="col">
              <h3 class="text-start" style="color: rebeccapurple">Cast</h3>
              <p class="text-start text-wrap" style="color: grey; margin-top: 1rem">
                Mihlali Matrose, Thabang Kganana, Siyamthanda Mazokwana
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h3 class="text-start" style="color: rebeccapurple">Screenplay</h3>
              <p class="text-start" style="color: grey; margin-top: 1rem">
                Mihlali Matrose, Matrose Mihlali
              </p>
            </div>
            <div class="col">
              <h3 class="text-start" style="color: rebeccapurple">Directos</h3>
              <p class="text-start" style="color: grey; margin-top: 1rem">
                Mihlali Matrose
              </p>
            </div>
          </div>
          <div class="row">
            <a class="link" href="#">BOOK NOW</a>
          </div>
        </div>
        <div class="col" style="width: 100%">
          <iframe
            width="700rem"
            height="100%"
            src="https://www.youtube.com/embed/GgKmhDaVo48?si=Rv9Qa99l4nwpZ-hB"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
export default {
  components: { NavbarComp },
  product(){
    this.$store.dispatch('fetchProduct', movieID);
  }
};
</script>

<style scoped>
.display {
  margin: 5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.text-start {
  margin-left: 3rem;
  margin-top: 3rem;
}
.row {
  width: 100%;
}
.link {
  width: 7rem;
  color: yellow;
  text-wrap: nowrap;
  text-decoration: none;
  background: rebeccapurple;
  margin-left: 4rem;
  margin-bottom: 1rem;
  box-shadow: black 0px 48px 100px 0px;
}
iframe {
  width: 100%;
}
</style>
