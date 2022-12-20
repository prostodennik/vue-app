<template>
  <div>
    <div class="scroll">
      <div
        class="scroll__inner"
        v-on="{
          click: scroll,
        }"
      >
        &#8595;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    state: Array,
  },
  methods: {
    scroll() {
      //находим родителя
      const findParentNode = event.target.parentNode.parentNode.parentNode;
      //находим в ET список и скроллим его
      const findUl = findParentNode.querySelector("ul");

      findUl.scrollBy({
        top: findUl.scrollHeight,
        behavior: "smooth",
      });

      //при скролле меняем стрелку
      findUl.addEventListener("scroll", () => {
        if (findUl.scrollTop === 0) {
          const arrowDown = findParentNode.querySelector(".scroll__inner");

          arrowDown.style.transform = "none";

          arrowDown.addEventListener("click", () => {
            findUl.scrollBy({
              top: findUl.scrollHeight,
              behavior: "smooth",
            });
          });
        } else {
          const arrowUp = findParentNode.querySelector(".scroll__inner");

          arrowUp.style.transform = "rotate(180deg)";

          arrowUp.style.transition = "transform 0.5s";

          arrowUp.addEventListener("click", () => {
            findUl.scrollBy({
              top: -findUl.scrollHeight,
              behavior: "smooth",
            });
          });
        }
      });
    },
  },
};
</script>
