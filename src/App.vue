<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { locale } = useI18n();
const router = useRouter();

router.isReady().then(() => {
  const langFromRoute = router.currentRoute.value.params.lang;
  const langFromStorage = localStorage.getItem("lang");

  locale.value = langFromRoute || langFromStorage || "en";
});
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
