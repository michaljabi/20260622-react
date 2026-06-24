import { create } from "axios";

export const httpClient = create({
  baseURL: "http://localhost:3000",
});

// Od razu "odwrapujemy" dane:
// Czegoś takiego nie ma natywny fetch() w przeglądarce.
// Doc do fetch: https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch

// https://axios-http.com/
// https://axios.rest/pages/advanced/interceptors.html
// https://axios.rest/pages/advanced/cancellation.html
httpClient.interceptors.response.use((value) => value.data);


// Element EXTRA, czysto koncepcyjnie (niepotrzebne do naszej aplikcaji - pokazuje potencajlny rozwój)
// Chodzi o to że nasze SPA może korzystać z kilku back-endów!

export const typicodeIoHttpClient = create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// Od razu "odwrapujemy" dane:
typicodeIoHttpClient.interceptors.response.use((value) => value.data);