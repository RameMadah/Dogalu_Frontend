<template>
  <main class="form-signin">
    <form>
    <!--  <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
      <h1 class="h3 mb-3 fw-normal" @submit.prevent="this">Sign in</h1>

      <div class="form-floating">
        <input v-model='email' type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input v-model='password' type="password" class="form-control" id="floatingInput2" placeholder=" ">
        <label for="floatingInput">password</label>
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Anmelden</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
  </main>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  submit () {
    const sbody = {
      email: this.email,
      password: this.password
    }
    var myHeaders = new Headers()
    const router = useRouter()
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      credentials: 'include',
      redirect: 'follow',
      body: JSON.stringify(sbody)
    }

    fetch('http://localhost:8010/api/v1/sign-in', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
    router.push('/')
  }
  /// const base = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/blogs'
  /// const requestOptions = {
  /// method: 'GET',
  ///   redirect: 'follow'
  /// }

  /// fetch(base, requestOptions).then(response => response.json())  .then(result => result.forEach(blog => {this.blogs.push(blog)})).catch(error => console.log('error', error))
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
