<template>
  <div class="max-w-lg mx-auto py-20">
    <div class="flex items-center gap-2">
      <div :class="`bg-[url('public/cat.png')] bg-no-repeat bg-center bg-contain border-2 border-solid border-${getColor()} rounded-full w-14 h-14`"></div>
      <div>
        <label :class="`text-${getColor()}`" for="hours-old">{{ student.name }} is</label>

        <div class="flex gap-2">
          <div class="flex gap-2">
            <Input :id="student.name" class="border-2 rounded-md border-solid border-purple" @blur="handleFocus(false)" @focus="handleFocus(true)" required v-model="student.age"></Input>
            <div :class="`self-center text-${getColor()}`">hours old</div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { PRIMARY_COLOR, SECONDARY_COLOR } from './constants/Colors'
import Input from "./components/Input.vue";

const student = reactive<{
  name: string,
  age: number | string | undefined;
}>({
  name: 'Hugh',
  age: undefined
})

let isInputFocused = ref(false)

const getColor = () => {
  return isInputFocused.value === true ? SECONDARY_COLOR : PRIMARY_COLOR
};

const handleFocus = (isFocused: boolean) => {
  isInputFocused.value = isFocused
};
</script>

<style></style>
