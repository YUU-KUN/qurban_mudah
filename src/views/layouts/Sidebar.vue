<template>
  <!-- Sidenav -->
  <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header  align-items-center">
        <a class="navbar-brand" href="javascript:void(0)">
          <img src="../../../public/assets/img/brand/blue.png" class="navbar-brand-img" alt="...">
        </a>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          <!-- Nav items -->
          <ul class="navbar-nav">
            <span v-if="admin">
            <li class="nav-item">
                <router-link class="nav-link" to="/">
                <i class="ni ni-tv-2 text-primary"></i>
                <span class="nav-link-text">Dashboard</span>
               </router-link>
            </li>
            <li class="nav-item">
              <router-link to="siswa" class="nav-link" >
                <i class="ni ni-planet text-orange"></i>
                <span class="nav-link-text">Siswa</span>
              </router-link>
            </li>
            <li class="nav-item">
                <router-link to="petugas" class="nav-link" >
                <i class="ni ni-send text-orange"></i>
                <span class="nav-link-text">Petugas</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="kelas" class="nav-link">
                <i class="ni ni-pin-3 text-primary"></i>
                <span class="nav-link-text">Kelas</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="spp" class="nav-link">
                <i class="ni ni-bullet-list-67 text-default"></i>
                <span class="nav-link-text">SPP</span>
              </router-link>
            </li>
            </span>
            <li class="nav-item">
              <router-link to="pembayaran" class="nav-link">
                <i class="ni ni-single-02 text-yellow"></i>
                <span class="nav-link-text">Pembayaran</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      admin: false
    }
  },
  methods: {
    cekLevel() {
      if (localStorage.getItem('Role') === 'admin') {
        this.admin = true
      }
    }
  },
  mounted() {
    this.cekLevel()
  }
}
</script>

<style>

</style>