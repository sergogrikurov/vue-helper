<script setup>
import { ref, defineProps } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  code: { type: String, required: true },
  filename: { type: String, default: "Component.vue" },
});

const isDownloading = ref(false);

function download() {
  if (!props.code) return;
  isDownloading.value = true;

  const blob = new Blob([props.code], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = props.filename;
  a.click();
  URL.revokeObjectURL(url);

  // Симулируем небольшой delay, чтобы пользователь увидел сообщение
  setTimeout(() => {
    isDownloading.value = false;
  }, 3000);
}
</script>

<template>
  <div class="download">
    <button
      @click="download"
      class="download__button"
      :disabled="isDownloading"
    >
      {{
        isDownloading
          ? t("download.inProgress")
          : t("download.download") + " " + props.filename
      }}
    </button>
    <span v-if="isDownloading" class="download__info">
      {{ t("download.info") }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.download {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: rem(15);
  text-align: center;
  &__button {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: rem(8) rem(16);
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: rem(5);
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background-color: #2563eb;
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    &:hover:enabled {
      background-color: #2563eb;
    }
  }
  &__info {
    font-size: rem(12);
    margin-top: rem(4);
    color: var(--title-color);
    line-height: 1.4;
  }
}
</style>
