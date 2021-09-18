<template>
  <div class="header">
    <div class="nav">
      <h3>
        <router-link to="/"> Todos</router-link>
        |
        <router-link to="/page2">Page2</router-link>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
.header {
  display: flex;
  text-align: center;
  background: #41b883;
  height: 50px;
}
.nav {
  margin: auto auto auto auto;
}
a {
  color: white;
  text-decoration: none;
}
</style>
