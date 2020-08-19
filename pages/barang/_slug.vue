<template>
  <div>
    <div>
      <h1 class="text-3xl font-bold text-gray-800">
        {{ product.name }}
      </h1>
      <p class="py-8">{{ product.detail }}</p>
    </div>
    <div class="py-4">
      <div v-if="$auth.loggedIn">
        <p>Hubungi kontak berikut:</p>
        <p><strong>Email</strong>: {{ product.user && product.user.email }}</p>
      </div>
      <div v-else>
        <nuxt-link
          to="/login"
          class="block px-4 py-2 text-center text-white duration-500 bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Login untuk menghubungi pemberi
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  head: {
    title: 'Detail produk',
  },
  data() {
    return {
      product: '',
      slug: '',
    }
  },
  async created() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      const slug = this.$route.params.slug
      const product = await this.$apollo.mutate({
        variables: {
          slug,
        },
        mutation: gql`
          mutation($slug: String!) {
            getProduct(input: { slug: $slug }) {
              product {
                id
                name
                detail
                user {
                  id
                  name
                  email
                }
              }
            }
          }
        `,
      })
      const result = product.data.getProduct.product
      this.product = result
    },
  },
}
</script>
