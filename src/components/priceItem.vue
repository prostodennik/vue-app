<template>
  <li class="name__item">
    {{ price.price }}
  </li>
</template>

<script>
export default {
  props: {
    price: Object
  },
};
</script>