const fetch = require("node-fetch");
const nFetch = async (url) => {
    const response = await fetch(url);
    return await response.json();
}

module.exports = nFetch;