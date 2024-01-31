<script setup lang="ts">  
import { ref, watch, type Ref } from 'vue';

const props = withDefaults(
  defineProps<{
    required: boolean;
    modelValue?: number | string;
  }>(),
  {
    required: true,
    modelValue: null
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

const reformatInput = (value:any) => {
  value = value.toString().replace(/\D+/g, '')
  return value;

};

const isWordTooLong = (value: string) => {
  return value.length > 4
};

</script>

<template>
    <input
      type="text"
      :id="modelValue?.toString()"
      v-bind="$attrs"
      :value="modelValue ? Intl.NumberFormat('fr-FR').format(reformatInput(modelValue)) : null"
      :required="required"
      class="p-1"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :style="{ width: `${width}px` }"
    /> 
</template>