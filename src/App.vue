<template>
  <div id="app">
    <FinalCost/>
  </div>
</template>

<script>
import FinalCost from './components/AppCost.vue'

export default {
  name: 'App',
  components: {
    FinalCost
  },
   data() {
    return {};
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: 600;
}

table {
  border-collapse: collapse;
}

ul {
  padding: 0;
  margin: 0;
  height: 90px;
  overflow: scroll;
  li {
    list-style: none;
    line-height: 1.44;
  }
}

p {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
}

img {
  display: block;
  width: 100%;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
}

body {
  background: #dedede;
}

.scroll__inner {
  cursor: pointer;
}
</style>
