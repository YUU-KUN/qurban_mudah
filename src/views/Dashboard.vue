<template>
  <div>
      <!-- Card stats -->
          <div class="row">
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div v-if="loadingPetugas">
                    <content-loader
                  viewBox="0 0 476 124"
                  primaryColor="#f3f3f3"
                  secondaryColor="#cccccc"
                >
                  <rect x="10" y="8" rx="3" ry="3" width="245" height="15" />
                  <rect x="10" y="56" rx="3" ry="3" width="500" height="15" />
                  <rect x="10" y="116" rx="3" ry="3" width="300" height="15" />
                </content-loader>
                  </div>
                  <div v-else>
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Total Petugas</h5>
                      <!-- <span  >
                        <hollow-dots-spinner
                        style="margin-top: 10px"
                          :animation-duration="1000"
                          :dot-size="10"
                          :dots-num="3"
                          color="#ff1d5e"
                        />
                      </span> -->
                      <span class="h2 font-weight-bold mb-0">{{totalPetugas}}</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                        <i class="ni ni-active-40"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                    <span class="text-nowrap">Since last month</span>
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div v-if="loadingSiswa">
                    <content-loader
                  viewBox="0 0 476 124"
                  primaryColor="#f3f3f3"
                  secondaryColor="#cccccc"
                >
                  <rect x="10" y="8" rx="3" ry="3" width="245" height="15" />
                  <rect x="10" y="56" rx="3" ry="3" width="500" height="15" />
                  <rect x="10" y="116" rx="3" ry="3" width="300" height="15" />
                </content-loader>
                  </div>
                  <div v-else>
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Total Siswa</h5>
                      <span class="h2 font-weight-bold mb-0">{{totalSiswa}}</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                        <i class="ni ni-chart-pie-35"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                    <span class="text-nowrap">Since last month</span>
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div v-if="loadingKelas">
                    <content-loader
                  viewBox="0 0 476 124"
                  primaryColor="#f3f3f3"
                  secondaryColor="#cccccc"
                >
                  <rect x="10" y="8" rx="3" ry="3" width="245" height="15" />
                  <rect x="10" y="56" rx="3" ry="3" width="500" height="15" />
                  <rect x="10" y="116" rx="3" ry="3" width="300" height="15" />
                </content-loader>
                  </div>
                  <div v-else>
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Total Kelas</h5>
                      <span class="h2 font-weight-bold mb-0">{{totalKelas}}</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                        <i class="ni ni-money-coins"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                    <span class="text-nowrap">Since last month</span>
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div v-if="loadingSPP">
                    <content-loader
                  viewBox="0 0 476 124"
                  primaryColor="#f3f3f3"
                  secondaryColor="#cccccc"
                >
                  <rect x="10" y="8" rx="3" ry="3" width="245" height="15" />
                  <rect x="10" y="56" rx="3" ry="3" width="500" height="15" />
                  <rect x="10" y="116" rx="3" ry="3" width="300" height="15" />
                </content-loader>
                  </div>
                  <div v-else>
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Total SPP</h5>
                      <span class="h2 font-weight-bold mb-0">{{totalSPP}}</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                        <i class="ni ni-chart-bar-32"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                    <span class="text-nowrap">Since last month</span>
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
      </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'
export default {
  components: {
    ContentLoader
  },
  data() {
    return {
      totalPetugas: '',
      totalSiswa: '',
      totalKelas: '',
      totalSPP: '',
      loadingPetugas: false,
      loadingSiswa: false,
      loadingKelas: false,
      loadingSPP: false,
    }
  },
  methods: {
    getTotalPetugas() {
      this.loadingPetugas = true
      this.axios.get('petugas').then(response => {
        this.totalPetugas = response.data.length
        this.loadingPetugas = false
      }).catch(error => {
        console.log(error.response);
        this.loadingPetugas = false
      })
    },
    getTotalSiswa() {
      this.loadingSiswa = true
      this.axios.get('siswa').then(response => {
        this.totalSiswa = response.data.data.length
        this.loadingSiswa = false
      })
    },
    getTotalKelas() {
      this.loadingKelas = true
      this.axios.get('kelas').then(response => {
        this.totalKelas = response.data.data.length
        this.loadingKelas = false
      }).catch(error => {
        console.log(error.response);
      })
    },
    getTotalSPP() {
      this.loadingSPP = true
      this.axios.get('spp').then(response => {
        this.totalSPP = response.data.length
        this.loadingSPP = false
      })
    },
  },
  mounted() {
    this.getTotalPetugas()
    this.getTotalSiswa()
    this.getTotalKelas()
    this.getTotalSPP()
  }
}
</script>

<style>

</style>