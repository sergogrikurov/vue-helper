import { createI18n } from "vue-i18n";

const messages = {
  en: {
    download: {
      download: "Download",
      inProgress: "Downloading...",
      info: "The file will be saved in your browser's download folder. Please wait...",
    },
    nav: {
      home: "home",
      slider: "slider",
      inputs: "inputs",
    },
    homePage: {
      home: "home",
      slider: "slider",
      viewAll: "View All",
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
      passwordMismatch: "Passwords do not match",
      agreeRequired: "You must agree to the terms",

      login: "login",
      loginBtn: "login",
      required: "This field is required",
      emailInvalid: "Invalid email address",
      passwordMin: "Password must be at least 6 characters",

      success: "Success",
    },
    footer: {
      copy: "Copyright 2025. Made by SG",
    },
  },
  ru: {
    download: {
      download: "Скачать",
      inProgress: "Идёт скачивание...",
      info: "Файл будет сохранён в папку загрузок вашего браузера. Подождите...",
    },
    nav: {
      home: "главная",
      slider: "слайдер",
      inputs: "инпуты",
    },
    homePage: {
      home: "главная",
      slider: "слайдер",
      viewAll: "Смотреть полностью",
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
      passwordMismatch: "Пароли не совпадают",

      agreeRequired: "Необходимо согласиться с правилами",

      login: "авторизация",
      loginBtn: "войти",
      required: "Поле обязательно",
      emailInvalid: "Неверный email",
      passwordMin: "Минимум 6 символов",

      success: "успешно",
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
