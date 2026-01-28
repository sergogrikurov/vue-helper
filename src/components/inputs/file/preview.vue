<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const file = ref(null);
const preview = ref(null);
const error = ref("");

const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
const maxSize = 2 * 1024 * 1024; // 2MB

function onChange(event) {
  const selectedFile = event.target.files[0];
  error.value = "";
  file.value = null;
  preview.value = null;

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

  // создаём preview
  const reader = new FileReader();
  reader.onload = (e) => {
    preview.value = e.target.result;
  };
  reader.onerror = () => {
    error.value = t("inputs.file.errors.read");
  };
  reader.readAsDataURL(selectedFile);
}
</script>

<template>
  <div class="preview">
    <!-- Заголовок -->
    <h4 class="title-small"><span>*</span>{{ t("inputs.file.preview") }}</h4>

    <!-- Кнопка выбора файла -->
    <div class="preview__wrapper">
      <div class="preview__button-wrapper">
        <button type="button" class="button-green" @click="$refs.input.click()">
          {{ t("inputs.file.label") }}
        </button>

        <input
          ref="input"
          type="file"
          class="preview__input"
          accept=".jpg,.png,.gif,.webp"
          @change="onChange"
        />
      </div>

      <!-- Имя файла или placeholder -->
      <p class="preview__name">
        {{ file ? file.name : t("inputs.file.placeholder") }}
      </p>

      <!-- Ошибки -->
      <p v-if="error" class="error">
        {{ error }}
      </p>

      <!-- Preview изображения -->
      <div v-if="preview" class="preview__preview">
        <img :src="preview" alt="preview" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview {
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

  &__preview {
    margin-top: rem(15);

    img {
      max-width: rem(200);
      max-height: rem(200);
      border-radius: rem(5);
      border: 1px solid #ccc;
    }
  }
}
</style>
