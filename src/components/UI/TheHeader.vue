<template>
    <header>
      <h3>{{ title }}</h3>
    </header>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: #52d7ff;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 2rem;
}
</style>