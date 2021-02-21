<template>
  <base-card>
    <form class="container">
      <h5>Registration details</h5>
      <hr>
      <div class="mb-3">
        <label for="name" class="form-label">Full Name: </label>
        <input type="text" class="form-control" id="name">
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Email: </label>
        <input type="text" class="form-control" id="name">
      </div>
      <div class="d-flex justify-content-between mb-2">
        <div class="mb-3 col-2">
          <label for="name" class="form-label">Age: </label>
          <input type="text" class="form-control" id="name">
        </div>
        <div class="mb-3 col-4">
          <label for="name" class="form-label">Phone: </label>
          <input type="text" class="form-control" id="name">
        </div>
        <div class="mb-3 col-4">
          <label for="name" class="form-label">Ethnicity: </label>
          <input type="text" class="form-control" id="name">
        </div>
      </div>
        <!-- <hr class="mb-4"/> -->
        <button class="btn btn-primary mb-2 w-100">Submit</button>
    </form>
  </base-card>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.form-control {
  background-color: #252932;
  border: 1px solid #5d5f62;
  color: grey;
}
</style>