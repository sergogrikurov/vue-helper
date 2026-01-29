<script setup>
import { useRouter, useRoute } from "vue-router";
import GitHub from "@/assets/images/github.svg";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const router = useRouter();
const route = useRoute();
</script>
<template>
  <footer class="footer">
    <div class="footer__top">
      <a
        href="https://github.com/sergogrikurov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="GitHub" alt="GitHub logo" />
      </a>
      <a href="mailto:sergogrikurov@gmail.com">sergogrikurov@gmail.com</a>
    </div>
    <div class="footer__copy">© {{ t("footer.copy") }}</div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: rem(50) 0;
  display: grid;
  place-items: center;
  text-align: center;
  gap: rem(50);
  &__top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & a:hover {
      color: #fff;
    }
  }

  &__copy {
    display: flex;
    align-items: center;
  }
}
</style>
