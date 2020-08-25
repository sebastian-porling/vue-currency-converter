const API = "https://api.exchangeratesapi.io/latest";

fetchFromURL = async (url = "") => {
    const res = await axios.get(API+url);
    return res.data.rates;
};