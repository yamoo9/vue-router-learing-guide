<script setup lang="ts">
const model = defineModel()

const { id, label, type, placeholder } = withDefaults(
  defineProps<{
    id: string
    label: string
    type?: 'text' | 'email' | 'password'
    placeholder?: string
  }>(),
  {
    type: 'email',
    placeholder: 'user@company.io'
  }
)
</script>

<template>
  <div class="formControl">
    <label :for="id">{{ label }}</label>
    <input :id="id" :type="type" :placeholder="placeholder" v-model="model" />
  </div>
</template>

<style scoped>
.formControl {
  display: flex;
  flex-flow: column;
  gap: var(--space-2);

  label {
    font-size: 13px;
    color: inherit;
  }

  input {
    padding: var(--space-2);
    background: transparent;
    border: 0;
    border-block-end: 1px solid hsla(var(--white), 0.45);
    color: hsl(var(--white));
    font-size: 16px;
    line-height: 1.2;

    &:focus {
      outline: 0;
      border-block-end-color: hsla(var(--white), 1);
    }
  }

  input::placeholder {
    color: hsla(var(--white), 0.45);
  }
}
</style>
