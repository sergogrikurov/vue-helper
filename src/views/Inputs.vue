<script setup>
import Registration from "@/components/inputs/Registration.vue";
import Login from "@/components/inputs/Login.vue";
import FileInput from "@/components/inputs/FileInput.vue";

import CodeDownloader from "@/components/common/CodeDownloader.vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

// 🔹 Правильный импорт как текст для скачивания
import registrationCode from "@/components/inputs/Registration.vue?raw";
import loginCode from "@/components/inputs/Login.vue?raw";
</script>

<template>
  <div class="inputs">
    <h2 class="title inputs__title">
      <span class="red">/</span>{{ t("inputs.title") }}
    </h2>
    <div class="inputs__item">
      <Registration />
      <!-- Универсальная кнопка скачивания -->
      <CodeDownloader :code="registrationCode" filename="Registration.vue" />
    </div>

    <div class="inputs__item">
      <Login />
      <!-- Универсальная кнопка скачивания -->
      <CodeDownloader :code="loginCode" filename="Login.vue" />
    </div>

    <FileInput />
  </div>
</template>
<style lang="scss" scoped>
.inputs {
  @include adaptive-value(padding-top, 50, 20);
  @include adaptive-value(padding-bottom, 50, 20);
  & > *:not(:last-child) {
    margin-bottom: rem(50);
  }
  & > *:not(:first-child) {
    border-bottom: rem(1) solid var(--header-border);
  }
  &__item {
    padding-bottom: rem(25);
  }
}
</style>
