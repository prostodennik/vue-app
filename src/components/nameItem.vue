<template>
  <li class="name__item">
    {{ title.title }}
  </li>
</template>

<script>
export default {
  props: {
    title: Object
  },
};
</script>
