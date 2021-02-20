// This is a dummy navigation component, create router-link down the line

<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.id">
        {{ link.text }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 'link-1',
          text: 'Covid Tracker'
        },
        {
          id: 'link-2',
          text: 'Crypto Tracker'
        },
      ],
    }
  }
}
</script>

<style scoped>
nav {
  width: 16%;
  background-color: #252932;
  height: calc(100vh - 4rem);
  color: white;
  padding: 2rem 1rem;
  box-shadow: 1px 5px 20px 5px rgba(27, 27, 27, 0.315);
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
}

li:hover,
li:active {
  color: grey;
  cursor: pointer;
  background-color: #2d313a;
  border-radius: 5px;
}
</style>