import axiosClient from "./axiosClient";

const sizeApi = {
  getAll(params) {
    const url = "/size";
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/size/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/size`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/size/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/size/${id}`;
    return axiosClient.delete(url);
  },
};

export default sizeApi;
