<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useInjectAuth } from '@/store/useAuth'
import FormControl from '@/components/FormControl.vue'
import validatePassword from '@/utils/validatePassword'
import validateEmail from '@/utils/validateEmail'

interface FormData {
  email: string
  password: string
}

const formData = reactive<FormData>({
  email: '',
  password: ''
})

const router = useRouter()
const { signIn } = useInjectAuth()

const handleSignIn = async () => {
  const { email, password } = formData
  await signIn(email, password)
  router.push({ name: 'home' })
}

const handleReset = () => {
  formData.email = ''
  formData.password = ''
}

const isAllValid = computed(() => {
  const { email, password } = formData
  return validateEmail(email) && validatePassword(password) ? true : false
})

const isInputedOneOfThem = computed(() => {
  const { email, password } = formData
  return email.length > 0 || password.length > 0
})
</script>

<template>
  <form novalidate @submit.prevent="handleSignIn" @reset.prevent="handleReset">
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

    <div role="group" class="buttonGroup">
      <button type="submit" :disabled="!isAllValid">로그인</button>
      <button type="reset" :disabled="!isInputedOneOfThem">초기화</button>
    </div>
    <p class="notice">
      아직 회원가입 전이라면?
      <RouterLink :to="{ name: 'signup' }">회원가입</RouterLink> 먼저 진행하세요.
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
