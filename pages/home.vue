<template>
  <div>
    <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex flex-col space-y-6">
        <div
          class="p-4 border rounded-md"
          v-for="product in allProducts"
          :key="product.id"
        >
          <nuxt-link
            to="#"
            class="text-2xl font-bold leading-snug text-indigo-600"
          >
            {{ product.name }}
          </nuxt-link>
          <hr class="my-4" />
          <div class="flex justify-end">
            <p>
              Diberikan oleh: <strong>{{ product.user.name }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  head: {
    title: 'Barang Terbaru',
  },
  data() {
    return {
      allProducts: '',
    }
  },
  apollo: {
    allProducts: gql`
      query {
        allProducts {
          id
          name
          slug
          user {
            name
          }
        }
      }
    `,
  },
}
</script>
