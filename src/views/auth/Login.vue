<template>
  <div class="bg">
  <!-- Main content -->
  <div class="main-content" style="height: 100%; width: 100%; background-color: #142c4c; position: absolute">
    <!-- Header -->
    <div class="header bg-gradient-primary py-7 " >
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 class="text-white">Selamat Datang Admin!</h1>
              <p class="text-lead text-white">Dapatkan akses masuk aplikasi dengan mengisi form di bawah.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="card bg-secondary border-0 mb-0">

            <!-- <div class="card-header bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
              <div class="btn-wrapper text-center">
                <a href="http://localhost:8000/sign-in/github" target="_blank" class="btn btn-neutral btn-icon" >
                  <span class="btn-inner--icon"><img src="../../../public/assets/img/icons/common/github.svg"></span>
                  <span class="btn-inner--text">Github</span>
                </a>
                <a href="http://localhost:8000/sign-in/google" target="_blank" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"><img src="../../../public/assets/img/icons/common/google.svg"></span>
                  <span class="btn-inner--text">Google</span>
                </a>
              </div>
            </div> -->

            <div class="alert alert-dismissible fade show" :class="alert_variant" style="border-radius:0" role="alert" v-if="error">
                <span class="alert-text"><strong>{{alert_message}}</strong> </span>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="error = false">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>


            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                  Silahkan masukkan info akun Anda unutk melanjutkan
              </div>
              <form role="form">
                <div class="form-group mb-3">
                  <div class="input-group input-group-merge input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fa fa-user-circle"></i></span>
                    </div>
                    <input class="form-control" placeholder="Username" type="text" v-model="username" required>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-merge input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input class="form-control" placeholder="Password" type="password" v-model="password" required>
                  </div>
                </div>
                <!-- <div class="custom-control custom-control-alternative custom-checkbox">
                  <input class="custom-control-input" id=" customCheckLogin" type="checkbox">
                  <label class="custom-control-label" for=" customCheckLogin">
                    <span class="text-muted">Remember me</span>
                  </label>
                </div> -->
                <div class="text-center">
                  <button type="button" @click="login" class="btn btn-primary my-4">Masuk!</button>
                </div>
              </form>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <small class="text-light">Belum punya akun? <router-link class="text-light" to="register"><b>Daftar</b></router-link></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <pre>{{response}}</pre>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            response: '',
            error: false,
            success: false,
            alert_variant: '',
            alert_message: ''
        }
    },
    methods: {
      login() {
        console.log('Tunggu sebentar ya..')
        const data = {
          username: this.username,
          password: this.password,
        }  
        this.$store.dispatch('login', data)
          .then(response => {
            this.success = true
            console.log(response.data.message);
            console.log('Selamat Datang..');
          // this.$router.push('/dashboard')
        })
        .catch(error => {
          if (!data.username && data.password) {
            this.alert_message = error.response.data.errors.username[0]
          } else if (data.username && !data.password) {
            this.alert_message = error.response.data.errors.password[0]
          } else {
            this.alert_message = error.response.data.message
          }
          this.dangerAlert()
        })
      },
      successAlert() {
        this.success = true
        this.error = false
        this.alert_variant = 'alert-success'        
      },

      dangerAlert(message) {
        this.success = false
        this.error = true
        this.alert_variant = 'alert-danger'
      },
      loginGithub() {
        this.axios.get('sign-in/github').then(
          this.$store.dispatch('loginGithub').then(response => {
            this.response = response.user
            console.log('response');
            console.log(this.response);
            // this.$router.push('/login')
          })
        )
      }
    }
}
</script>

<style>

</style>