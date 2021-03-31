import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
  	token: localStorage.getItem('Authorization') || '',
  	petugas : {},
  },
  mutations: {
    auth_request(state){
	    	state.status = 'loading'
	  	},
	  	auth_success(state, token){
		    state.status = 'success'
		    state.token = token
	  	},
	  	auth_error(state){
	    	state.status = 'error'
	  	},
	  	logout(state){
	    	state.status = ''
	    	state.token = ''
	  	},
  },
  actions: {
    login({commit}, petugas){
      const headers = {
        headers: {
          'Accept' : 'application/json'
        }
      }
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.post('/petugas/login', petugas, headers).then(response => {
          if (response.data.status) {
            const token = response.data.token
            commit('auth_success', token)
            localStorage.setItem('Role', response.data.user.level)
            localStorage.setItem('Name', response.data.user.nama_petugas)
            localStorage.setItem('Authorization', 'Bearer '+token)
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization')
          } else {
            console.log(response.data.message);
          }
          resolve(response)
        }).catch(err => {
          commit('auth_error')
          localStorage.removeItem('Authorization')
          reject(err)
        })
      })
    },

    register({commit}, petugas){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.post('petugas/register', petugas).then(response => {
          commit('auth_success')
          resolve(response)
        }).catch(err => {
          commit('auth_error', err)
          console.log(err.response);
          reject(err)
        })
      })
    },

    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('Authorization')
        localStorage.removeItem('Role')
        localStorage.removeItem('Name')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters : {
	  isLoggedIn: state => !!state.token,
	  authStatus: state => state.status,
	}
})
