import axiosClient from "./axiosClient";

const colorsApi = {
  getAll(params) {
    const url = "/colors";
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/colors/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/colors`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/colors/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/colors/${id}`;
    return axiosClient.delete(url);
  },
};

export default colorsApi;
