<template>
    <TheLandingPage 
      title="header"
    />
</template>

<script>
import TheLandingPage from './components/UI/TheLandingPage.vue'

export default {
  components: {
    TheLandingPage
  },
  data() {
    return {
      headerTitle: 'The Header'
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
}
</style>
