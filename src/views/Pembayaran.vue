<template>
  <div class="row">
        <div class="col">
          <div class="card">
            <!-- Card header -->
            <div class="card-header border-0">
              <div class="alert alert-dismissible fade show" :class="alertVariant" role="alert" v-show="alert">
                <span class="alert-icon"><i class="ni ni-like-2"></i></span>
                <span class="alert-text"><strong>{{alertMessage}}</strong></span>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="!alert">
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <button class="btn btn-success" @click="createPembayaran" data-toggle="modal" data-target="#modalPembayaran"><span class="alert-icon"><i class="ni ni-fat-add"></i></span>Pembayaran</button>
            </div>
            <!-- Light table -->
            <div class="table-responsive">
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                      <th></th>
                    <th scope="col">No.</th>
                    <th scope="col">Nama Petugas</th>
                    <th scope="col">Nama Siswa</th>
                    <th scope="col">Waktu Pembayaran</th>
                    <th scope="col">Jumlah Pembayaran</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="(pembayaran, index) in pembayaran" :key="index">
                    <td></td>
                    <td>
                        {{index+1}}
                    </td>
                    <td>
                        {{pembayaran.petugas.nama_petugas}}
                    </td>
                    <td>
                        {{pembayaran.siswa.nama}}
                    </td>
                    <td>
                        {{pembayaran.tgl_bayar}} - {{pembayaran.bulan_dibayar}} - {{pembayaran.tahun_dibayar}}                
                    </td>
                    <td>
                        {{pembayaran.jumlah_bayar | rupiah}}
                    </td>
                    <td>
                        <button class="btn btn-success" data-toggle="modal" :data-target="'#modaldetailPembayaran'+index" @click="getDetailPembayaran(index)">Detail</button>
                        <button class="btn btn-primary" @click="updatePembayaran(index)" data-toggle="modal" data-target="#modalPembayaran" >Edit</button>
                        <button class="btn btn-danger" @click="deletePembayaran(index)">Delete</button>
                    </td>

                     <!--MODAL -->
      <div class="modal fade" :id="'modaldetailPembayaran'+index" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
        <div class="modal-dialog modal- modal-dialog-centered modal-" role="document">
          <div class="card card-profile">
            <img src="../../public/assets//img/theme/img-1-1000x600.jpg" alt="Image placeholder" class="card-img-top">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img src="../../public/assets/img/theme/team-4.jpg" class="rounded-circle">
                  </a>
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="d-flex justify-content-between">
                <br>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="text-center">
                <h5 class="h3">
                  {{detailPembayaran.tahun}}<span class="font-weight-light">, {{detailPembayaran.jumlah_bayar}}</span>
                </h5>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>
                  <a href="" class="btn btn-sm btn-default">{{detailPembayaran.jumlah_bayar}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modalPembayaran" tabindex="-1" role="dialog" aria-labelledby="modalEditPembayaranLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalEditPembayaranLabel"><span v-if="action === 'create'">Tambah</span> <span v-else>Edit</span> Pembayaran</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form> 
                <div class="col">
                  <div class="form-group">
                    <div class="row">
                      <label class="form-control-label" for="input-nama-petugas">Nama Petugas</label>
                      <select id="input-nama-petugas" class="form-control" v-model="id_petugas">
                          <option value="" disabled selected>Pilih Petugas</option>
                          <option v-for="(petugas, index) in petugas" :key="index" :value="petugas.id_petugas">{{petugas.nama_petugas}} - {{petugas.level.toUpperCase()}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <label class="form-control-label" for="input-nama-siswa">Nama Siswa</label>
                      <select id="input-nama-siswa" class="form-control" v-model="nisn">
                          <option value="" disabled selected>Pilih Siswa</option>
                          <option v-for="(siswa, index) in siswa" :key="index" :value="siswa.nisn" >{{siswa.nama}} - {{siswa.kelas.nama_kelas}} {{siswa.kelas.kompetensi_keahlian}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <!-- <div class="row">
                        <div class="col">
                            <label class="form-control-label" for="input-tanggal-pembayaran">Tanggal Dibayar</label>
                            <input type="number" id="input-tanggal-pembayaran" class="form-control" placeholder="10" v-model="tanggal">
                        </div>
                        <div class="col">
                            <label class="form-control-label" for="input-bulan-pembayaran">Bulan Dibayar</label>
                            <input type="number" id="input-bulan-pembayaran" class="form-control" placeholder="12" v-model="bulan">
                        </div>
                        <div class="col">
                            <label class="form-control-label" for="input-tahun-pembayaran">Tahun Dibayar</label>
                            <input type="number" id="input-tahun-pembayaran" class="form-control" placeholder="2021" v-model="tahun">
                        </div>
                    </div> -->
                    <div class="row">
                        <label class="form-control-label" for="input-tanggal-pembayaran">Tanggal Dibayar</label>
                        <input type="date" id="input-tanggal-pembayaran" class="form-control datepicker" placeholder="Select date" v-model="date">
                    </div>
                  </div>
                  <!-- <div class="form-group">
                    <div class="row">
                          <label class="form-control-label" for="input-bulan-pembayaran">Bulan Dibayar</label>
                          <input type="number" id="input-bulan-pembayaran" class="form-control" placeholder="12" v-model="bulan">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                          <label class="form-control-label" for="input-tahun-pembayaran">Tahun Dibayar</label>
                          <input type="number" id="input-tahun-pembayaran" class="form-control" placeholder="2021" v-model="tahun">
                    </div>
                  </div> -->
                  <div class="form-group">
                    <div class="row">
                      <label class="form-control-label" for="input-spp">SPP</label>
                      <select id="input-spp" class="form-control" v-model="id_spp">
                          <option value="" disabled selected>Pilih SPP</option>
                          <option v-for="(spp, index) in spp" :key="index" :value="spp.id_spp" >{{spp.tahun}} - {{spp.nominal | rupiah}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                          <label class="form-control-label" for="input-nominal-pembayaran">Nominal Pembayaran</label>
                          <!-- <input type="text" id="input-nominal-pembayaran" class="form-control" placeholder="500000" v-model="jumlah_bayar"> -->
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text sm" >Rp</span>
                            </div>
                            <input type="text" id="input-nominal-pembayaran" class="form-control" placeholder="500000">
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
        <!-- END MODAL -->
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <pre>{{detailPembayaran}}</pre> -->
          </div>
        </div>

      </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            alert: false,
            id_pembayaran: '',
            pembayaran: '',
            detailPembayaran: '',
            
            petugas: '',
            id_petugas: '',

            siswa: '',
            nisn: '',

            spp: '',
            id_spp: '',

            date: '',
            // tanggal: '',
            // bulan: '',
            // tahun: '',
            jumlah_bayar: '',
            
            action: '',
            buttonClass: '',

            // alert
            alertVariant: '',
            alertMessage: ''
        }
    },
    methods: {
        getPembayaran() {
            this.axios.get('administrator/pembayaran').then(response => {
                this.pembayaran = response.data
            })
        },
        getPetugas() {
            this.axios.get('administrator/petugas').then(response => {
                this.petugas = response.data
            })
        },
        getSiswa() {
            this.axios.get('administrator/siswa').then(response => {
                this.siswa = response.data.data
            })
        },
        getSPP() {
            this.axios.get('administrator/spp').then(response => {
                this.spp = response.data
            })
        },
        getDetailPembayaran(index) {
            this.id_pembayaran = this.pembayaran[index].id_pembayaran
            this.axios.get('administrator/pembayaran/'+this.id_pembayaran).then(response => {
                this.detailPembayaran = response.data
            })
        },
        createPembayaran() {
          this.action = 'create'
          this.buttonClass = 'btn btn-success'
          this.getPetugas()
          this.getSiswa()
          this.getSPP()
          this.id_pembayaran = ''
          this.id_petugas = ''
          this.nisn = ''
          this.id_spp = ''
          this.tanggal = ''
          this.bulan = ''
          this.tahun = ''
          this.jumlah_bayar = ''
        },
        updatePembayaran(index) {
          this.action = 'update'
          this.buttonClass = 'btn btn-primary'
          this.id_pembayaran = this.pembayaran[index].id_pembayaran
          console.log(this.id_pembayaran);
          this.id_petugas = this.pembayaran[index].id_petugas
          console.log(this.id_petugas);
          this.nisn = this.pembayaran[index].nisn
          console.log(this.nisn);
          this.id_spp = this.pembayaran[index].id_spp
          console.log(this.id_spp);
          this.tanggal = this.pembayaran[index].tgl_bayar
          console.log(this.tanggal);
          this.bulan = this.pembayaran[index].bulan_dibayar
          console.log(this.bulan);
          this.tahun = this.pembayaran[index].tahun_dibayar
          console.log(this.tahun);
          this.jumlah_bayar = this.pembayaran[index].jumlah_bayar
          console.log(this.jumlah_bayar);
        },
        save() {
          const dataPembayaran = {
            id_petugas: this.id_petugas,
            nisn: this.nisn,
            id_spp: this.id_spp,
            tgl_bayar: moment(this.date).format('D'),
            bulan_dibayar: moment(this.date).format('M'),
            tahun_dibayar: moment(this.date).format('YYYY'),
            jumlah_bayar: this.jumlah_bayar,
          }
          if (this.action === 'create') {
            this.axios.post('administrator/pembayaran', dataPembayaran).then(response => {
              this.alertSuccess()
              console.log(response);
              this.getPembayaran()
            }).catch(error => {
              this.alertFailed()
              console.log(error.response)
            })
          } else {
            this.axios.put('administrator/pembayaran/'+this.id_pembayaran, dataPembayaran).then(response => {
              this.alertSuccess()
              console.log(response)
              this.getPembayaran()
            }).catch(error => {
              this.alertFailed()
              console.log(error.response)
            })
          }
        },
        deletePembayaran(index) {
          this.action = 'delete'
          this.id_pembayaran = this.pembayaran[index].id_pembayaran
          this.axios.delete('administrator/pembayaran/'+this.id_pembayaran).then(response => {
            this.alertSuccess()
            console.log(response);
            this.getPembayaran()
          }).catch(error => {
            this.alertFailed()
            console.log(error.response);
          })
        },
        alertSuccess() {
          this.alert = true
          this.alertVariant = 'alert-success'
          if (this.action === 'create') {
            this.alertMessage = "Berhasil menambahkan data Pembayaran"
          } else if (this.action === 'update') {
            this.alertMessage = "Berhasil mengubah data Pembayaran"
          } else {
            this.alertMessage = "Berhasil menghapus data Pembayaran"
          }
        },
        alertFailed() {
          this.alert = true
          this.alertVariant = 'alert-warning'
          if (this.action === 'update') {
            this.alertMessage = "Gagal menambahkan data Pembayaran"
          } else if (this.action === 'update') {
            this.alertMessage = "Gagal mengubah data Pembayaran"
          } else {
            this.alertMessage = "Gagal menghapus data Pembayaran"
          }
        }
    },
    mounted() {
        this.getPembayaran()
    }
}
</script>

<style>
/* body {
  background-color: #fcfcfc
} */
</style>