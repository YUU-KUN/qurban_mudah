<template>
  <div class="row">
        <div class="col">
          <div class="card">
            <!-- Card header -->
            <div class="card-header border-0">
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
export default {
    data() {
        return {
            pembayaran: '',
            detailPembayaran: '',
        }
    },
    methods: {
        getPembayaran() {
            this.axios.get('administrator/pembayaran').then(response => {
                this.pembayaran = response.data
            })
        },
        getDetailPembayaran(index) {
            this.id_pembayaran = this.pembayaran[index].id_pembayaran
            this.axios.get('administrator/pembayaran/'+this.id_pembayaran).then(response => {
                this.detailPembayaran = response.data
            })
        },
    },
    mounted() {
        this.getPembayaran()
    }
}
</script>

<style>

</style>
