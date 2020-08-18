<template>
  <div>
    <div class="py-4">
      <h1 class="text-2xl font-semibold text-gray-700">Barangku</h1>
    </div>
    <div class="mt-4 space-y-4 text-gray-800">
      <div v-for="product in myProducts" :key="product.id">
        <div>
          <nuxt-link
            :to="{ name: 'barang-slug', params: { slug: product.slug } }"
            class="block py-2 text-xl font-semibold duration-500 hover:text-blue-500"
          >
            {{ product.name }}
          </nuxt-link>
        </div>
        <div class="flex mt-1 space-x-2">
          <nuxt-link
            :to="{ name: 'barangku-edit', params: { slug: product.slug } }"
            class="px-4 py-2 text-sm duration-500 rounded-md hover:bg-blue-400"
          >
            Edit
          </nuxt-link>
          <button
            @click="deleteProduct(product.slug)"
            class="px-4 py-2 text-sm duration-500 rounded-md hover:bg-red-400"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  head: {
    title: 'Barangku',
  },
  middleware: 'auth',
  data() {
    return {
      myProducts: '',
    }
  },
  apollo: {
    myProducts: gql`
      query {
        myProducts {
          id
          slug
          name
          detail
        }
      }
    `,
  },
  methods: {
    async deleteProduct(slug) {
      await this.$apollo
        .mutate({
          variables: {
            slug,
          },
          mutation: gql`
            mutation($slug: String!) {
              deleteProduct(input: { slug: $slug }) {
                message
              }
            }
          `,
        })
        .then(() => {
          this.$toast.success('Barang telah dihapus.', {
            duration: 6000,
          })
        })
        .catch(() => {
          this.$toast.error('Barang gagal dihapus', {
            duration: 6000,
          })
        })
    },
  },
}
</script>
