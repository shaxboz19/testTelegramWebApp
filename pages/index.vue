<template>
  <div>
    <button @click="onSubmit">
      Send request
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    async onSubmit () {
      try {
        const { data } = await this.$axios.post(
          // 'https://klinika.itsone.uz/request'
          'http://localhost:3001/request'
        )

        window.location.href = data.url
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
