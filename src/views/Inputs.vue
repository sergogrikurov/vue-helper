<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Поля формы
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const termsChecked = ref(false);
const showTermsError = ref(false);
const showPassword = ref(false);

// Параметры пароля
const passwordTouched = ref(false);
const confirmPasswordTouched = ref(false);
const PASSWORD_MIN = 6;
const PASSWORD_MAX = 12;

// touched для email
const emailTouched = ref(false);

// Валидация email
const emailError = computed(() => {
  if (!email.value) return t("inputs.emailRequired");
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email.value) ? "" : t("inputs.emailInvalid");
});

// Валидация пароля

const passwordError = computed(() => {
  if (!password.value && passwordTouched.value)
    return t("inputs.passwordRequired");

  const pattern = /^[A-Za-z0-9]+$/;
  if (!pattern.test(password.value) && passwordTouched.value)
    return t("inputs.passwordPattern");

  if (password.value.length < PASSWORD_MIN && passwordTouched.value)
    return t("inputs.passwordMin", { min: PASSWORD_MIN });
  if (password.value.length > PASSWORD_MAX && passwordTouched.value)
    return t("inputs.passwordMax", { max: PASSWORD_MAX });

  if (
    password.value &&
    confirmPassword.value &&
    password.value !== confirmPassword.value &&
    confirmPasswordTouched.value
  )
    return t("inputs.passwordMismatch");

  return "";
});

const onSubmit = (e) => {
  e.preventDefault();

  // Отмечаем все поля как touched
  emailTouched.value = true;
  passwordTouched.value = true;
  confirmPasswordTouched.value = true;

  // проверяем галочку
  if (!termsChecked.value) {
    showTermsError.value = true;
  } else {
    showTermsError.value = false;
  }
};
</script>

<template>
  <div class="inputs">
    <h2 class="title"><span class="red">/</span>{{ t("inputs.title") }}</h2>
    <section class="inputs__registration inputs-registration">
      <div class="inputs-registration__title">
        <h3 class="title">
          <span class="red">#</span>{{ t("inputs.registration") }}
        </h3>
      </div>
      <form
        class="inputs-registration__form inputs-registration-form"
        @submit="onSubmit"
      >
        <!-- Email -->
        <div class="inputs-registration-form__field">
          <label for="email">{{ t("inputs.email") }}</label>
          <input
            id="email"
            type="email"
            :class="{ 'input-error': emailError && emailTouched }"
            v-model="email"
            @blur="emailTouched = true"
          />
          <!-- сообщение об ошибке -->
          <p v-if="emailTouched && emailError" class="error">
            {{ emailError }}
          </p>
        </div>

        <!-- Password -->
        <div class="inputs-registration-form__field">
          <label for="password">{{ t("inputs.password") }}</label>
          <input
            id="password"
            :type="showPassword ? 'text' : 'password'"
            :class="{ 'input-error': passwordError && passwordTouched }"
            v-model="password"
            @blur="passwordTouched = true"
          />
          <p v-if="passwordError && passwordTouched" class="error">
            {{ passwordError }}
          </p>
        </div>

        <!-- Confirm Password -->
        <div class="inputs-registration-form__field">
          <label for="confirm-password">{{ t("inputs.confPassword") }}</label>
          <input
            id="confirm-password"
            :type="showPassword ? 'text' : 'password'"
            :class="{ 'input-error': passwordError && confirmPasswordTouched }"
            v-model="confirmPassword"
            @blur="confirmPasswordTouched = true"
          />
          <p v-if="passwordError && confirmPasswordTouched" class="error">
            {{ passwordError }}
          </p>
        </div>

        <!-- Show password -->
        <div class="inputs-registration-form__field-inline">
          <div class="inputs-registration-form__field-inline_wrapper">
            <label for="show-password">{{ t("inputs.showPassword") }}</label>
            <input id="show-password" type="checkbox" v-model="showPassword" />
          </div>
        </div>

        <!-- Terms -->
        <div class="inputs-registration-form__field-inline">
          <div class="inputs-registration-form__field-inline_wrapper">
            <label for="terms">{{ t("inputs.agree") }}</label>
            <input id="terms" type="checkbox" v-model="termsChecked" />
          </div>

          <p v-if="showTermsError" class="error">
            {{ t("inputs.agreeRequired") }}
          </p>
        </div>

        <!-- Submit -->
        <div class="inputs-registration-form__button">
          <button type="submit">
            {{ t("inputs.register") }}
          </button>
        </div>
      </form>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.inputs {
  @include adaptive-value(padding-top, 50, 20);
  @include adaptive-value(padding-bottom, 50, 20);
  & > *:not(:last-child) {
    margin-bottom: rem(50);
  }
}
.inputs-registration__title {
  margin-bottom: rem(30);
}
.inputs-registration-form {
  background-color: #c0f3f7;
  padding: rem(20) rem(20);
  border-radius: rem(10);
  display: flex;
  flex-direction: column;
  gap: rem(20);
  max-width: rem(700);
  margin: 0 auto;
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
