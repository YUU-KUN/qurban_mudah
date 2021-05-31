<template>
  <div class="row">
        <div class="col">
          <div class="card">
            <div v-if="spp.length == 0">
              <div class="card-header">
                <div class="col" style="text-align:center;  margin-bottom:50px; ">
                  <!-- <div style="height: 100%; display:block; padding:auto 0"> -->
                    <img src="../../public/assets/img/theme/vue.jpg" alt="" srcset="">
                    <p>Ups. Belum ada data SPP nih..</p>
                    <button class="btn btn-success" @click="createSPP" data-toggle="modal" data-target="#modalSPP"><span class="alert-icon"><i class="ni ni-fat-add"></i></span>SPP</button>
                  <!-- </div> -->
                </div>
              </div>
            </div>
            <div v-else>
              <div v-if="spp == ''">
              <content-loader
                  viewBox="0 0 476 124"
                  primaryColor="#f3f3f3"
                  secondaryColor="#cccccc"
                >
                  <rect x="10" y="8" rx="3" ry="3" width="65" height="6" />
                  <rect x="10" y="26" rx="3" ry="3" width="52" height="6" />
                  <rect x="20" y="56" rx="3" ry="3" width="300" height="6" />
                  <rect x="20" y="72" rx="3" ry="3" width="300" height="6" />
                  <rect x="20" y="88" rx="3" ry="3" width="178" height="6" />
                </content-loader>
            </div>
            <!-- Card header -->
            <div class="card-header border-0">
              <div class="alert alert-dismissible fade show" :class="alertVariant" role="alert" v-show="alert">
                <!-- <span class="alert-icon"><i class="ni ni-like-2"></i></span> -->
                <span class="alert-text"><strong>{{alertMessage}}</strong></span>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="!alert">
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <button class="btn btn-success" @click="createSPP" data-toggle="modal" data-target="#modalSPP"><span class="alert-icon"><i class="ni ni-fat-add"></i></span>SPP</button>
            </div>
            <!-- Light table -->
            <div class="table-responsive">
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                      <th></th>
                    <th scope="col">No.</th>
                    <th scope="col">Tahun SPP</th>
                    <th scope="col">Nominal SPP</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="(spp, index) in spp" :key="index">
                    <td></td>
                    <td>
                        {{index+1}}
                    </td>
                    <td>
                      {{spp.tahun}}
                    </td>
                    <td>
                      {{spp.nominal | rupiah}}
                    </td>
                    <td>
                        <button class="btn btn-success" data-toggle="modal" :data-target="'#modaldetailSPP'+index" @click="getdetailSPP(index)">Detail</button>
                        <button class="btn btn-primary" @click="updateSPP(index)" data-toggle="modal" data-target="#modalSPP" >Edit</button>
                        <button class="btn btn-danger" @click="deleteSPP(index)">Delete</button>
                    </td>

      <!-- MODAL DETAIL -->
      <div class="modal fade" :id="'modaldetailSPP'+index" tabindex="-1" role="dialog" aria-labelledby="modalDetailSPP" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalDetailSPP"><span v-if="action === 'create'">Tambah</span> <span v-else>Edit</span> SPP</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form> 
                <div class="col">
                  <div class="form-group">
                    <div class="row">
                      <label class="form-control-label" for="input-tahun-spp">Tahun SPP</label>
                      <input type="text" id="input-tahun-spp" class="form-control" placeholder="2021" v-model="detailSPP.tahun" disabled>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                          <label class="form-control-label" for="input-nominal-spp">Nominal SPP</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text sm" >Rp</span>
                            </div>
                            <input type="text" id="input-nominal-spp" class="form-control" placeholder="500000" v-model="detailSPP.nominal" disabled>
                            <div class="input-group-append">
                              <span class="input-group-text">,00</span>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Tutup</button>
              </form>
            </div>
          </div>
        </div>
      </div>
        <!-- END MODAL -->
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            <!-- <pre>{{detailSPP}}</pre> -->

            <div class="modal fade" id="modalSPP" tabindex="-1" role="dialog" aria-labelledby="modalEditSPPLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalEditSPPLabel"><span v-if="action === 'create'">Tambah</span> <span v-else>Edit</span> SPP</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form> 
                <div class="col">
                  <div class="form-group">
                    <div class="row">
                      <label class="form-control-label" for="input-tahun-spp">Tahun SPP</label>
                      <input type="text" id="input-tahun-spp" class="form-control" placeholder="2021" v-model="tahun">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                          <label class="form-control-label" for="input-nominal-spp">Nominal SPP</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text sm" >Rp</span>
                            </div>
                            <input type="text" id="input-nominal-spp" class="form-control" placeholder="500000" v-model="nominal">
                            <div class="input-group-append">
                              <span class="input-group-text">,00</span>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
              <button type="button" @click="save" :class="buttonClass" data-dismiss="modal"><span v-if="action === 'create'" >Tambah</span> <span v-else>Edit</span>!</button>
              </form>
            </div>
            <!-- <div class="modal-footer">
            </div> -->
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
            alert: false,
            id_spp: '',
            spp: '',
            detailSPP: '',
            
            tahun: '',
            nominal: '',
            
            action: '',
            buttonClass: '',

            // alert
            alertVariant: '',
            alertMessage: ''
        }
    },
    methods: {
        getSPP() {
            this.axios.get('spp').then(response => {
                this.spp = response.data
            })
        },
        getdetailSPP(index) {
            this.id_spp = this.spp[index].id_spp
            this.axios.get('spp/'+this.id_spp).then(response => {
                this.detailSPP = response.data
            })
        },
        createSPP() {
          this.action = 'create'
          this.buttonClass = 'btn btn-success'
          this.id_spp = ''
          this.tahun = ''
          this.nominal = ''
        },
        updateSPP(index) {
          this.action = 'update'
          this.buttonClass = 'btn btn-primary'
          this.id_spp = this.spp[index].id_spp
          this.tahun = this.spp[index].tahun
          this.nominal = this.spp[index].nominal
        },
        save() {
          const dataSPP = {
            tahun: this.tahun,
            nominal: this.nominal,
          }
          if (this.action === 'create') {
            this.axios.post('spp', dataSPP).then(response => {
              this.alertSuccess()
              console.log(response);
              this.getSPP()
            }).catch(error => {
              this.alertFailed()
              console.log(error.response)
            })
          } else {
            this.axios.put('spp/'+this.id_spp, dataSPP).then(response => {
              this.alertSuccess()
              console.log(response)
              this.getSPP()
            }).catch(error => {
              this.alertFailed()
              console.log(error.response)
            })
          }
        },
        deleteSPP(index) {
          this.action = 'delete'
          this.id_spp = this.spp[index].id_spp
          this.axios.delete('spp/'+this.id_spp).then(response => {
            this.alertSuccess()
            console.log(response);
            this.getSPP()
          }).catch(error => {
            this.alertFailed()
            console.log(error.response);
          })
        },
        alertSuccess() {
          this.alert = true
          this.alertVariant = 'alert-success'
          if (this.action === 'create') {
            this.alertMessage = "Berhasil menambahkan data SPP"
          } else if (this.action === 'update') {
            this.alertMessage = "Berhasil mengubah data SPP"
          } else {
            this.alertMessage = "Berhasil menghapus data SPP"
          }
        },
        alertFailed() {
          this.alert = true
          this.alertVariant = 'alert-warning'
          if (this.action === 'update') {
            this.alertMessage = "Gagal menambahkan data SPP"
          } else if (this.action === 'update') {
            this.alertMessage = "Gagal mengubah data SPP"
          } else {
            this.alertMessage = "Gagal menghapus data SPP"
          }
        }
    },
    mounted() {
        this.getSPP()
    }
}
</script>

<style>

</style>