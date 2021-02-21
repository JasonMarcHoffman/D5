<template>
  <div class="dashboard-container">
    <TheNavigation 
      @covidDash="showCovidTracker"
      @cryptoDash="showCryptoTracker"
    />
    
    <div class="dashboard-canvas">
      <CovidTrackerDashboard v-if="showComponent === 'covid-tracker'" />
      <CryptoTrackerDashboard v-else-if="showComponent === 'crypto-tracker'" />
    </div>
  </div>
</template>

<script>
import TheNavigation from './TheNavigation.vue'
import CovidTrackerDashboard from '../dashboards/CovidTrackerDashboard.vue'
import CryptoTrackerDashboard from '../dashboards/CryptoTrackerDashboard.vue'

export default {
  components: {
    TheNavigation,
    CovidTrackerDashboard,
    CryptoTrackerDashboard
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
  width: 100%;
}
</style>