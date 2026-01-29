<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter, useRoute, RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

import { useTheme } from "@/composables/useTheme.js";

import Logo from "./Logo.vue";
import Chek from "@/assets/images/chek.svg";
import GitHub from "@/assets/images/github.svg";

import Dark from "@/assets/images/dark-mode.svg";
import Light from "@/assets/images/light-mode.svg";

// them
const { theme, toggleTheme } = useTheme();

// i18n
const { locale, t } = useI18n();

// router
const router = useRouter();
const route = useRoute();

// dropdown языка
const langOpen = ref(false);
const langRef = ref(null);

// мобильное меню
const menuOpen = ref(false);

// toggle dropdown языка
const toggleLang = () => {
  langOpen.value = !langOpen.value;
};

// переключение языка
const setLang = (lang) => {
  locale.value = lang;
  localStorage.setItem("lang", lang);

  router.push({
    name: route.name,
    params: { ...route.params, lang },
    query: route.query,
  });

  langOpen.value = false;
  menuOpen.value = false;
};

// клик вне dropdown
const handleClickOutside = (e) => {
  if (langRef.value && !langRef.value.contains(e.target)) {
    langOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

// Темы
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    theme.value = savedTheme;
    document.body.className = savedTheme;
  }
});
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <!-- Логотип слева -->
      <div class="header__logo">
        <Logo />
      </div>

      <!-- Desktop Nav -->
      <nav class="header__nav">
        <RouterLink
          class="header__nav_link"
          :to="{ name: 'home', params: { lang: locale } }"
        >
          <span class="red">#</span>{{ t("nav.home") }}
        </RouterLink>

        <RouterLink
          class="header__nav_link"
          :to="{ name: 'integrations', params: { lang: locale } }"
        >
          <span class="red">#</span>{{ t("nav.integrations") }}
        </RouterLink>

        <RouterLink
          class="header__nav_link"
          :to="{ name: 'slider', params: { lang: locale } }"
        >
          <span class="red">#</span>{{ t("nav.slider") }}
        </RouterLink>

        <RouterLink
          class="header__nav_link"
          :to="{ name: 'inputs', params: { lang: locale } }"
        >
          <span class="red">#</span>{{ t("nav.inputs") }}
        </RouterLink>

        <button class="header__nav_theme" @click="toggleTheme">
          <img
            v-if="theme === 'light'"
            :src="Light"
            alt="Переключить на тёмную тему"
          />
          <img v-else :src="Dark" alt="Переключить на светлую тему" />
        </button>

        <!-- LANG SWITCHER -->
        <div class="header__lang" ref="langRef" @click="toggleLang">
          <p>{{ locale.toUpperCase() }}</p>
          <img :src="Chek" alt="arrow" :class="{ open: langOpen }" />
          <div v-if="langOpen" class="header__lang-dropdown">
            <div class="header__lang-dropdown_link" @click.stop="setLang('en')">
              EN
            </div>
            <div class="header__lang-dropdown_link" @click.stop="setLang('ru')">
              RU
            </div>
          </div>
        </div>
      </nav>

      <!-- Burger button для мобильного -->
      <button class="header__burger" @click="menuOpen = true"></button>
      <div v-if="menuOpen" class="header__burger-body">
        <div class="header__burger-body_top">
          <Logo />
          <span class="header__burger-close" @click="menuOpen = false">X</span>
        </div>
        <nav class="header__burger-nav">
          <RouterLink
            class="header__burger-nav_link"
            :to="{ name: 'home', params: { lang: locale } }"
            @click="menuOpen = false"
          >
            <span class="red">#</span>{{ t("nav.home") }}
          </RouterLink>

          <RouterLink
            class="header__burger-nav_link"
            :to="{ name: 'integrations', params: { lang: locale } }"
            @click="menuOpen = false"
          >
            <span class="red">#</span>{{ t("nav.integrations") }}
          </RouterLink>

          <RouterLink
            class="header__burger-nav_link"
            :to="{ name: 'slider', params: { lang: locale } }"
            @click="menuOpen = false"
          >
            <span class="red">#</span>{{ t("nav.slider") }}
          </RouterLink>

          <RouterLink
            class="header__burger-nav_link"
            :to="{ name: 'inputs', params: { lang: locale } }"
            @click="menuOpen = false"
          >
            <span class="red">#</span>{{ t("nav.inputs") }}
          </RouterLink>

          <button class="header__nav_theme" @click="toggleTheme">
            <img
              v-if="theme === 'light'"
              :src="Light"
              alt="Переключить на тёмную тему"
            />
            <img v-else :src="Dark" alt="Переключить на светлую тему" />
          </button>

          <!-- LANG SWITCHER -->
          <div class="header__lang" ref="langRef" @click="toggleLang">
            <p>{{ locale.toUpperCase() }}</p>
            <img :src="Chek" alt="arrow" :class="{ open: langOpen }" />
            <div v-if="langOpen" class="header__lang-dropdown">
              <div
                class="header__lang-dropdown_link"
                @click.stop="setLang('en')"
              >
                EN
              </div>
              <div
                class="header__lang-dropdown_link"
                @click.stop="setLang('ru')"
              >
                RU
              </div>
            </div>
          </div>
        </nav>
        <div class="header__burger-body_footer">
          <a
            href="https://github.com/sergogrikurov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="GitHub" alt="GitHub logo" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  color: var(--link-color);
}
.header {
  position: fixed;
  @include adaptive-value(width, 1720, 290);
  height: rem(80);
  z-index: 100;
  border-bottom: rem(1) solid var(--header-border);
  background-color: var(--header-bg);
  &__wrapper {
    width: 100%;
    height: rem(80);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  &__logo {
    z-index: 60;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: rem(30);
    @media (max-width: $mobile) {
      display: none;
    }
    &_link {
      text-transform: uppercase;
      & span {
        margin-right: rem(1);
      }
      &:hover {
        color: var(--hover-color);
      }
    }
    &_theme {
      display: inline-flex;
      padding: rem(4);
      & img {
        width: rem(24);
        height: rem(24);
        display: block;
      }
    }
  }

  &__lang {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 600;

    & p {
      color: var(--title-color);
    }

    & img {
      display: inline-block;
      margin-top: rem(-3);
      margin-left: rem(4);
      transition: transform 0.2s ease;
    }
  }

  &__lang-dropdown {
    position: absolute;
    top: rem(20);
    left: 0;
    background: var(--burger-bg);
    padding: rem(8);
    & > *:not(:last-child) {
      margin-bottom: rem(8);
    }
    &_link {
      &:hover {
        color: var(--hover-color);
      }
    }
  }
}

// Burger
.header {
  &__burger {
    display: none;
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    width: rem(25);
    height: rem(15);
    @media (max-width: $mobile) {
      display: block;
    }
    &::before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      width: rem(24);
      height: rem(2);
      background-color: #d9d9d9;
    }
    &::after {
      position: absolute;
      content: "";
      width: rem(15);
      height: rem(2);
      top: rem(5);
      right: 0;
      background-color: #d9d9d9;
    }
  }
  &__burger-body {
    display: none;
    @media (max-width: $mobile) {
      position: fixed;
      inset: 0;
      background-color: var(--burger-bg);
      z-index: 200;
      display: flex;
      flex-direction: column;
      padding: rem(30);
      gap: rem(30);
      &_top {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &_footer {
        text-align: center;
        margin-bottom: rem(50);
      }
    }
  }
  &__burger-nav {
    display: flex;
    flex-direction: column;
    gap: rem(30);
    flex: 1 1 auto;
    &_link {
      text-transform: uppercase;
      & span {
        margin-right: rem(1);
      }
      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
