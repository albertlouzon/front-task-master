<script setup lang="ts">  
import { ref, defineProps, watch, type Ref } from 'vue';

const props = withDefaults(
  defineProps<{
    required: boolean;
    modelValue?: number | string;
  }>(),
  {
    required: true,
    modelValue: undefined
  }
);

let width: Ref<number> = ref(72)

const emit = defineEmits<{
    (event: 'update:modelValue', payload: number): void;
}>();

watch(() => props.modelValue, (newVal) => {
  if(newVal && isWordTooLong(newVal.toString())) {
    width.value = width.value + 8
  }
});

const isWordTooLong = (value: string) => {
  return value.length > 4
};


</script>

<template>
    <input
      type="number"
      :id="modelValue?.toString()"
      v-bind="$attrs"
      :value="modelValue"
      :required="required"
      class="p-1"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :style="{ width: `${width}px` }"
    > 
</template>