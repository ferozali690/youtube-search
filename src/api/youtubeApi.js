import axios from "axios";
const KEY = "AIzaSyAKLvTO7UkWG7XMnSIYTPifQp4z-irh-Ok";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
