<template>
  <div class="row">
        <div class="col">
          <div class="card">
            <!-- Card header -->
            <div class="card-header border-0">
              <div class="alert alert-dismissible fade show" :class="alertVariant" role="alert" v-show="alert">
                <!-- <span class="alert-icon"><i class="ni ni-like-2"></i></span> -->
                <span class="alert-text"><strong>{{alertMessage}}</strong></span>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="!alert">
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <button class="btn btn-success" @click="createPetugas" data-toggle="modal" data-target="#modalPetugas"><span class="alert-icon"><i class="ni ni-fat-add"></i></span>Petugas</button>
            </div>
            <!-- Light table -->
            <div class="table-responsive">
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                      <th></th>
                    <th scope="col">No.</th>
                    <th scope="col">Nama Petugas</th>
                    <th scope="col">Username</th>
                    <th scope="col">Role</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="(petugas, index) in petugas" :key="index">
                    <td></td>
                    <td>
                        {{index+1}}
                    </td>
                    <td>
                      {{petugas.nama_petugas}}
                    </td>
                    <td>
                      {{petugas.username}}
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-warning" v-if="petugas.level == 'admin'"></i>
                        <i class="bg-success" v-else></i>
                        {{petugas.level}}
                      </span>
                    </td>
                    <td>
                        <button class="btn btn-success" data-toggle="modal" :data-target="'#modalDetailPetugas'+index" @click="getDetailPetugas(index)">Detail</button>
                        <button class="btn btn-primary" @click="updatePetugas(index)" data-toggle="modal" data-target="#modalPetugas" >Edit</button>
                        <button class="btn btn-danger" @click="deletePetugas(index)">Delete</button>
                    </td>

                      <!-- MODAL DETAIL -->
      <div class="modal fade" :id="'modalDetailPetugas'+index" tabindex="-1" role="dialog" aria-labelledby="modalDetailPetugas" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalDetailPetugas">Detail Petugas</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form> 
                <div class="col">
                  <div class="form-group">
                    <div class="row">
                      <label class="form-control-label" for="input-first-name">Nama Petugas</label>
                      <input type="text" id="input-first-name" class="form-control" placeholder="First name" v-model="detailPetugas.nama_petugas" disabled>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                          <label class="form-control-label" for="input-username">Username</label>
                          <input type="text" id="input-username" class="form-control" placeholder="Username" v-model="detailPetugas.username" disabled>
                    </div>
                  </div>
                  <div class="form-group" v-if="action === 'create'">
                    <div class="row">
                          <label class="form-control-label" for="input-password">Password</label>
                          <input type="text" id="input-password" class="form-control" placeholder="Password" v-model="detailPetugas.password" disabled>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <label class="form-control-label" for="input-role">Role</label>
                      <select name="role" id="input-role" class="form-control" v-model="detailPetugas.level" disabled>
                        <option value="" disabled selected>Pilih Role</option>
                        <option value="admin">Admin</option>
                        <option value="petugas">Petugas</option>
                      </select>
                    </div>
                  </div>
                </div>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Tutup</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modalPetugas" tabindex="-1" role="dialog" aria-labelledby="modalEditPetugasLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalEditPetugasLabel"><span v-if="action === 'create'">Tambah</span> <span v-else>Edit</span> Petugas</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form> 
                <div class="col">
                  <div class="form-group">
                    <div class="row">
                      <label class="form-control-label" for="input-first-name">Nama Petugas</label>
                      <input type="text" id="input-first-name" class="form-control" placeholder="First name" v-model="nama_petugas">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                          <label class="form-control-label" for="input-username">Username</label>
                          <input type="text" id="input-username" class="form-control" placeholder="Username" v-model="username">
                    </div>
                  </div>
                  <div class="form-group" v-if="action === 'create'">
                    <div class="row">
                          <label class="form-control-label" for="input-password">Password</label>
                          <input type="text" id="input-password" class="form-control" placeholder="Password" v-model="password">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <label class="form-control-label" for="input-role">Role</label>
                      <select name="role" id="input-role" class="form-control" v-model="level">
                        <option value="" disabled selected>Pilih Role</option>
                        <option value="admin">Admin</option>
                        <option value="petugas">Petugas</option>
                      </select>
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
        <!-- END MODAL -->
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <pre>{{detailPetugas}}</pre> -->
          </div>
        </div>

      </div>
</template>

<script>
export default {
    data() {
        return {
            alert: false,
            id_petugas: '',
            petugas: '',
            detailPetugas: '',
            username: '',
            password: '',
            nama_petugas: '',
            level: '',
            action: '',
            buttonClass: '',

            // alert
            alertVariant: '',
            alertMessage: ''
        }
    },
    methods: {
        getPetugas() {
            this.axios.get('petugas').then(response => {
                this.petugas = response.data
            })
        },
        getDetailPetugas(index) {
            const id_petugas = this.petugas[index].id_petugas
            this.axios.get('petugas/'+id_petugas).then(response => {
                this.detailPetugas = response.data
            })
        },
        createPetugas() {
          this.action = 'create'
          this.buttonClass = 'btn btn-success'
          this.username = ''
          this.password = ''
          this.nama_petugas = ''
          this.level = ''
        },
        updatePetugas(index) {
          this.action = 'update'
          this.buttonClass = 'btn btn-primary'
          this.id_petugas = this.petugas[index].id_petugas
          this.username = this.petugas[index].username
          this.nama_petugas = this.petugas[index].nama_petugas
          this.level = this.petugas[index].level
        },
        save() {
          const dataPetugas = {
            username: this.username,
            password: this.password,
            nama_petugas: this.nama_petugas,
            level: this.level
          }
          if (this.action === 'create') {
            this.axios.post('petugas', dataPetugas).then(response => {
              this.alertSuccess()
              console.log(response);
              this.getPetugas()
            }).catch(error => {
              this.alertFailed()
              console.log(error.response)
            })
          } else {
            this.axios.put('petugas/'+this.id_petugas, dataPetugas).then(response => {
              this.alertSuccess()
              console.log(response)
              this.getPetugas()
            }).catch(error => {
              this.alertFailed()
              console.log(error.response)
            })
          }
        },
        deletePetugas(index) {
          this.action = 'delete'
          const id_petugas = this.petugas[index].id_petugas
          this.axios.delete('petugas/'+id_petugas).then(response => {
            this.alertSuccess()
            console.log(response);
            this.getPetugas()
          }).catch(error => {
            this.alertFailed()
            console.log(error.response);
          })
        },
        alertSuccess() {
          this.alert = true
          this.alertVariant = 'alert-success'
          if (this.action === 'create') {
            this.alertMessage = "Berhasil menambahkan data Petugas"
          } else if (this.action === 'update') {
            this.alertMessage = "Berhasil mengubah data Petugas"
          } else {
            this.alertMessage = "Berhasil menghapus data Petugas"
          }
        },
        alertFailed() {
          this.alert = true
          this.alertVariant = 'alert-warning'
          if (this.action === 'update') {
            this.alertMessage = "Gagal menambahkan data Petugas"
          } else if (this.action === 'update') {
            this.alertMessage = "Gagal mengubah data Petugas"
          } else {
            this.alertMessage = "Gagal menghapus data Petugas"
          }
        }
    },
    mounted() {
        this.getPetugas()
    }
}
</script>

<style>

</style>