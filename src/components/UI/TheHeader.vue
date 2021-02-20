<template>
    <header>
      <h3>{{ header }}</h3>
    </header>
</template>

<script>
export default {
  inject: ['header'],
}
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid rgb(32, 32, 32);
  color: rgb(199, 202, 7);
  display: flex;
  align-items: center;
  padding: 0 2rem;
  z-index: 99;
}
</style>