/**
 * fetchModel - Fetch a model from the web server.
 *
 * /@param {string} url       The URL to issue the GET request.
 *
 */

const API_BASE = "http://localhost:3001";
function fetchModelData(url, options = {}) {

  const fetchOption = {
    method: options.method || "GET",
    headers: {
      "Content-Type" : "application/json",
    }
  };

  if( options.body) {
    fetchOption.body = JSON.stringify(options.body);
  }

  return fetch(API_BASE + url, fetchOption).then((res => {
    if (!res.ok){
      throw new Error(res.status);
    }
    return res.json();
  }));
}

export default fetchModelData;
