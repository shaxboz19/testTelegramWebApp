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
        const xml = '<TKKPG><Request><Operation>CreateOrder</Operation><Language>RU</Language><Order><OrderType>Purchase</OrderType><Merchant>SLOMBARD20001748</Merchant><Amount>100</Amount><Currency>398</Currency><Description>Test</Description><AddParams><OrderExpirationPeriod>30</OrderExpirationPeriod></AddParams></Order></Request></TKKPG>'
        const config = {
          headers: { 'Content-Type': 'text/xml' }
        }
        await this.$axios.post(
          'https://epay.fortebank.com/cardregistrationindex.jsp?approveUrl=https://klinika.itsone.uz/test&declineUrl=https://klinika.itsone.uz/test',
          xml, config
        )
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
