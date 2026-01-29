<script setup>
import { useI18n } from "vue-i18n";
import CodeDownloader from "@/components/common/CodeDownloader.vue";

import scss from "@/assets/code/scss.txt?raw";
import theme from "@/assets/code/theme.txt?raw";
import lang from "@/assets/code/lang.txt?raw";

const { t } = useI18n();
</script>
<template>
  <div class="integrations">
    <h2 class="title">
      <span class="red">/</span>{{ t("homePage.integrations") }}
    </h2>
    <div class="integrations__items">
      <div class="integrations__item">
        <h3>SCSS</h3>
        <!-- Универсальная кнопка скачивания -->
        <CodeDownloader :code="scss" filename="scss.txt" />
      </div>

      <div class="integrations__item">
        <h3>Theme</h3>
        <!-- Универсальная кнопка скачивания -->
        <CodeDownloader :code="theme" filename="theme.txt" />
      </div>

      <div class="integrations__item">
        <h3>Lang</h3>
        <!-- Универсальная кнопка скачивания -->
        <CodeDownloader :code="lang" filename="lang.txt" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.integrations {
  @include adaptive-value(padding-top, 50, 20);
  @include adaptive-value(padding-bottom, 50, 20);

  h2 {
    margin-bottom: rem(50);
  }
  &__items {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--title-color);
    font-size: rem(26);
    & > *:not(:last-child) {
      border-bottom: rem(2) dotted var(--title-color);
      margin-bottom: rem(50);
    }
    &:last-child {
      border-bottom: rem(2) solid var(--title-color);
    }
  }

  &__item {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    padding-bottom: rem(25);
    gap: rem(20);
  }
}
</style>
