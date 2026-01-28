<script setup>
import Registration from "@/components/inputs/Registration.vue";
import Login from "@/components/inputs/Login.vue";
import FileInput from "@/components/inputs/FileInput.vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="inputs">
    <h2 class="title"><span class="red">/</span>{{ t("inputs.title") }}</h2>
    <Registration />
    <Login />
    <FileInput />
  </div>
</template>
<style lang="scss" scoped>
.inputs {
  @include adaptive-value(padding-top, 50, 20);
  @include adaptive-value(padding-bottom, 50, 20);
  & > *:not(:last-child) {
    margin-bottom: rem(50);
    border-bottom: rem(1) solid var(--header-border);
  }
}
</style>
