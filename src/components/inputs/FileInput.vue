<script setup>
import { useI18n } from "vue-i18n";

import basic from "./file/basic.vue";
import preview from "./file/preview.vue";
import multiple from "./file/multiple.vue";
import cancelFile from "./file/cancelFile.vue";

import CodeDownloader from "@/components/common/CodeDownloader.vue";

const { t } = useI18n();

import basicCode from "./file/basic.vue?raw";
import previewCode from "./file/preview.vue?raw";
import multipleCode from "./file/multiple.vue?raw";
import cancelFileCode from "./file/cancelFile.vue?raw";
</script>

<template>
  <section class="inputs__file inputs-file">
    <div class="inputs-file__title">
      <h3 class="title">
        <span class="red">#</span>{{ t("inputs.inputFile") }}
      </h3>
    </div>
    <div class="inputs-file__items">
      <div class="inputs-file__item">
        <basic />
        <!-- Универсальная кнопка скачивания -->
        <CodeDownloader :code="basicCode" filename="basic.vue" />
      </div>

      <div class="inputs-file__item">
        <preview />
        <!-- Универсальная кнопка скачивания -->
        <CodeDownloader :code="previewCode" filename="preview.vue" />
      </div>

      <div class="inputs-file__item">
        <multiple />
        <!-- Универсальная кнопка скачивания -->
        <CodeDownloader :code="multipleCode" filename="multiple.vue" />
      </div>

      <div class="inputs-file__item">
        <cancelFile />
        <!-- Универсальная кнопка скачивания -->
        <CodeDownloader
          :code="cancelFileCode"
          filename="previewWithRemove.vue"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.inputs-file {
  &__items {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
      margin-top: rem(50);
    }
    & > *:not(:last-child) {
      border-bottom: rem(2) dotted var(--header-border);
    }
  }

  &__item {
    width: 100%;
    padding-bottom: rem(25);
  }
}
</style>
