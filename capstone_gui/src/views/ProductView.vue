<template>
  <div>
    <navbar-comp />
    <div class="row">
      <div class="col">
        <a href="/ppp">
          <div class="card" style="border-radius: none">
            <img
              src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg"
              class="card-img-top"
              style="border-radius: none"
              alt="..."
            />
            <div class="card-body">
              <h4 class="text-start">Avatar</h4>
              <p class="card-text text-start">Action</p>
              <p class="card-text text-start" style="font-size: small">13LV</p>
            </div>
          </div>
        </a>
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
