<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter, useRoute, RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

import Logo from "./Logo.vue";
import Chek from "@/assets/images/chek.svg";
import GitHub from "@/assets/images/github.svg";

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
</script>

<template>
  <header class="header">
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
        :to="{ name: 'slider', params: { lang: locale } }"
      >
        <span class="red">#</span>{{ t("nav.slider") }}
      </RouterLink>

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
          :to="{ name: 'slider', params: { lang: locale } }"
          @click="menuOpen = false"
        >
          <span class="red">#</span>{{ t("nav.slider") }}
        </RouterLink>

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
  </header>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #fff;
}
.header {
  width: 100%;
  height: rem(80);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
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
        color: #fff;
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
      color: #fff;
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
    background: #111;
    padding: rem(8);
    & > *:not(:last-child) {
      margin-bottom: rem(8);
    }
    &_link {
      &:hover {
        color: #fff;
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
      background-color: #111;
      z-index: 100;
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
