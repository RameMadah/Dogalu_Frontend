<template>
  <td>{{item.name}}</td>
  <td>{{item.price}}</td>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      items: [],
      Name: '',
      email: '',
      claims: '',
      accessToken: ''
    }
  },
  methods: {
    loadThings () {
      const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
      const email = this.claims.email
      const endpoint = baseUrl + '/users' + '?owner=' + email
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
          Authorization: 'Bearer ' + this.accessToken
        }
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(thing => {
          this.items.push(thing)
        }))
        .catch(error => console.log('error', error))
    },
    save () {
      const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
      const endpoint = baseUrl + '/users'
      const data = {
        name: this.nameField,
        price: this.priceField,
        owner: this.claims.email
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.accessToken
        },
        body: JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data)
        })
        .catch(error => console.log('error', error))
    },
    async setup () {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser()
        this.accessToken = await this.$auth.getAccessToken()
      }
    }
  },
  async created () {
    await this.setup()
    this.loadThings()
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
