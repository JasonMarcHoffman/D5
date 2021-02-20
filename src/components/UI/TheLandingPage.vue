<template>
  <base-card>
    <form @submit.prevent="logIn">
      <div>
        <label for="username">Name:</label>
        <input type="text" for="username" v-model="userName" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="text" for="email" v-model="email">
      </div>
      <button @click="validateUser">Log In</button>
    </form>
  </base-card>
  <base-card v-if="checkPassed">Show Me</base-card>
</template>

<script>
export default {
  data() {
    return { 
      checkPassed: false,
      userName: '',
      email: null
    }
  },
  methods: {
    validateUser() {
      if (this.userName === 'jason' && this.email === '123') {
        console.log(this.userName)
        console.log(this.email)
        // show dashboard
        this.checkPassed = true
      } else {
        return 'Invalid Login Details please try again'
      }
    }
  }
}
</script>

<style>
  
</style>