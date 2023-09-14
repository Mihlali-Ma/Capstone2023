<template>
  <form @submit.prevent="performRegistration">
    <div class="name">
      <input v-model="newUser.firstName" type="text" placeholder="Name" />
    </div>
    <div class="lastname">
      <input v-model="newUser.lastName" type="text" placeholder="Surname" />
    </div>
    <div class="age">
      <input v-model="newUser.age" type="text" placeholder="Age" />
    </div>
    <div class="mail">
      <input v-model="newUser.email" type="text" placeholder="Email" />
    </div>
    <div class="image">
      <input v-model="newUser.userImg" type="text" placeholder="Image" />
    </div>
    <div class="password">
      <input v-model="newUser.userPass" type="text" placeholder="Password" />
    </div>
    <button type="submit" class="btn btn-success" style="margin-left: 6rem">
      Success
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        userImg: "",
        userPass: "",
      },
    };
  },
  methods: {
    async performRegistration() {
      try {
        // Call your Vuex action here to handle registration
        await this.$store.dispatch("register", this.newUser);
        // Optionally, you can handle success here (e.g., show a success message)
      } catch (e) {
        // Handle errors (e.g., show an error message)
      }
    },
  },
};
</script>

<style scoped></style>
