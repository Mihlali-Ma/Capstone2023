<template>
  <div>
    <div class="card" style="border-radius: none">
      <a href="/login">
        <img
          :src="product.MoviePoster"
          class="card-img-top"
          style="border-radius: none"
          alt="..."
        />
        <div class="card-body">
          <h4 class="text-start" style="color: yellow">{{ product.MovieName }}</h4>
          <p class="card-text text-start">{{ product.agerating }}LV</p>
          <p class="card-text text-start" style="font-size: small">
            {{ product.Ticket_price }} ZAR
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
};
</script>

<style scoped></style>
