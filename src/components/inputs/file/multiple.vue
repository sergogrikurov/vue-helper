<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const files = ref([]); // массив выбранных файлов
const previews = ref([]); // массив DataURL для preview
const error = ref("");

const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
const maxSize = 2 * 1024 * 1024; // 2MB

function onChange(event) {
  const selectedFiles = Array.from(event.target.files);
  error.value = "";
  files.value = [];
  previews.value = [];

  if (!selectedFiles.length) return;

  for (const file of selectedFiles) {
    if (!allowedTypes.includes(file.type)) {
      error.value = t("inputs.file.errors.type");
      continue; // пропускаем этот файл
    }

    if (file.size > maxSize) {
      error.value = t("inputs.file.errors.size");
      continue;
    }

    files.value.push(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      previews.value.push(e.target.result);
    };
    reader.onerror = () => {
      error.value = t("inputs.file.errors.read");
    };
    reader.readAsDataURL(file);
  }

  event.target.value = ""; // сброс input для выбора новых файлов
}
</script>

<template>
  <div class="multiple">
    <!-- Заголовок -->
    <h4 class="title-small"><span>*</span>{{ t("inputs.file.multiple") }}</h4>

    <!-- Кнопка выбора файлов -->
    <div class="multiple__wrapper">
      <div class="multiple__button-wrapper">
        <button type="button" class="button-green" @click="$refs.input.click()">
          {{ t("inputs.file.label") }}
        </button>

        <!-- скрытый input -->
        <input
          ref="input"
          type="file"
          class="multiple__input"
          accept=".jpg,.png,.gif,.webp"
          multiple
          @change="onChange"
        />
      </div>

      <!-- список выбранных файлов -->
      <div class="multiple__names" v-if="files.length">
        <p v-for="(f, index) in files" :key="index" class="multiple__name">
          {{ f.name }}
        </p>
      </div>

      <!-- placeholder если нет файлов -->
      <p v-else class="multiple__name">
        {{ t("inputs.file.placeholder") }}
      </p>

      <!-- ошибки -->
      <p v-if="error" class="error">
        {{ error }}
      </p>

      <!-- preview -->
      <div class="multiple__preview" v-if="previews.length">
        <img
          v-for="(src, index) in previews"
          :key="index"
          :src="src"
          alt="preview"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.multiple {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(30);

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__button-wrapper {
    display: inline-block;
    position: relative;
  }

  &__input {
    display: none;
  }

  &__names {
    margin-top: rem(5);
    display: flex;
    flex-direction: column;
    gap: rem(5);
  }

  &__name {
    margin-top: rem(5);
  }

  &__preview {
    margin-top: rem(15);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: rem(10);

    img {
      width: rem(200);
      height: rem(200);
      object-fit: cover;
      border-radius: rem(5);
      border: rem(1) solid #ccc;
    }
  }
}
</style>
