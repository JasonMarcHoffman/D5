<template>
<div class="dashboard">
  <div>
    <TheHeader 
      :headerTitle="headerTitle"
    />
  </div>
  <div class="wrapper">
      <TheNavigation />
      <TheDashboard />
  </div>
</div>
</template>

<script>
import TheHeader from '../UI/TheHeader.vue'
import TheNavigation from '../UI/TheNavigation.vue'
import TheDashboard from '../UI/TheDashboard.vue'

export default {
  components: {
    TheHeader,
    TheNavigation,
    TheDashboard
  },
  props: ['headerTitle']
}
</script>

<style scoped>
.dashboard {
  position: relative;
  margin-top: 4rem;
  height: calc(100vh - 4rem);
}
.wrapper {
  display: flex;
  flex-direction: row;
}
</style>