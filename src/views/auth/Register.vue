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
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                  Silahkan masukkan info Anda untuk mendaftar
              </div>
                <div class="alert alert-success" role="alert" v-if="info">
                    <strong>Success!</strong> {{message}}
                </div>
              <form role="form">
                <div class="form-group mb-3">
                  <div class="input-group input-group-merge input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                    </div>
                    <input class="form-control" placeholder="Nama Petugas" type="text" v-model="nama_petugas">
                  </div>
                </div>
                <div class="form-group mb-3">
                  <div class="input-group input-group-merge input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                    </div>
                    <input class="form-control" placeholder="Username" type="text" v-model="username">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-merge input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input class="form-control" placeholder="Password" type="password" v-model="password">
                  </div>
                </div>
                <!-- <div class="custom-control custom-control-alternative custom-checkbox">
                  <input class="custom-control-input" id=" customCheckLogin" type="checkbox">
                  <label class="custom-control-label" for=" customCheckLogin">
                    <span class="text-muted">Remember me</span>
                  </label>
                </div> -->
                <div class="text-center">
                  <button type="button" @click="register" class="btn btn-primary my-4">Daftar!</button>
                </div>
              </form>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <small class="text-light">Sudah punya akun? <router-link class="text-light" to="login"><b>Masuk</b></router-link></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            nama_petugas: '',
            password: '',
            message: '',
            info: false,
        }
    },
    methods: {
        register() {
          console.log('Tunggu sebentar ya..');
            this.info = true
            const dataRegister = {
                nama_petugas: this.nama_petugas,
                username: this.username,
                password: this.password,
            }
            this.$store.dispatch('register', dataRegister)
            .then(response => {
                this.message = response.data.message
                setTimeout(this.$router.push('/login'), 3000)
                this.info = false
            }).catch(error => {
                this.message = error.response
                setTimeout(this.info = false, 4000)
            })
        }
    }
}
</script>

<style>

</style>