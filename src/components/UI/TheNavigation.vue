// This is a dummy navigation component, create router-link down the line

<template>
  <section>
    <nav>
      <ul>
        <li v-for="link in links" :key="link.id">
          {{ link.text }}
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 'link-1',
          text: 'Link 1'
        },
        {
          id: 'link-2',
          text: 'Link 2'
        },
      ],
    }
  }
}
</script>

<style>
  
</style>