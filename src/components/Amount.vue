<template>
   <div class="amount">
    <div class="amount__title">Количество <span>{{state.length}}</span></div>
    <ul class="amount__list">
      <li class="amount__item" 
      v-for="amount in state" 
      v-bind:key="amount.id">
      {{amount.amount}}</li>
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