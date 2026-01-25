<script setup>
import { ref } from "vue";

import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();

const slides = [
  { text: "Slide 1", color: "#e74c3c" },
  { text: "Slide 2", color: "#3498db" },
  { text: "Slide 3", color: "#2ecc71" },
  { text: "Slide 4", color: "#9b59b6" },
  { text: "Slide 5", color: "#f1c40f" },
  { text: "Slide 6", color: "#e67e22" },
  { text: "Slide 7", color: "#1abc9c" },
  { text: "Slide 8", color: "#34495e" },
];

const current = ref(0);

const next = () => {
  current.value = (current.value + 1) % slides.length;
};

const prev = () => {
  current.value = (current.value - 1 + slides.length) % slides.length;
};
</script>

<template>
  <h2 class="title"><span class="red">/</span>{{ t("homePage.slider") }}</h2>
  <section class="slider">
    <div class="slider__wrapper">
      <button class="slider__button-prev" @click="prev"><span>‹</span></button>

      <div
        class="slider__slide"
        :style="{ backgroundColor: slides[current].color }"
      >
        {{ slides[current].text }}
      </div>

      <button class="slider__button-next" @click="next"><span>›</span></button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.slider {
  padding: rem(50) rem(0);
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    margin-bottom: rem(50);
  }

  &__wrapper {
    position: relative;
    display: inline-flex;
    justify-content: center;
    @include adaptive-value(height, 350, 200);
  }
  &__slide {
    @include adaptive-value(width, 600, 290);
    @include adaptive-value(height, 300, 150);
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: rem(10);
    font-size: rem(30);
  }
  &__button-prev {
    position: absolute;
    @include adaptive-value(top, 305, 155);
    left: 25%;
  }
  &__button-next {
    position: absolute;
    @include adaptive-value(top, 305, 155);
    right: 25%;
  }
  & button {
    color: $main-color;
    width: rem(40);
    height: rem(40);
    font-size: rem(40);
    border-radius: 50%;
    border: 1px solid gray;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    & span {
      margin-top: rem(-8);
    }
    &:hover {
      color: #fff;
      border: 1px solid #fff;
    }
  }
}
</style>
