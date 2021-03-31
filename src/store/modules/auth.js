import ApiService from '@/classes/ApiService';
import axios from 'axios';

export default {
  state: {
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async init() {
      if (localStorage.getItem('auth-token')) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth-token')
        this.commit('setToken', localStorage.getItem('auth-token'))
      }
    },
    async login({ commit, state }, credentials) {
      const response = await ApiService.post('/auth', credentials);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
      localStorage.setItem('auth-token', response.data.token);
      this.commit('setToken', response.data.token)
    },
    logout() {
      localStorage.removeItem('auth-token');
      this.commit('setToken', null)
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
  },
};
