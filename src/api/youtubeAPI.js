import Axios from 'axios';

const YT_API_KEY = 'AIzaSyDE7YwaFo19aPieuQOzqlwjEXCQF_9dsDM';

export default Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '10',
    key: YT_API_KEY,
  },
});
