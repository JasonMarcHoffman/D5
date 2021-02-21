<template>
  <nav>
    <ul>
      <li @click="covidDash" :class="{active: covidSelected === true}">Covid Dashboard</li>
      <li @click="cryptoDash" :class="{active: cryptoSelected === true}">Crypto Dashboard</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      covidSelected: false,
      cryptoSelected: false
    }
  },
  methods: {
    covidDash() {
      this.$emit('covidDash')
      this.covidSelected = true
      this.cryptoSelected = false
    },
    cryptoDash() {
      this.$emit('cryptoDash')
      this.cryptoSelected = true
      this.covidSelected = false
    },
  }
}
</script>

<style scoped>
nav {
  min-width: 210px;
  background-color: #252932;
  color: white;
  padding: 2rem 1rem;
  box-shadow: 1px 5px 20px 5px #1b1b1b50;
  z-index: 1;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  font-size: 12px;
  line-height: 48px;
  color: grey;
  padding: 0 0 0 1rem;
  margin-bottom: 12px;
}

li:hover,
.active {
  color: white;
  cursor: pointer;
  background-color: #2d313a;
  border-radius: 5px;
}
</style>