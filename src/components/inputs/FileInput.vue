<script setup>
import { useI18n } from "vue-i18n";

import basic from "./file/basic.vue";
import preview from "./file/preview.vue";
import multiple from "./file/multiple.vue";

const { t } = useI18n();
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
      </div>

      <div class="inputs-file__item">
        <preview />
      </div>

      <div class="inputs-file__item">
        <multiple />
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
  }

  &__item {
    width: 100%;
    border-bottom: rem(2) solid var(--header-border);
    padding-bottom: rem(50);
  }
}
</style>
