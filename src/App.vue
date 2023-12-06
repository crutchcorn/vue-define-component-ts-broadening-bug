<script setup lang="ts">
import Test from "./Test.vue"
import {Test2} from './Test2'
</script>

<template>
  <!-- These two are correct: -->
  <!-- val is `1` -->
  <Test str="one" :num="1" :numFn="val => val" />
  <!-- val is `2` -->
  <Test str="two" :num="2" :numFn="val => val" />
  <!-- These two are wrong: -->
  <!-- val is `1 | 2` -->
  <Test2 str="one" :num="1" :numFn="val => val" />
  <!-- val is `1 | 2` -->
  <Test2 str="two" :num="2" :numFn="val => val" />
</template>
