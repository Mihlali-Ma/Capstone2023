<template>
  <div>
    <navbar-comp />

    <table class="table table-dark">
      <thead>
        <tr class="table-dark">
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Age</th>
          <th scope="col">Email</th>
          <th scope="col">Image</th>
          <th scope="col">password</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-dark" v-for="User in Users" :key="User.UserID">
          <td>{{ User.firstName }}</td>
          <td>{{ User.lastName }}</td>
          <td>{{ User.age }}</td>
          <td>{{ User.emailadd }}</td>
          <td><img :src="User.UserImg" alt="" /></td>
          <td>{{ User.userPass }}</td>
          <td>
            <button type="button" class="btn btn-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
              Edit
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              @click="onDeleteUser(User.UserID)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
                />
                <path
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
                />
              </svg>

              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="lds-hourglass"></div>
    <!-- Default dropstart button -->
    <div class="btn-group dropstart">
      <button
        type="button"
        class="btn btn-secondary dropdown-toggle btn-success"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style="border-radius: 50%; width: 4rem; height: 4rem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-person-add"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          />
          <path
            d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
          />
        </svg>
      </button>
      <ul class="dropdown-menu">
        <h4 style="color: white; margin-left: 5rem">New User</h4>
        <form @submit.prevent="performRegistration">
          <div class="name">
            <input v-model="firstName" type="text" placeholder="Name" />
          </div>
          <div class="lastname">
            <input v-model="lastName" type="text" placeholder="Surname" />
          </div>
          <div class="age">
            <input v-model="age" type="text" placeholder="Age" />
          </div>
          <div class="mail">
            <input v-model="emailadd" type="text" placeholder="Email" />
          </div>
          <div class="image">
            <input v-model="userImg" type="text" placeholder="Image" />
          </div>
          <div class="password">
            <input v-model="userPass" type="text" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-success" style="margin-left: 6rem">
            Success
          </button>
          <!-- <add-user-comp /> -->
        </form>
      </ul>
    </div>
    <table class="table table-dark">
      <thead>
        <tr class="table-dark">
          <th scope="col">MovieName</th>
          <th scope="col">agerating</th>
          <th scope="col">Category</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Cast</th>
          <th scope="col">Writers</th>
          <th scope="col">Directors</th>
          <th scope="col">Music</th>
          <th scope="col">Trailor</th>
          <th scope="col">poster</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-dark" v-for="product in products" :key="product.movieID">
          <td>{{ product.MovieName }}</td>
          <td>{{ product.agerating }}</td>
          <td>{{ product.MovieCategory }}</td>
          <td>{{ product.MovieDesc }}</td>
          <td>{{ product.Ticket_price }}</td>
          <td>{{ product.MovieCast }}</td>
          <td>{{ product.MovieWriter }}</td>
          <td>{{ product.MovieDirector }}</td>
          <td>{{ product.MovieMusic }}</td>
          <td>{{ product.Trailor }}</td>
          <td><img :src="product.MoviePoster" alt="" /></td>
          <td>
            <button type="button" class="btn btn-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
              Edit
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              @click="onDeleteUser(User.UserID)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
                />
                <path
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
                />
              </svg>

              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="btn-group dropstart">
      <button
        type="button"
        class="btn btn-secondary dropdown-toggle btn-success"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style="border-radius: 50%; width: 4rem; height: 4rem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-person-add"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          />
          <path
            d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
          />
        </svg>
      </button>
      <ul class="dropdown-menu">
        <h4 style="color: white; margin-left: 5rem">New Movie</h4>
        <form @submit.prevent="addnewproduct">
          <div class="name">
            <input v-model="MovieName" type="text" placeholder="Name of the Movie" />
          </div>
          <div class="lastname">
            <input v-model="agerating" type="text" placeholder="The age rating" />
          </div>
          <div class="age">
            <input v-model="MovieCategory" type="text" placeholder="Type of movie" />
          </div>
          <div class="mail">
            <input v-model="MovieDesc" type="text" placeholder="Description" />
          </div>
          <div class="image">
            <input v-model="Ticket_price" type="text" placeholder="Ticket prices" />
          </div>
          <div class="password">
            <input v-model="MovieCast" type="text" placeholder="Cast of the movie" />
          </div>
          <div class="password">
            <input v-model="MovieWriter" type="text" placeholder="Screenplay writers" />
          </div>
          <div class="password">
            <input
              v-model="MovieDirector"
              type="text"
              placeholder="Director/s of the movie"
            />
          </div>
          <div class="password">
            <input v-model="MovieMusic" type="text" placeholder="Music Composer" />
          </div>
          <div class="password">
            <input v-model="Trailor" type="text" placeholder="Trailer of the movie" />
          </div>
          <div class="password">
            <input v-model="MoviePoster" type="text" placeholder="Poster of the Movie" />
          </div>
          <button type="submit" class="btn btn-success" style="margin-left: 6rem">
            Success
          </button>
          <!-- <add-user-comp /> -->
        </form>
      </ul>
    </div>
  </div>
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
import addUserComp from "../components/addUserComp.vue";
import { mapActions } from "vuex";
export default {
  components: { NavbarComp, addUserComp },
  methods: {
    async onDeleteUser(userID) {
      await this.$store.dispatch("deleteUser", userID);
    },
    async performRegistration() {
      try {
        await this.$store.dispatch("register", {
          firstName: this.firstName,
          lastName: this.lastName,
          age: this.age,
          emailadd: this.emailadd,
          userImg: this.userImg,
          userPass: this.userPass,
          MovieDirector: MovieDirector,
        });
        console.log("successfully added the user");
      } catch (e) {
        console.log("failed to submit");
      }
    },
    async addnewproduct() {
      try {
        await this.$store.dispatch("AddProducts", {
          MovieName: this.MovieName,
          agerating: this.agerating,
          MovieCategory: this.MovieCategory,
          MovieDesc: this.MovieDesc,
          Ticket_price: this.Ticket_price,
          MovieCast: this.MovieCast,
          MovieWriter: this.MovieWriter,
          MovieMusic: this.MovieMusic,
          Trailor: this.Trailor,
          MoviePoster: this.MoviePoster,
        });
        console.log("successfully added the Movie");
      } catch (e) {
        console.log("failed to add a movie");
      }
    },
  },
  computed: {
    Users() {
      return JSON.stringify(this.$store.state.users);
    },
    products() {
      return JSON.stringify(this.$store.state.products);
    },
  },
  computed: {
    Users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.Products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchProducts");
  },
  data() {
    return {
      UserID: "",
      firstName: "",
      lastName: "",
      age: "",
      emailadd: "",
      userImg:
        "https://www.seekpng.com/png/detail/72-729756_how-to-add-a-new-user-to-your.png",
      userPass: "",
    };
  },
  data() {
    return {
      MovieName: "",
      agerating: "",
      MovieCategory: "",
      MovieDesc: "",
      Ticket_price: "",
      MovieCast: "",
      MovieWriter: "",
      MovieMusic: "",
      Trailor: "",
      MoviePoster: "",
    };
  },
};
</script>

<style scoped>
table {
  background: #242424;
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
img {
  width: 5rem;
}
.td {
  width: 4rem;
}
form {
  width: 5rem;
}
input {
  margin: 1rem;
  margin-left: 3rem;
}
.dropdown-menu {
  width: 20rem;
  background: #242424;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.width {
  margin-left: 3rem;
}
.btn-group {
  position: relative;
}
</style>
