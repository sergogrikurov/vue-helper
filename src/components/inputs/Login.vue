<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import Modal from "./Modal.vue";

const { t } = useI18n();

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const emailTouched = ref(false);
const passwordTouched = ref(false);

const modalOpen = ref(false);

// Email
const emailError = computed(() => {
  if (!email.value) return t("inputs.required");
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.value) ? "" : t("inputs.emailInvalid");
});

// Password
const passwordError = computed(() => {
  if (!password.value) return t("inputs.required");
  if (password.value.length < 6) return t("inputs.passwordMin");
  return "";
});

const submitForm = () => {
  emailTouched.value = true;
  passwordTouched.value = true;

  const isValid = !emailError.value && !passwordError.value;

  if (isValid) {
    modalOpen.value = true;

    // сброс формы
    email.value = "";
    password.value = "";
    showPassword.value = false;

    // сброс touched
    emailTouched.value = false;
    passwordTouched.value = false;
  }
};
</script>

<template>
  <section class="inputs__login inputs-login">
    <div class="inputs-login__title">
      <h3 class="title"><span class="red">#</span>{{ t("inputs.login") }}</h3>
    </div>
    <form
      class="inputs-login__form inputs-login-form"
      @submit.prevent="submitForm"
    >
      <!-- Email -->
      <div class="inputs-login-form__field">
        <label for="email">{{ t("inputs.email") }}</label>
        <input
          id="email"
          type="email"
          v-model="email"
          @blur="emailTouched = true"
          :class="{ 'input-error': emailError && emailTouched }"
        />

        <!-- сообщение об ошибке -->
        <p v-if="emailError && emailTouched" class="error">
          {{ emailError }}
        </p>
      </div>

      <!-- Password -->
      <div class="inputs-login-form__field">
        <label for="password">{{ t("inputs.password") }}</label>
        <input
          id="password"
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          @blur="passwordTouched = true"
          :class="{ 'input-error': passwordError && passwordTouched }"
        />

        <!-- сообщение об ошибке -->
        <p v-if="passwordError && passwordTouched" class="error">
          {{ passwordError }}
        </p>
      </div>

      <!-- Show password -->
      <div class="inputs-login-form__field-inline">
        <div class="inputs-login-form__field-inline_wrapper">
          <label for="show-password">{{ t("inputs.showPassword") }}</label>
          <input id="show-password" type="checkbox" v-model="showPassword" />
        </div>
      </div>

      <!-- Submit -->
      <div class="inputs-login-form__button">
        <button type="submit">
          {{ t("inputs.loginBtn") }}
        </button>
      </div>
    </form>
    <Modal :show="modalOpen" :duration="1000" @close="modalOpen = false">
      <h3>✅ {{ t("inputs.success") }}</h3>
    </Modal>
  </section>
</template>
<style lang="scss" scoped>
.inputs-login-form {
  background-color: #c0f3f7;
  padding: rem(20) rem(20);
  border-radius: rem(10);
  display: flex;
  flex-direction: column;
  gap: rem(20);
  max-width: rem(700);
  margin: rem(50) auto;
  box-shadow: 0 4px 10px rgba(192, 243, 247, 0.6);
  transition: box-shadow 0.3s ease;

  &__field {
    display: flex;
    flex-direction: column;
    gap: rem(10);
    & input {
      border-radius: rem(5);
      padding: rem(5) rem(10);
      font-size: rem(20);
      background-color: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
      transition:
        border 0.2s ease,
        box-shadow 0.2s ease,
        background-color 0.2s ease;

      &:hover {
        border-color: rgba(0, 0, 0, 0.25);
        background-color: #fdfdfd;
      }

      &:focus {
        outline: none;
        border-color: $main-color;
        box-shadow: 0 0 0 3px rgba($main-color, 0.2);
        background-color: #ffffff;
      }
    }
    .input-error {
      border-color: red;
    }
  }

  &__field-inline {
    display: flex;
    flex-direction: column;
    &_wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: rem(190);
    }
    & input,
    label {
      cursor: pointer;
    }
  }
  &__button {
    display: flex;
    justify-content: center;
    & button {
      color: $main-color;
      background-color: white;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: rem(5) rem(10);
      border-radius: rem(5);
      font-size: rem(20);
      font-weight: 500;
      transition:
        all 0.3s ease,
        transform 0.2s ease;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

      &:hover {
        color: black;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba($main-color, 0.3);
      }
    }
  }
}
</style>
