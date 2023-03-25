import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": '5296f4f9b3msh6cc634a91ba440ap1ebf91jsna9578dafecf1',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
