<template>
  <div class="value">
    <div class="value__title">Стоимость <span>{{state.length}}</span></div>
    <ul class="value__list">
      <li class="value__item" v-for="value in state" 
      v-bind:key="value.id">{{value.value}}</li>
    </ul>
    <scrollTo v-if="state.length"/>
  </div>
</template>

<script>
import scrollTo from "./scrollTo.vue";
export default {
  components: {
    scrollTo,
  },
  props: {
    state: Array,
    
  },
   methods: {

  },
}
</script>