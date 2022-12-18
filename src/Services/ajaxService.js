export function ajaxService(url, params) {
  return fetch('http://127.0.0.1:8000/api' + url, params).then((data) => {
    return data.json;
  });
}
