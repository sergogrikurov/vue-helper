<script setup>
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();
</script>

<template>
  <div class="home-page">
    <h1 class="title"><span class="red">/</span>{{ t("homePage.home") }}</h1>
    <section class="home-page__slider"></section>
  </div>
</template>
<style lang="scss" scoped></style>
