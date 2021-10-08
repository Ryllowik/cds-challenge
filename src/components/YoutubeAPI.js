import axios from "axios";
const KEY = "AIzaSyAbnAP7eAADYw-XltUNaLlmJ_ItQfNusDk"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: "video",
    maxResults: 4,
    key: KEY,
  },
  responseType: 'json',
  headers: {}
});