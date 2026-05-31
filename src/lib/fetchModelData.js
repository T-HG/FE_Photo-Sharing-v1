/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 *
 */
function fetchModel(url) {
  const models = null;
  return fetch(url).then((res => {
    if (!res.ok){
      throw new Error(res.status);
    }
    return res.json();
  }));
}

export default fetchModel;
