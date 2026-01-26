import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      home: "home",
      slider: "slider",
      inputs: "inputs",
    },
    homePage: {
      home: "home",
      slider: "slider",
    },
    footer: {
      copy: "Copyright 2025. Made by SG",
    },
  },
  ru: {
    nav: {
      home: "главная",
      slider: "слайдер",
      inputs: "инпуты",
    },
    homePage: {
      home: "главная",
      slider: "слайдер",
    },
    footer: {
      copy: "Все права защищены 2025. Сделал SG",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});
