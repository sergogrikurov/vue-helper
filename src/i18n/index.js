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
    inputs: {
      title: "inputs",
      registration: "registration",
      email: "Email",
      password: "Password",
      confPassword: "Confirm password",
      showPassword: "Show password",
      agree: "I agree to the terms",
      register: "Register",
      emailRequired: "Email is required",
      emailInvalid: "Email is invalid",
      passwordRequired: "Password is required",
      passwordMin: "Password must be at least {min} characters",
      passwordMax: "Password must be at most {max} characters",
      passwordPattern: "Password can only contain Latin letters and numbers",
      passwordMismatch: "Passwords do not match",
      agreeRequired: "You must agree to the terms",
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
    inputs: {
      title: "инпуты",
      registration: "регистрация",
      email: "Почта",
      password: "Пароль",
      confPassword: "Подтвердите пароль",
      showPassword: "Показать пароль",
      agree: "Я согласен с условиями",
      register: "Зарегистрировать",
      emailRequired: "Почта обязательна",
      emailInvalid: "Неверный формат почты",
      passwordRequired: "Пароль обязателен",
      passwordMin: "Пароль должен быть не меньше {min} символов",
      passwordMax: "Пароль должен быть не больше {max} символов",
      passwordPattern: "Пароль может содержать только латинские буквы и цифры",
      passwordMismatch: "Пароли не совпадают",
      agreeRequired: "Необходимо согласиться с правилами",
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
