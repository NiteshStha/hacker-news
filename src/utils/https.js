const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

function getUrl(url) {
  return BASE_URL + url;
}

export default getUrl;
