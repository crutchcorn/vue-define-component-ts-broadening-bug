<script setup lang="ts" generic="TStr extends 'one' | 'two', TNum extends TStr extends 'one' ? 1 : 2">
const props = defineProps<{
  str: TStr,
  num: TNum,
  numFn: (num: TNum) => TNum
}>()
</script>

<template>
  <div>
    <p>str: {{ props.str }}</p>
    <p>num: {{ props.num }}</p>
  </div>
</template>
