<template>
  <div class="btn">
    <button
      class="btn__button"
      v-on="{
        click: addNameState,
      }"
    >
      Сгенерировать
    </button>

    <button
      class="btn__button"
      v-on="{
        click: clearStateState,
      }"
    >
      Очистить
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    state: Array,
  },
  data() {
    return {
      names: {
        title: "",
        price: "",
        amount: "",
        value: "",
      },
      costs: {
        cost: "",
      },
    };
  },
  methods: {
    ...mapMutations(["addName", "addCost", "clearState"]),
    addNameState() {
      for (let i = 0; i < 50; i++) {
        let text = "";
        let price = Math.trunc(Math.random() * (1000 - 0) * 100) / 100;
        let amount = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        const possible = "abcdefghijklmnopqrstuvwxyz";

        for (let i = 0; i < 5; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        this.names.title = text;
        this.names.price = price;
        this.names.amount = amount;
        this.names.value = (amount * price).toFixed(2);
        this.addName({ ...this.names });
      }
    },
    clearStateState() {
      this.clearState();
      },
  },
  watch: {
    "names.value"() {
      const value = this.state.map((el) => el.value);
      const num = value.slice(-50).map((string) => parseFloat(string));
      const finalCost = num.reduce((total, amount) => total + amount);
      this.costs.cost = finalCost.toFixed(2);
      this.addCost({ ...this.costs });
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  
  &__button {
    border-radius: 62px;
    background: #d2d2d2;
    padding: 10px 20px;
    color: #000;
  }
}
</style>
