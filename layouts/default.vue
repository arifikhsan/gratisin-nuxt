<template>
  <div>
    <app-header />
    <div class="max-w-xl p-4 mx-auto text-gray-800">
      <nuxt />
    </div>
  </div>
</template>

<script>
import AppHeader from '~/layouts/components/app-header'
export default {
  components: {
    'app-header': AppHeader,
  },
}
</script>
