import { ref, watchEffect } from "vue";

export function useTheme() {
  // сразу берём класс body, если установлен в index.html
  const theme = ref(document.body.className || "light");

  // флаг для включения transition после первого рендера
  const transitionReady = ref(false);

  watchEffect(() => {
    // устанавливаем класс на body
    document.body.className = theme.value;

    // сохраняем выбор в localStorage
    localStorage.setItem("theme", theme.value);

    // включаем плавный переход только один раз
    if (!transitionReady.value) {
      setTimeout(() => {
        document.body.style.transition = "background-color 0.3s, color 0.3s";
        transitionReady.value = true;
      }, 0);
    }
  });

  function toggleTheme() {
    theme.value = theme.value === "dark" ? "light" : "dark";
  }

  return { theme, toggleTheme };
}
