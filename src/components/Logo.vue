<template>
  <div class="logo">
    <span class="logo__first-letter">S</span>
    <span class="logo__last-letter">G</span>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  color: var(--title-color);
  display: inline-block;
  font-size: rem(20);
  position: relative;
  width: rem(17);
  height: rem(28);
  transition: all 0.3s ease;
  &:hover {
    scale: 1.2;
  }
  &__first-letter {
    position: absolute;
  }
  &__last-letter {
    position: absolute;
    top: rem(8);
    left: rem(3);
  }
}
</style>
