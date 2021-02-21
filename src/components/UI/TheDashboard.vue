<template>
  <div class="dashboard-container">
    <TheNavigation 
      @covidDash="showCovidTracker"
      @cryptoDash="showCryptoTracker"
    />
    
    <div class="dashboard-canvas">
      <CovidTracker v-if="showComponent === 'covid-tracker'" />
      <CryptoTracker v-else-if="showComponent === 'crypto-tracker'" />
    </div>
  </div>
</template>

<script>
import TheNavigation from './TheNavigation.vue'
import CovidTracker from '../dashboards/CovidTracker.vue'
import CryptoTracker from '../dashboards/CryptoTracker.vue'

export default {
  components: {
    TheNavigation,
    CovidTracker,
    CryptoTracker
  },
  data() {
    return {
      showComponent: 'covid-tracker'
    }
  },
  methods: {
    showCovidTracker() {
      this.showComponent = 'covid-tracker'
    },
    showCryptoTracker() {
      return this.showComponent = 'crypto-tracker'
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  width: 100%;
  height: calc(100vh - 4rem);
  color: white;
}

.dashboard-canvas {
  border: 1px solid red;
  width: 100%;
}
</style>