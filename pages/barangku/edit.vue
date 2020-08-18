<template>
  <div>
    <form @submit.prevent="updateProduct">
      <div class="py-4">
        <h1 class="text-2xl font-semibold text-gray-700">Edit barang</h1>
      </div>
      <label class="block">
        <span class="text-gray-700">Nama</span>
        <input
          type="text"
          v-model="product.name"
          class="block w-full mt-1 form-input"
          placeholder="Nama barang"
        />
      </label>
      <label class="block mt-3">
        <span class="text-gray-700">Deskripsi</span>
        <textarea
          v-model="product.detail"
          class="block w-full mt-1 form-textarea"
          rows="3"
          placeholder="Tulis deskripsi barang"
          required
        ></textarea>
      </label>
      <div class="mt-4">
        <button
          class="block w-full px-4 py-2 text-center text-white duration-500 bg-blue-500 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Update
        </button>
      </div>
      <div v-if="done">
        <nuxt-link
          class="block w-full px-4 py-2 mt-2 text-center text-white duration-500 bg-blue-500 rounded-md hover:bg-blue-600"
          :to="{ name: 'barang-slug', params: { slug: newslug } }"
        >
          <a>Lihat barang</a>
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  head: {
    title: 'Edit barang',
  },
  middleware: 'auth',
  data() {
    return {
      product: '',
      done: false,
      newslug: '',
    }
  },
  created() {
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
              }
            }
          }
        `,
      })
      const result = product.data.getProduct.product
      this.product = result
    },
    updateProduct() {
      this.$apollo
        .mutate({
          variables: {
            slug: this.$route.params.slug,
            name: this.product.name,
            detail: this.product.detail,
          },
          mutation: gql`
            mutation($slug: String!, $name: String!, $detail: String!) {
              updateProduct(
                input: { slug: $slug, name: $name, detail: $detail }
              ) {
                message
                slug
              }
            }
          `,
        })
        .then((res) => {
          this.$toast.success('Sukses mengupdate barang.', {
            duration: 6000,
          })
          this.newslug = res.data.updateProduct.slug
          this.done = true
        })
        .catch(() => {
          this.$toast.error('Gagal mengupdate barang.', {
            duration: 6000,
          })
        })
    },
  },
}
</script>
