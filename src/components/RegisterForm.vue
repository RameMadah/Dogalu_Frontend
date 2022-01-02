<template>
  <main class="form-signin">
    <form @submit="submit">
      <!--  <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
      <h1 class="h3 mb-3 fw-normal">Sign-Up </h1>

      <div class="form-floating">
        <input  v-model = "firstname" type="text" class="form-control" id="vorname" placeholder="Vorname">
        <label for="floatingInput">Vorname</label>
      </div>
      <div class="form-floating">
        <input v-model = "lastname" type="text" class="form-control" id="Nachname" placeholder="Nachname">
        <label for="floatingInput">Nachname</label>
      </div>
      <div class="form-floating">
        <input v-model = "email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input v-model = "password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Registrieren</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
  </main>
</template>

<script >

import { useRouter } from 'vue-router'

export default {
  name: 'RegisterForm',
  data () {
    return {
      title: '',
      description: '',
      punkte: ''
    }
  },
  methods: {
    submit () {
      const router = useRouter()
      var raw = JSON.stringify({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      })

      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('http://localhost:8010/api/v1/users', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
      router.push('/login')
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
