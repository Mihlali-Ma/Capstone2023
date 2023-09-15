<template>
  <div>
    <navbar-comp />
    
    <div class="row" mt-3>
      <img src="https://4kbluray4u.com/wp-content/uploads/2019/09/collection-2a.jpg"  width="100%" alt="" class="image">
      <div class="row">
        <div class="col" style="margin-left: -3rem">
          <div class="dropdown">
            <a
              class="btn btn-outline-secondary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-funnel"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"
                /></svg
              >Filter
            </a>

            <ul class="dropdown-menu" style="background: #242424">
              <li v-for="category in MovieCategory" :key="category">
                <a
                  class="dropdown-item"
                  style="color: #fff"
                  href="#"
                  @click="filterMovies(category)"
                >
                  {{ category }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <button type="button" class="btn btn-outline-warning" @click="sortItems">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-sort-alpha-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
              />
              <path
                d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"
              /></svg
            >Sort
          </button>
        </div>
        <div class="col">
          <input
            type="text"
            v-model="searchQuery"
            class="input-group-text"
            name=""
            id="search"
            placeholder="Search for a Movie"
          />
          <!-- <ul>
            <li v-for="product in filteredProducts" :key="product.id">
              {{ product.MovieName }}
            </li>
          </ul> -->
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col md-6" v-for="product in filteredProducts" :key="product.movieID">
        <div class="card" style="border-radius: none">
          <a href="/register">
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
    </div>
    <div class="lds-hourglass"></div>
    <footer-comp />
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
    sortItems() {
      this.filteredProducts = this.filteredProducts.sort((a, b) => {
        if (a.MovieCategory < b.MovieCategory) {
          return -1;
        } else {
          return 1;
        }
      });
    },
    filteredProducts() {
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        return this.products.filter((product) =>
          product.MovieName.toLowerCase().includes(query)
        );
      } else {
        return this.products;
      }
    },
  },
  data() {
    return {
      searchQuery: "",
      MovieCategory: ["Action", "Adventure", "Family", "Comedy", "All"],
      // filteredProducts: [],
    };
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.filterMovies("All");
  },

  methods: {
    // filterMovies(category) {
    //   if (category == "All") {
    //     this.filteredProducts = this.products;
    //   } else {
    //     this.filteredProducts = this.products.filter(
    //       (product) => product.MovieCategory === category
    //     );
    //   }
    // },
    filterMovies(category) {
      console.log("Filtering by category:", category);

      if (category === "All") {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter(
          (product) => product.MovieCategory === category
        );
      }

      console.log("Filtered products:", this.filteredProducts);
    },
    filteredProducts() {
      const query = this.searchQuery.toLowerCase();
      return this.products.filter((product) =>
        product.MovieName.toLowerCase().includes(query)
      );
    },
    sortItems() {
      const sortedProducts = [...this.filteredProducts];
      sortedProducts.sort((a, b) => {
        if (a.MovieCategory < b.MovieCategory) {
          return -1;
        } else {
          return 1;
        }
      });

      this.filteredProducts = sortedProducts;
    },
    data() {
      return {
        // searchQuery: "",
        // MovieCategory: ["Action", "Adventure", "Family", "Comedy", "All"],
        filteredProducts: [],
      };
    },
  },
  Sort() {
    this.filteredProducts =
      this.filteredProducts === "ascending" ? "decscending" : "ascending";
  },
  // filteredProducts() {
  //   if (this.searchQuery) {
  //     const query = this.searchQuery.toLowerCase();
  //     return this.products.filter((product) =>
  //       product.MovieName.toLowerCase().includes(query)
  //     );
  //   } else {
  //     return this.products;
  //   }
  // },
};
</script>

<style scoped>
.row {
  margin-left: 1rem;
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
.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-hourglass 1.2s infinite;
}
#search {
  width: 90%;
  margin-right: 1rem;
  border: solid rebeccapurple;
  background: #242424;
  color: gray;
}
.btn {
  width: 90%;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
.row{
  width: 100%;
}
.image{
  height: 15rem;
  width: 100%;
  object-fit: cover;
}

</style>
