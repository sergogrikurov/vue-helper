<script setup>
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";

import CodeDownloader from "@/components/common/CodeDownloader.vue";

import Slider from "@/assets/images/slider/slider.jpg";
import Inputs from "@/assets/images/inputs/inputs.jpg";

// 🔹 Правильный импорт как текст для скачивания
import sliderCode from "./Slider.vue?raw";

const { locale, t } = useI18n();
</script>

<template>
  <div class="home-page">
    <section class="home-page__slider home-page-slider">
      <h2 class="title">
        <span class="red">#</span>{{ t("homePage.slider") }}
      </h2>

      <div class="home-page-slider__wrapper">
        <RouterLink :to="{ name: 'slider', params: { lang: locale } }">
          <div class="home-page-slider__link">
            <img :src="Slider" alt="Slider Image" />
            <span class="home-page-slider__link_text">{{
              t("homePage.viewAll")
            }}</span>
          </div>
        </RouterLink>

        <!-- Универсальная кнопка скачивания -->
        <CodeDownloader :code="sliderCode" filename="Slider.vue" />
      </div>
    </section>
    <section class="home-page__inputs home-page-inputs">
      <h2 class="title"><span class="red">#</span>{{ t("inputs.title") }}</h2>

      <div class="home-page-inputs__wrapper">
        <RouterLink :to="{ name: 'inputs', params: { lang: locale } }">
          <div class="home-page-inputs__link">
            <img :src="Inputs" alt="Inputs Image" />
            <span class="home-page-inputs__link_text">{{
              t("homePage.viewAll")
            }}</span>
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
  & > *:not(:first-child) {
    margin-top: rem(25);
  }
  & > * {
    border-bottom: rem(2) solid var(--title-color);
    padding-bottom: rem(25);
  }
}
.home-page-slider {
  display: flex;
  flex-direction: column;
  @include adaptive-value(gap, 50, 30);

  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: rem(20);
  }
  &__link {
    @include adaptive-value(width, 700, 290);
    & img {
      transition: all 0.3s ease;
      display: block;
      width: 100%;
      height: 100%;
    }
    &_text {
      position: absolute;
      bottom: 53%;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      background: rgba(0, 0, 0, 0.5);
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 14px;
      pointer-events: none;
    }
  }
}
.home-page-inputs {
  display: flex;
  flex-direction: column;
  @include adaptive-value(gap, 50, 30);

  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__link {
    @include adaptive-value(width, 700, 290);
    & img {
      transition: all 0.3s ease;
      display: block;
      width: 100%;
      height: 100%;
    }
    &_text {
      position: absolute;
      bottom: 53%;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      background: rgba(0, 0, 0, 0.5);
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 14px;
      pointer-events: none;
    }
  }
}
</style>
