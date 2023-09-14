<template>
  <div>
    <form @submit.prevent="EditProd">
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return;
    {
      EditProd: {
        userID: this.userID;
        firstName: "";
        lastName: "";
        age: 0;
        emailadd: "";
        UserImg: "";
        userPass: "";
      }
    }
  },
  props: ["id"],
  methods: {
    EditProd() {},
  },
};
</script>

<style scoped></style>
