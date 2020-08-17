<template>
  <div>
    <form @submit.prevent="sendProduct">
      <div class="py-4">
        <h1 class="text-2xl font-semibold text-gray-700">
          Berikan barang gratis
        </h1>
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
          placeholder="Tulis deskripsi"
          required
        ></textarea>
      </label>
      <div class="mt-4">
        <button
          class="block w-full px-4 py-2 text-center text-white duration-500 bg-blue-500 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Kirim
        </button>
      </div>
      <div v-if="done">
        <nuxt-link
          class="block w-full px-4 py-2 mt-2 text-center text-white duration-500 bg-blue-500 rounded-md hover:bg-blue-600"
          :to="{ name: 'barang-slug', params: { slug: slug } }"
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
    title: 'Berikan barang gratis',
  },
  middleware: 'auth',
  data() {
    return {
      product: {
        name: '',
        detail: ''
      },
      done: false,
      slug: '',
    }
  },
  methods: {
    sendProduct() {
      this.$apollo
        .mutate({
          variables: {
            name: this.product.name,
            detail: this.product.detail,
          },
          mutation: gql`
            mutation($name: String!, $detail: String!) {
              createProduct(input: { name: $name, detail: $detail }) {
                message
                slug
              }
            }
          `,
        })
        .then((res) => {
          this.$toast.success('Sukses mengirim barang.', {
            duration: 6000,
          })
          this.slug = res.data.createProduct.slug
          this.done = true
          this.product.name = ''
          this.product.detail = ''
        })
        .catch(() => {
          this.$toast.error('Gagal mengirim barang.', {
            duration: 6000,
          })
        })
    },
  },
}
</script>
