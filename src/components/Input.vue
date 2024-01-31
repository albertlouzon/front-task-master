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

let size: Ref<number> = ref(4)

const emit = defineEmits<{
    (event: 'update:modelValue', payload: number): void;
}>();

watch(() => props.modelValue, (newVal) => {
  if(newVal && isWordTooLong(newVal.toString())) {
    size.value = newVal.toString().length;
  } 
});

const reformatInput = (value:any) => {
  value = value.toString().replace(/\D+/g, '')
  return value;
};

const isWordTooLong = (value: string) => {
  return value.length >= size.value;
};

</script>

<template>
    <input
      type="text"
      :id="modelValue?.toString()"
      :size="size"
      :value="modelValue ? Intl.NumberFormat('fr-FR').format(reformatInput(modelValue)) : null"
      :required="required"
      class="p-1 w-[72]"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    /> 
</template>