// window.axios.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     const AUTH_TOKEN = Ls.get('auth.token')

//     if (AUTH_TOKEN) {
//       config.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
//     }

//     return config
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error)
//   }
// )

const ApiService = {
	get(resource, slug = "") {
    return window.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[KT] ApiService ${error}`);
    });
	},

  post(resource, params) {
    return window.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return window.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return window.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return window.axios.delete(resource).catch(error => {
      // console.log(error);
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
}

export default ApiService;