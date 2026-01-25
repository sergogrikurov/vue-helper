<script setup>
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n();

import { useRouter, useRoute, RouterLink } from "vue-router";

const router = useRouter();
const route = useRoute();

import Slider from "@/assets/images/slider.jpg";
</script>

<template>
  <div class="home-page">
    <section class="home-page__slider home-page-slider">
      <h1 class="title">
        <span class="red">/</span>{{ t("homePage.slider") }}
      </h1>

      <div class="home-page-slider__wrapper">
        <RouterLink :to="{ name: 'slider', params: { lang: locale } }">
          <div class="home-page-slider__image">
            <img :src="Slider" alt="Slider Image" />
          </div>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  @include adaptive-value(padding-top, 100, 50);
  @include adaptive-value(padding-bottom, 100, 50);
}
.home-page-slider {
  display: flex;
  flex-direction: column;
  @include adaptive-value(gap, 50, 30);

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__image {
    @include adaptive-value(width, 700, 290);
    & img {
      transition: all 0.3s ease;
      display: block;
      width: 100%;
      height: 100%;
      &:hover {
        scale: 1.1;
      }
    }
  }
}
</style>
