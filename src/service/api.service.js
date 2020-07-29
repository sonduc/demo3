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
