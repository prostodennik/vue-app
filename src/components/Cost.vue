<template>
  <div class="cost">
    <div class="cost__title">Итоговая стоимость <span>{{state.length}}</span></div>
    <ul class="cost__list">
      <costItem v-for="cost in state" 
      :key="cost.id" 
      :cost="cost"/>
    </ul>
    <scrollTo v-if="state.length > 5"/>
  </div>
</template>

<script>
import costItem from "./costItem.vue";
import scrollTo from "./scrollTo.vue";

export default {
    components: {
    costItem,
    scrollTo,
  },
  props: {
    state: Array,
  },
   methods: {
  },
}
</script>

