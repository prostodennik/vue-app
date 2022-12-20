<template>
  <div class="price">
    <div class="price__title">Цена <span>{{state.length}}</span></div>
    <ul class="price__list">
      <priceItem  v-for="price in state" 
      v-bind:key="price.id"
      :price="price"/>
    </ul>
    <!-- <div class="scroll" v-if="state.length > 4">
      <div class="scroll__inner scroll__inner_price" 
      v-on="{
        click: scroll}"
      >&#8595;</div>
    </div> -->
    <scrollTo v-if="state.length"/>
  </div>
</template>


<script>
import  priceItem  from "./priceItem.vue";
import scrollTo from "./scrollTo.vue";

export default {
    components: {
    priceItem,
    scrollTo,
  },
  props: {
    state: Array,
  },
   methods: {
  
  },
}
</script>