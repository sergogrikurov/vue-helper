<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import Slide1 from "@/assets/images/slider/slide1.jpg";
import Slide2 from "@/assets/images/slider/slide2.jpg";
import Slide3 from "@/assets/images/slider/slide3.jpg";
import Slide4 from "@/assets/images/slider/slide4.jpg";
import Slide5 from "@/assets/images/slider/slide5.jpg";
import Slide6 from "@/assets/images/slider/slide6.jpg";
import Slide7 from "@/assets/images/slider/slide7.jpg";
import Slide8 from "@/assets/images/slider/slide8.jpg";

// 1️⃣ Слайды
const slides = [
  { img: Slide1, alt: "Slide 1" },
  { img: Slide2, alt: "Slide 2" },
  { img: Slide3, alt: "Slide 3" },
  { img: Slide4, alt: "Slide 4" },
  { img: Slide5, alt: "Slide 5" },
  { img: Slide6, alt: "Slide 6" },
  { img: Slide7, alt: "Slide 7" },
  { img: Slide8, alt: "Slide 8" },
];

function getSlide(index) {
  return slides[index % slides.length];
}

// 2️⃣ Настройки
const startIndex = ref(0); // с какой картинки начинать
const visibleCount = ref(3); // видимые блоки (будет адаптивно)
const autoScroll = ref(true); // автопрокрутка
const enableSwipe = ref(true); // свайпы
const scrollInterval = ref(2000); // интервал в миллисекундах

let intervalId = null;

// 3️⃣ Swipe переменные
let touchStartX = 0;
let touchEndX = 0;

// 4️⃣ Функции переключения
function next() {
  startIndex.value++;
  if (startIndex.value > slides.length - visibleCount.value)
    startIndex.value = 0;
}

function prev() {
  startIndex.value--;
  if (startIndex.value < 0)
    startIndex.value = slides.length - visibleCount.value;
}

// 5️⃣ Swipe обработчики
function handleTouchStart(e) {
  if (!enableSwipe.value) return;
  touchStartX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
  if (!enableSwipe.value) return;
  touchEndX = e.changedTouches[0].clientX;
  const deltaX = touchStartX - touchEndX;

  if (Math.abs(deltaX) > 50) {
    if (deltaX > 0) next();
    else prev();
  }
}

function handleTouchMove(e) {
  if (!enableSwipe.value) return;
  touchEndX = e.touches[0].clientX;
}

// 6️⃣ Автопрокрутка
onMounted(() => {
  if (autoScroll.value) intervalId = setInterval(next, scrollInterval.value);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

// 7️⃣ Адаптивный visibleCount через ширину окна
function updateVisibleCount() {
  const width = window.innerWidth;
  if (width < 600) visibleCount.value = 1;
  else if (width < 900) visibleCount.value = 2;
  else visibleCount.value = 3;
}

// запускаем при монтировании
onMounted(() => {
  updateVisibleCount();
  window.addEventListener("resize", updateVisibleCount);
});

// удаляем слушатель при размонтировании
onUnmounted(() => {
  window.removeEventListener("resize", updateVisibleCount);
});

// для активного слаида
const activeIndex = computed(() => {
  return Math.floor(visibleCount.value / 2);
});
</script>

<template>
  <section class="slider">
    <h2 class="title"><span class="red">/</span>{{ t("homePage.slider") }}</h2>
    <div class="slider__wrapper">
      <button class="slider__button-prev" @click="prev"><span>‹</span></button>

      <div
        class="slider__slides"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div
          v-for="(i, idx) in visibleCount"
          :key="i"
          class="slider__slide"
          :class="{ slider__slide_active: idx === activeIndex }"
          :style="{
            backgroundImage: `url(${getSlide(startIndex + i - 1).img})`,
          }"
        ></div>
      </div>
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
    max-width: rem(1200);
    margin: 0 auto;
    overflow: hidden;
    gap: rem(10);
    @media (max-width: rem(1024)) {
      gap: 0;
    }
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
      @media (max-width: rem(1024)) {
        display: none;
      }
      & span {
        margin-top: rem(-7);
      }
      &:hover {
        color: #fff;
        border: 1px solid #fff;
      }
    }
  }

  &__slides {
    display: flex;
    align-items: center;
    gap: rem(10);
    width: 100%;
    touch-action: pan-y; // разрешаем вертикальный скролл страницы
  }

  &__slide {
    flex: 1 1 0;
    height: rem(300);
    background-size: cover;
    background-position: center;
    border-radius: rem(10);
    transition: all 0.5s ease;

    &_active {
      height: rem(360);
      transform: scale(1);
      opacity: 1;
      z-index: 2;
    }
  }
}
</style>
