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
        await this.$axios.post(
          'https://klinika.itsone.uz/request'
        )
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
