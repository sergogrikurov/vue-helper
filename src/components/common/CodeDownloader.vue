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
    <button @click="download" class="button-blue" :disabled="isDownloading">
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

  &__info {
    font-size: rem(12);
    margin-top: rem(4);
    color: var(--title-color);
    line-height: 1.4;
  }
}
</style>
