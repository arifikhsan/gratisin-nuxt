<template>
  <div>
    <app-header />
    <div>
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
