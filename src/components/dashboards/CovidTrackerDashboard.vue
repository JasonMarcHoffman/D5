<template>
<div class="dashboard-wrapper">

  <div class="d-flex">
    <CovidForm />
    <CovidAppointment />
  </div>
  <div class="d-flex">
    <CovidRegisteredUsers />
  </div>

</div>
</template>

<script>
import CovidForm from './components/covid/CovidForm.vue'
import CovidAppointment from './components/covid/CovidAppointment.vue'
import CovidRegisteredUsers from './components/covid/CovidRegisteredUsers.vue'

export default {
  components: {
    CovidForm,
    CovidAppointment,
    CovidRegisteredUsers
  }
}
</script>

<style scoped>
.dashboard-wrapper {
  padding: 1rem;
}
</style>