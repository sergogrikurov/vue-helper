import { useI18n } from "vue-i18n";

export function useLangRoute() {
  const { locale } = useI18n();

  const langRoute = (name, params = {}) => {
    return {
      name,
      params: { ...params, lang: locale.value },
    };
  };

  return { langRoute };
}
