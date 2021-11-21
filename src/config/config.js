const API_HOST = "http://localhost:9000";
const fetcher = (url) => fetch(url).then((res) => res.json());
export { API_HOST, fetcher };
