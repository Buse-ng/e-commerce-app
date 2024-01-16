import axios from 'axios';
const baseURL = 'https://fakestoreapi.com/';
const FakeStoreApi = axios.create({
    baseURL,
  });
export default FakeStoreApi;