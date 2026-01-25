<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// ДАННЫЕ СЛАЙДОВ

const slides = [
  { text: "Slide 1", color: "#e74c3c" },
  { text: "Slide 2", color: "#3498db" },
  { text: "Slide 3", color: "#2ecc71" },
  { text: "Slide 4", color: "#9b59b6" },
  { text: "Slide 5", color: "#f1c40f" },
  { text: "Slide 6", color: "#e67e22" },
  { text: "Slide 7", color: "#1abc9c" },
  { text: "Slide 8", color: "#34495e" },
];

/**
 * НАСТРОЙКИ СЛАЙДЕРА
 */
const current = ref(0); // индекс активного слайда
const slidesToShow = ref(3); // сколько слайдов видно одновременно
const slideWidth = 200; // ширина одного слайда (px)
const gap = 20; // расстояние между слайдами
const loop = ref(true); // зацикливание (не autoplay!)

/**
 * ПЕРЕКЛЮЧЕНИЕ СЛАЙДОВ
 */
const next = () => {
  if (current.value < slides.length - 1) {
    current.value++;
  } else if (loop.value) {
    current.value = 0;
  }
};

const prev = () => {
  if (current.value > 0) {
    current.value--;
  } else if (loop.value) {
    current.value = slides.length - 1;
  }
};

/**
 * SWIPE (touch + mouse)
 */
const startX = ref(0);

const onTouchStart = (e) => {
  startX.value = e.touches ? e.touches[0].clientX : e.clientX;
};

const onTouchEnd = (e) => {
  const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;

  const diff = endX - startX.value;

  if (diff > 50) prev(); // свайп вправо
  if (diff < -50) next(); // свайп влево
};

/**
 * СМЕЩЕНИЕ КОНТЕЙНЕРА
 * Активный слайд всегда по центру
 */
const translateX = computed(() => {
  const offset = Math.floor(slidesToShow.value / 2);

  let tx = (current.value - offset) * (slideWidth + gap);

  const maxTranslate =
    (slides.length - slidesToShow.value) * (slideWidth + gap);

  // ограничиваем смещение, чтобы не уезжать за края
  if (tx < 0) tx = 0;
  if (tx > maxTranslate) tx = maxTranslate;

  return `translateX(-${tx}px)`;
});

/**
 * AUTOPLAY (автопрокрутка)
 */
const autoPlay = ref(true); // включить / выключить
const intervalTime = 2000; // интервал в мс
let intervalId = null;

onMounted(() => {
  if (autoPlay.value) {
    intervalId = setInterval(next, intervalTime);
  }
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <section class="slider">
    <h2 class="title"><span class="red">/</span>{{ t("homePage.slider") }}</h2>
    <div class="slider__wrapper">
      <button class="slider__button-prev" @click="prev"><span>‹</span></button>

      <div
        class="slider__viewport"
        @mousedown.prevent="onTouchStart"
        @mouseup.prevent="onTouchEnd"
        @touchstart.prevent="onTouchStart"
        @touchend.prevent="onTouchEnd"
      >
        <div class="slider__slides" :style="{ transform: translateX }">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="slider__slide"
            :class="{ active: index === current }"
            :style="{ backgroundColor: slide.color }"
          >
            {{ slide.text }}
          </div>
        </div>
      </div>

      <button class="slider__button-next" @click="next"><span>›</span></button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.slider {
  h2 {
    margin-bottom: rem(50);
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: fit-content;

    & button {
      width: rem(40);
      height: rem(40);
      font-size: rem(30);
      border-radius: 50%;
      border: 1px solid gray;
      color: gray;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      & span {
        margin-top: rem(-7);
      }
      &:hover {
        color: #fff;
        border: 1px solid #fff;
      }
    }
  }

  &__viewport {
    height: rem(360);
    display: flex;
    align-items: center;
    overflow: hidden;
    width: calc(3 * 200px + 2 * 20px); //200-slide width, 20 for margins
    margin: rem(0) rem(20);
  }

  &__slides {
    display: flex;
    transition: transform 0.5s ease;
    align-items: center;
  }

  &__slide {
    width: rem(200);
    height: rem(300);
    flex-shrink: 0;
    margin: 0 rem(10);
    border-radius: rem(10);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: rem(24);
    transition: transform 0.5s ease;
    transform: scale(0.8);
    overflow: hidden;
  }
  &__slide.active {
    transform: scale(1.2);
    z-index: 2;
    border-radius: rem(10);
    overflow: hidden;
  }
}
</style>
