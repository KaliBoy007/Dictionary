import axios from "axios";
export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com:443/api/v2/entries/en-gb",
});
