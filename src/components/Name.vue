<template>
  <div class="name">
    <div class="name__title">Наименование <span>{{state.length}}</span></div>
    <ul class="name__list">
      <nameItem
        v-for="title in state"
        v-bind:key="title.id"
        :title="title"
      />
    </ul>
    <!-- <div class="scroll" v-if="state.length > 4">
      <div class="scroll__inner scroll__inner_name" 
      v-on="{
        click: scroll}"
      >&#8595;</div>
    </div> -->
    <scrollTo v-if="state.length"/>
  </div>
</template>

<script>
import nameItem from "./nameItem.vue";
import scrollTo from "./scrollTo.vue";

export default {
  components: {
    nameItem,
    scrollTo,
  },
  props: {
    state: Array,
  },
   methods: {
  },
};
</script>
