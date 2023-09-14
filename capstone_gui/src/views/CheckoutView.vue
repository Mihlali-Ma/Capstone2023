<template>
  <div>
    <navbar-comp />
    <div class="row">
      <div class="col">
        <form>
          <div class="mb-3">
            <p class="text-start">Name and Surname</p>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <p class="text-start">Email Address</p>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <p class="text-start">Province</p>
            <div class="input-group mb-3">
              <select class="form-select" id="inputGroupSelect02">
                <option selected>Choose province...</option>
                <option value="1">Western Cape</option>
                <option value="2">Northern Cape</option>
                <option value="3">Gauteng</option>
                <option value="4">Kwa-Zulu Natal</option>
                <option value="5">North West</option>
                <option value="6">Eastern Cape</option>
                <option value="7">Limpopo</option>
                <option value="8">Free State</option>
                <option value="9">Mpumalanga</option>
              </select>
            </div>
            <h3 class="text-start">Payment method</h3>
          </div>
        </form>
      </div>
      <div class="col"></div>
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
form {
  margin: 5rem;
  width: 30rem;
}
.form-control {
  background: #242424;
}
.input-group {
  background: #242424;
}
.form-select {
  background: #242424;
  color: grey;
}
.option {
  color: #fff;
}
</style>
