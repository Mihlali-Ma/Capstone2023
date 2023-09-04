vbase
<template>
  <div>
    <div class="row">
      <div
        id="carouselExampleIndicators"
        class="carousel sz-slider"
        data-type="carousel"
        data-width="100%"
        data-height="300px"
        data-animation="dragX"
      >
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" class="active"></li>
          <li data-target="#carouselExampleIndicators"></li>
          <li data-target="#carouselExampleIndicators"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg"
              class="d-block h-100 w-auto mx-auto"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://2.bp.blogspot.com/-DRfiX4Hvxz8/ToBxyxcPY7I/AAAAAAAABXM/FY5M1Xu1yuQ/s1600/official+poster+marvel+2012+the+avengers+movie+poster+black+widow+Scarlett+thor+hulk+ironman+captain+america+hawk+eye.jpg"
              class="d-block h-100 w-auto mx-auto"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg"
              class="d-block h-100 w-auto mx-auto"
              alt="..."
            />
          </div>
        </div>
        <a
          class="carousel-control-prev carousel-control-btn"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next carousel-control-btn"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
