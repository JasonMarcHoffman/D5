<template>
  <TheLayout 
    :headerTitle="headerTitle"
  />
</template>

<script>
import TheLayout from './components/layout/TheLayout.vue'

export default {
  components: {
    TheLayout
  },
  data() {
    return {
      headerTitle: 'D5 - Dashboard'
    }
  },
  provide() {
    return {
      header: this.headerTitle
    }
  }
}

</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #252932;
  color: grey;
}
</style>
