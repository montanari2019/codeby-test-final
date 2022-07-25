const BASE_URL =
  "https://my-json-server.typicode.com/montanari2019/codeBy-carrinho-compras-Api/";


export const defaultFetcher = (url: string) =>
  fetch(BASE_URL + url).then((res) => res.json());

export const loginFetcher = (url: string) =>
  fetch(BASE_URL + url).then((res) => res.json());
