<template>
  <div class="app-cost">
    <Button :state="generates" />
    <Name :state="generates" />
    <Price :state="generates" />
    <Amount :state="generates" />
    <Value :state="generates" />
    <Cost :state="cost" />
  </div>
</template>

<script>
import Button from "./Button.vue";
import Name from "./Name.vue";
import Price from "./Price.vue";
import Amount from "./Amount.vue";
import Value from "./Value.vue";
import Cost from "./Cost.vue";

import { mapState } from "vuex";

export default {
  components: {
    Button,
    Name,
    Price,
    Amount,
    Value,
    Cost,
  },
  computed: {
    ...mapState({
      generates: (state) => state.generates.generates,
      cost: (state) => state.cost.cost,
    }),
  },
};
</script>

<style lang="scss" scoped>
.app-cost {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}
</style>
