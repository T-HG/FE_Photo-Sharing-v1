/**
 * fetchModel - Fetch a model from the web server.
 *
 * /@param {string} url       The URL to issue the GET request.
 *
 */

const API_BASE = "http://localhost:3001";
function fetchModel(url) {
  return fetch(API_BASE + url).then((res => {
    if (!res.ok){
      throw new Error(res.status);
    }
    return res.json();
  }));
}

export default fetchModel;
