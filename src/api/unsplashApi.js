import axios from 'axios';

const API_KEY = 'gYm4Dxwc7b-JoAs3zqmAzS9m3OrZWI0I4DA_4P8nSxE';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data;
};