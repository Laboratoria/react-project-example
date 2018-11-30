import 'isomorphic-unfetch';

const endpoint =
  'https://api.giphy.com/v1/gifs/search?api_key=Nr19rB5ZRAJCdLgBjORhG5AnOEwuJjRI&q=high%20five&limit=25&offset=0&rating=G&lang=en';

const Api = {
  get: () => fetch(endpoint)
};

export default Api;
