<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useInjectAuth } from '@/store/useAuth'
import FormControl from '@/components/FormControl.vue'
import validateEmail from '@/utils/validateEmail'
import validatePassword from '@/utils/validatePassword'

interface FormData {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  password: '',
  passwordConfirm: ''
})

const router = useRouter()

const { signUp } = useInjectAuth()

const handleSignUp = async () => {
  const { name, email, password, passwordConfirm } = formData
  await signUp({
    name,
    email,
    password,
    passwordConfirm
  })

  router.push({ name: 'signin' })
}

const handleReset = () => {
  formData.name = ''
  formData.email = ''
  formData.password = ''
  formData.passwordConfirm = ''
}

const isAllValid = computed(() => {
  const { name, email, password, passwordConfirm } = formData

  const isValidName = name.length > 1
  const isValidEmail = validateEmail(email)
  const isValidPassword = validatePassword(password)
  const isValidPasswordConfirm = password === passwordConfirm

  return isValidName && isValidEmail && isValidPassword && isValidPasswordConfirm ? true : false
})

const isInputedOneOfThem = computed(() => {
  const { name, email, password, passwordConfirm } = formData
  return name.length > 0 || email.length > 0 || password.length > 0 || passwordConfirm.length > 0
})
</script>

<template>
  <form novalidate @submit.prevent="handleSignUp" @reset.prevent="handleReset">
    <FormControl
      v-model="formData.name"
      id="name"
      label="이름"
      type="text"
      placeholder="2글자 이상 입력"
    />

    <FormControl
      v-model="formData.email"
      id="email"
      label="이메일"
      type="email"
      placeholder="유효한 이메일 주소 입력"
    />

    <FormControl
      v-model="formData.password"
      id="password"
      label="패스워드"
      type="password"
      placeholder="영문,숫자,특수문자 조합 6자리 이상 입력"
    />

    <FormControl
      v-model="formData.passwordConfirm"
      id="passwordConfirm"
      label="패스워드 확인"
      type="password"
      placeholder="입력한 패스워드와 동일하게 입력"
    />

    <div role="group" class="buttonGroup">
      <button type="submit" :disabled="!isAllValid">회원가입</button>
      <button type="reset" :disabled="!isInputedOneOfThem">초기화</button>
    </div>
    <p class="notice">
      이미 회원가입을 했다면?
      <RouterLink :to="{ name: 'signin' }">로그인</RouterLink> 하세요.
    </p>
  </form>
</template>

<style scoped>
form {
  inline-size: clamp(300px, 80vw, 800px);
  margin: 60px auto;
  display: flex;
  flex-flow: column;
  gap: var(--space-10);
  color: hsl(var(--white));
}

.buttonGroup {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space);

  button {
    padding: var(--space-2) var(--space-4);
  }
}

.notice {
  margin-block: 0;
  font-size: 13px;
  line-height: 1.7;
  translate: 0 -16px;
  text-align: center;

  a {
    display: inline-block;
    color: color-mix(in hsl shorter hue, hsl(var(--primary)) 100%, hsl(var(--white)) 50%);
    text-underline-offset: 4px;
    translate: 0 -1px;
  }
}
</style>
