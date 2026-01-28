<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const file = ref(null);
const error = ref("");

const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
const maxSize = 2 * 1024 * 1024; // 2MB

function onChange(event) {
  const selectedFile = event.target.files[0];
  error.value = "";
  file.value = null;

  if (!selectedFile) return;

  if (!allowedTypes.includes(selectedFile.type)) {
    error.value = t("inputs.file.errors.type");
    event.target.value = "";
    return;
  }

  if (selectedFile.size > maxSize) {
    error.value = t("inputs.file.errors.size");
    event.target.value = "";
    return;
  }

  file.value = selectedFile;
}
</script>

<template>
  <div class="basic">
    <!-- кастомная кнопка -->
    <h4 class="title-small"><span>*</span>{{ t("inputs.file.basic") }}</h4>
    <div class="basic__wrapper">
      <div class="basic__button-wrapper">
        <button type="button" class="button-green" @click="$refs.input.click()">
          {{ t("inputs.file.label") }}
        </button>

        <!-- скрытый нативный input -->
        <input
          ref="input"
          type="file"
          class="basic__input"
          accept=".jpg,.png,.gif,.webp"
          @change="onChange"
        />
      </div>

      <!-- имя файла или placeholder -->
      <p class="basic__name">
        {{ file ? file.name : t("inputs.file.placeholder") }}
      </p>

      <!-- ошибки -->
      <p v-if="error" class="error">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.basic {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(30);
  &__button-wrapper {
    display: inline-block;
    position: relative;
  }

  &__input {
    display: none;
  }

  &__name {
    margin-top: rem(10);
  }
}
</style>
