<script setup>
import { watch, onBeforeUnmount } from "vue";

const props = defineProps({
  show: Boolean,
  duration: {
    type: Number,
    default: 3000,
  },
});

const emit = defineEmits(["close"]);

let timer = null;

watch(
  () => props.show,
  (value) => {
    if (value) {
      // каждый раз при открытии
      timer = setTimeout(() => {
        emit("close");
      }, props.duration);
    } else {
      clearTimeout(timer);
      timer = null;
    }
  },
);

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer);
});
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="modal-overlay">
      <div class="modal">
        <slot />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: var(--title-color);
  padding: rem(20) rem(30);
  border-radius: rem(10);
  min-width: rem(280);
  max-width: 90%;
  box-shadow: 0 rem(10) rem(30) rgba(0, 0, 0, 0.2);
  text-align: center;
}

/* анимация */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
